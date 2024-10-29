import styles from './Input.module.css';

export function Input({placeholder, value, onChange, type}){

    return(
        
        <input 
            type={type} 
            placeholder={placeholder} 
            value={value} 
            onChange={onChange} 
            className={styles.inputEstilizado} 
        />
    )
}