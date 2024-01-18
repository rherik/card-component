import { ButtonInterface } from "../types";
import styles from './Button.module.css';

const Button = ({text, type, referencia, filled, icon}: ButtonInterface) => {
    const filledClass = filled ? styles.filled: "";
    const link = referencia.startsWith('http') ? referencia : `http://${referencia}`;

  return (
        <a href={link} 
        target="_blank" 
        className={`${styles.button}
        ${styles[type]}
        ${filledClass}`}
        >
            <span>{text}</span>
            {icon}
        </a>
    )
}
export default Button