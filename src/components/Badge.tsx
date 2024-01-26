import { BadgeInterface } from "../types";
import styles from './Badge.module.css';
import stylesI from './Card.module.css';


const Badge = ({text, filled, referencia}: BadgeInterface) => {
    const filledClass = filled ? styles.filled: "";
    const link = referencia?.startsWith('https') ? referencia : `https://${referencia}`;
  return (
        <a href={link}
        target="_blank">
            <div className={stylesI.indicator} onClick={() => `${link}`}>
                <small className={`${styles.badge} ${filledClass}`}>{text}</small>
            </div>
        </a>
    )
}
export default Badge;