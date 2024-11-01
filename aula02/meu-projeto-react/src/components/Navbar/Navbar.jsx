import styles from './Navbar.module.css';
import ps1_logo from '../../assets/Playstation_logo_colour.svg.png'
import { useNavigate } from 'react-router-dom';

export function Navbar(){
    
   const navigate = useNavigate(); 

   const handleNavigation=()=> navigate("/contato");
    return(
        <>
            <header className={styles.header}>
                <div className={styles.imagemContainer}>
                    <img className={styles.imagemLogo} src={ps1_logo} alt="imagem-logo" />
                </div>
                <div className={styles.navList}>
                    <ul>
                        <li>Sobre</li>
                        <li> <button onClick={handleNavigation}>Contato</button></li>
                        <li>Entrar</li>
                       

                    </ul>
                </div>
            </header>
        </>
    )
}