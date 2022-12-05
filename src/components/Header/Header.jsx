import React, {useState} from 'react';
import cn from 'classnames'
import styles from './header.module.css'
import Logo from "../UI/Logo/Logo";
import Burger from "./components/Burger/Burger";
import Dropdown from "./components/Dropdown/Dropdown";
import Container from "../Container/Container";
import NavMenu from "./components/NavMenu/NavMenu";

const Header = () => {
    const links = [
        {text: 'Home', href: '/'},
        {text: 'Characters', href: '/characters?page=1'},
        {text: 'Error', href: '/error'},
        {text: 'Error', href: '/error'}
    ]

    const [active, setActive] = useState(false)

    return (
        <header className={styles.header}>
            <Container>
                <menu className={styles.header_wrapper}>
                    <ul className={cn('list-reset', styles.menu)}>

                        <div className={styles.inner}>
                            <Burger
                                active={active}
                                handler={() => setActive(!active)}
                                classes={styles.burger_btn}
                            />
                            <Dropdown active={active} setActive={setActive} links={links}/>
                            <Logo classes={styles.logo}/>
                        </div>

                        <NavMenu links={links}/>

                        <input type="search"/>
                    </ul>

                </menu>
            </Container>
        </header>
    );
};

export default React.memo(Header);