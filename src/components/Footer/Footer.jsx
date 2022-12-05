import React from 'react';
import styles from './footer.module.css'
import github_logo from './img/github-logo.png'
import Container from "../Container/Container";

const Footer = () => {

    return (
        <div className={styles.footer}>
            <Container>
                <div className={styles.inner}>
                    <p className={styles.developer}>
                        Copyright © 2022, All Right Reserved
                    </p>
                    <p className={styles.social}>
                        <a className={styles.link} href="https://github.com/kira-ru">
                            <img src={github_logo} alt="github"/>
                        </a>
                    </p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;