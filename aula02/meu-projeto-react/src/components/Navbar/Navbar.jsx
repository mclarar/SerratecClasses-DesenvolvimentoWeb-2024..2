import styles from './Navbar.module.css';
import ps1_logo from '../../assets/Playstation_logo_colour.svg.png'

export function Navbar(){
    return(
        <>
            <header className={styles.header}>
                <div className={styles.imagemContainer}>
                    <img className={styles.imagemLogo} src={ps1_logo} alt="imagem-logo" />
                </div>
                <div className={styles.navList}>
                    <ul>
                        <li>Sobre</li>
                        <li>Contato</li>
                        <li>Entrar</li>

                    </ul>
                </div>
            </header>
        </>
    )
}