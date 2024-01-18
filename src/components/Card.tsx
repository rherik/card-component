import { CardInterface } from "../types";
import Badge from "./Badge";
import Button from "./Button";
import styles from './Card.module.css';

const Card = ({body, btn, title, badge, image, indicator, subtitle, btn2}: CardInterface) => {
    return (
        <article className={`stack-lg ${styles.card}`}>
            {indicator &&
            <small className={styles.indicator}>{indicator}</small>}
            <div className="stack-sm">
                <h3 className={styles.title}>{title}</h3>
                {subtitle &&
                    <small className={styles.subtitle}>{subtitle}</small>
                }
            </div>
            {image &&
                <img src={image} alt="Adoção svg" className="styles.image"/>
            }
            <p className={styles.body}>{body}</p>
            {badge && <Badge text={badge.text} filled={badge.filled}/>}
            <div  className="stack-sm">
                {btn && <Button text={btn.text}
                    type={btn.type} filled={btn.filled}
                    referencia={btn.referencia} icon={btn.icon}/>
                }
                {btn2 && <Button text={btn2.text}
                    type={btn2.type} filled={btn2.filled}
                    referencia={btn2.referencia} icon={btn2.icon}/>
                }
            </div>
        </article>
    )
}
export default Card
