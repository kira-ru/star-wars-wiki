import styles from './characters.module.css'
import React from 'react'
import {useGetPeopleQuery} from "../../service/swapiAPI";
import Card from "../../components/Card/Card";
import Container from "../../components/Container/Container";
import Loader from "../../components/Loader/Loader";
import {Link, useSearchParams} from "react-router-dom";
import Paginator from "../../components/Paginator/Paginator";
import Title from "../../components/Title/Title";
import Grid from "../../components/Grid/Grid";
import Error from "../../components/Error/Error";


const Characters = () => {
    const [queryParams] = useSearchParams()
    const currentPage = queryParams.get('page')

    const {data, isFetching, isError} = useGetPeopleQuery(currentPage);
    const {
        results: persons,
        next,
        previous: prev,
        count
    } = {...data}


    //	useEffect(() => {
    // 		refetch();
    // 		// eslint-disable-next-line react-hooks/exhaustive-deps
    // 	}, [value]);


    if (isFetching) return <Loader/>
    if (isError) return <Error/>

    return (
        <section className={styles.wrapper}>
            <Container>
                <Title>Characters</Title>

                <Grid>
                    {
                        persons.map(person => (
                            <Card key={person.id} person={person}/>
                        ))
                    }
                </Grid>

                <Paginator
                    total={count}
                    currentPage={currentPage}
                    next={next}
                    prev={prev}
                />
            </Container>
        </section>
    );
};


export default React.memo(Characters);