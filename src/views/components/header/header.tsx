import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo.svg";
import Statistic from "../../../assets/images/statistic.svg";
import Search from "../../../assets/images/search.svg";
import styles from "./header.module.sass";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <button className={styles.headerBurger}></button>
        <nav>
          <ul className={styles.headerNav}>
            <li>
              <Link className={styles.headerNavItem} to="/packaging">
                Упаковка
              </Link>
            </li>
            <li className={styles.headerNavItem}>
              <Link to="/eqipment">Оборудование</Link>
            </li>
            <li className={styles.headerNavItem}>
              <Link to="/service">Сервис и запчасти</Link>
            </li>
          </ul>
        </nav>
        <Link className={styles.headerLogo} to="/">
          <img src={Logo} alt="" />
        </Link>
        <ul className={styles.headerList}>
          <li className={styles.headerItem}>
            <button>
              <img src={Statistic} alt="" />
            </button>
          </li>
          <li className={styles.headerItem}>
            <button>
              <img src={Search} alt="" />
            </button>
          </li>
        </ul>
        <div className={styles.headerInfo}>
          <a href="tel:+74991361718">+7 (499) 136-17-18</a>
          <a href="mailto:info@monevac.ru">info@monevac.ru</a>
        </div>
        <a className={styles.headerBtn} href="/#form">
          Оставить заявку
        </a>
      </div>
    </header>
  );
};
