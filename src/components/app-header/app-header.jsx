import { Logo,
     BurgerIcon, 
     ListIcon, 
     ProfileIcon } 
     from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css'
function AppHeader() {
    return (
        <header className={`${styles.header} p-5`}>
            <nav className={styles.header_navigation}>
                <ul className={styles.header_list}>
                    <li className={`${styles.menu_first} pt-4 pb-4 pr-5 pl-5 mr-2`}>
                        <BurgerIcon type="primary" />
                        <p className={`${styles.block} text text_type_main-default`}>Конструктор</p></li>
                    <li className={`${styles.menu_second} pt-4 pb-4 pr-5 pl-5`}>
                        <ListIcon type="secondary" />
                        <p className={`${styles.block} text text_type_main-default text_color_inactive`}>Лента заказов</p></li>
                </ul>
                <Logo />
                <div className={`${styles.user_profile} pt-4 pb-4 pr-5 pl-5`}>
                    <ProfileIcon type="secondary" />
                    <p className={`${styles.block} text text_type_main-default text_color_inactive`}>Личный кабинет</p></div>
            </nav>
        </header>
    )
}

export default AppHeader