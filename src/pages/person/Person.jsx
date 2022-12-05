import React from 'react';
import {useParams} from "react-router-dom";
import {
    useGetPersonQuery, useGetRelatedStarshipsQuery, useGetRelatedVehiclesQuery,
} from "../../service/swapiAPI";
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import Title from "../../components/Title/Title";
import Description from "../../components/Description/Description";
import InfoCard from "../../components/InfoCard/InfoCard";
import styles from './person.module.css'
import FilmsCard from "../../components/FilmsCard/FilmsCard";
import Related from "../../components/Related/Related";
import Image from "../../components/Image/Image";

const Person = () => {
    const id = useParams().id
    const {data: person, isFetching, isSuccess: isPersonSuccess} = useGetPersonQuery(id)

    // const [starshipsTrigger, {isSuccess: isStarShipsSuccess}] = useLazyGetRelatedStarshipsQuery()
    // const [vehiclesTrigger, {data: vehicles, isSuccess: isVehiclesSuccess}, lastPromiseInfo] = useLazyGetRelatedVehiclesQuery()

    // async function getRelatedData() {
    //     if (person) {
    //         const starships = await starshipsTrigger(person.starships)
    //         const vehicles = await vehiclesTrigger(person.vehicles)
    //         console.log(starships, vehicles)
    //     }
    // }
    //
    // useEffect(() => {
    //     getRelatedData()
    //
    // }, [person])


    const {data: starships, isSuccess: isStarshipsSuccess} = useGetRelatedStarshipsQuery(person?.starships, {
        skip: !isPersonSuccess
    })
    const {data: vehicles, isSuccess: isVehiclesSuccess} = useGetRelatedVehiclesQuery(person?.vehicles, {
        skip: !isPersonSuccess
    })

    if (isFetching) return <Loader/>

    return (
        <section className='person'>
            <Container>
                <Title>{person.name}</Title>

                <div className={styles.box}>
                    <Card person={person} isPersonalPage={true}/>
                    <Description person={person}/>

                    <Related
                        starships={starships}
                        vehicles={vehicles}

                    />
                </div>
            </Container>
        </section>
    );
};

export default Person;