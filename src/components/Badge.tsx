import { BadgeInterface } from "../types";
import styles from './Badge.module.css';
import stylesI from './Card.module.css';
import resume from '../statics/resume.pdf';


const Badge = ({text, filled}: BadgeInterface) => {
    const filledClass = filled ? styles.filled: "";
    //const link = referencia?.startsWith('https') ? referencia : `https://${referencia}`;
  return (
        <a href={resume}
        target="_blank"
        rel="noopener noreferrer">
            <div className={stylesI.indicator}>
                <small className={`${styles.badge} ${filledClass}`}>{text}</small>
            </div>
        </a>
    )
}
export default Badge;