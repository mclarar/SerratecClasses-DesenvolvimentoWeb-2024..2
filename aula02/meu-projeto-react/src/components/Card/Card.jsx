import styles from './Card.module.css';

export function Card({foto, titulo, subtitulo}){

    return(
        <>

        <div className={styles.card}>
            <img className={styles.imagem} src={foto} alt="" />
              <h2 className={styles.titulo}>{titulo}</h2>
              <p className={styles.subtitulo}>{subtitulo}</p>  
        </div>
       
       </>
    )
}