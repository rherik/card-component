import { BadgeInterface } from "../types";
import styles from './Badge.module.css';

const Badge = ({text, filled}: BadgeInterface) => {
    const filledClass = filled ? styles.filled: "";

  return (
        <small className={`${styles.badge} ${filledClass}`}>{text}</small>
    )
}
export default Badge