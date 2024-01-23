import { CardInterface } from "../types";
import Badge from "./Badge";
import Button from "./Button";
import styles from './Card.module.css';


const Card = ({body, btn, title, badge, image, indicator, subtitle, btn2}: CardInterface) => {  
    type Themes = "light" | "dark";
    const themeToggles = document.querySelectorAll('[name="themeSwitcher"]');
    function changeTheme(theme: Themes){
        document.documentElement.setAttribute("data-theme", theme);
    }
    function handleThemeClick(e: Event){
        const theme = (e.target as HTMLElement).id as Themes;
        changeTheme(theme);
    }
    themeToggles.forEach((t)=>t.addEventListener("change", handleThemeClick));    
  
    const themes = ["light", "dark"];
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
                <img src={image} alt="Adoção svg" className={styles.img}/>
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
            <div className={styles.theme_switcher}>
                {
                    themes.map(t => (
                        <label>
                            {t}
                            <input type="radio"
                            name="themeSwitcher" id={t} />
                        </label>
                    ))
                }
            </div>
        </article>
    )
}
export default Card
