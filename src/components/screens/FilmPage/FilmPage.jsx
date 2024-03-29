import React from 'react';
import Container from "../../Container/Container";
import FilmCard from "../../FilmCard/FilmCard";
import Description from "../../Description/Description";
import RelatedItems from "./components/RelatedItems/RelatedItems";
import styles from './filmpage.module.css'

import {FILMS} from "../../../constants/swapiAPI";

const FilmPage = ({film, relatedItemsUrls}) => {
    const resourceAndUrlsEntries = Object.entries(relatedItemsUrls)

    return (
        <section className={styles.wrapper}>
            <Container>
                <div className={styles.row}>
                    <FilmCard film={film}/>
                    <Description item={film} resource={FILMS}/>
                </div>

                {
                    resourceAndUrlsEntries.map(([resource, urls]) =>
                        <RelatedItems
                            key={resource}
                            resource={resource}
                            itemsUrls={urls}
                        />
                )}

            </Container>
        </section>
    );
};

export default FilmPage;