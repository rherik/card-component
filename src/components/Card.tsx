import React from "react";
import { FaRegSun as Sun } from "react-icons/fa";
import { IoIosMoon as Moon } from "react-icons/io";
import { CardInterface } from "../types";
import Badge from "./Badge";
import Button from "./Button";
import styles from './Card.module.css';

const Card = ({ body, btn, btn2, btn3, title, badge, image, subtitle }: CardInterface) => {
  const setDarkMode = () => {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

//
  const setLightMode = () => {
    document.documentElement.setAttribute("data-theme", "light"); 
    localStorage.setItem("selectedTheme", "light");
  };

//Armazena a preferência do usuário para exibir quando recarregar
  const selectedTheme = localStorage.getItem("selectedTheme");
  if (selectedTheme === "dark"){
    setDarkMode();
  }

  //mudar checked aqui
  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked){
      setDarkMode();
    }
    else{
      setLightMode();
    }
  }

  return (
    <article className={`stack-lg ${styles.card}`}>
      {badge && <Badge text={badge.text} filled={badge.filled} referencia={badge.referencia} />}
      <div className="stack-sm">
        <h3 className={styles.title}>{title}</h3>
        {subtitle && <small className={styles.subtitle}>{subtitle}</small>}
      </div>
      {image && <img src={image} alt="Adoção svg" className={styles.img} />}
      <p className={styles.body}>{body}</p>
      <div className="stack-sm">
        {btn && <Button text={btn.text} type={btn.type} filled={btn.filled} referencia={btn.referencia} icon={btn.icon} />}
        {btn2 && <Button text={btn2.text} type={btn2.type} filled={btn2.filled} referencia={btn2.referencia} icon={btn2.icon} />}
        {btn3 && <Button text={btn3.text} type={btn3.type} filled={btn3.filled} referencia={btn3.referencia} icon={btn3.icon} />}
      </div>
      <div className={styles.dark_mode}>
            <label className={styles.dark_mode_label}>
            <input
                className={styles.dark_mode_input}
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                defaultChecked={selectedTheme === "dark"}
            />
              <span className={styles.slider}>
              <Sun className={styles.sun}/>
              <Moon className={styles.moon}/>
              </span>
            </label>
        </div>
    </article>
  );
};

export default Card;
