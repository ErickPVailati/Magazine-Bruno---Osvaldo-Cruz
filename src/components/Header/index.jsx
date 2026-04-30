import { Link } from "react-router-dom";
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.brand}>
                <h2 className={styles.title}>Magazine Tsugiro-Kimimame</h2>
                <p className={styles.subtitle}>Tudo de A à Z</p>
            </div>
            <nav className={styles.nav}>
                <Link className={styles.link} to="/">Home</Link>
                <Link className={styles.link} to="/catalog">Produtos</Link>
                <Link className={styles.link} to="/sobre">Sobre</Link>
            </nav>
        </header>
    );
}