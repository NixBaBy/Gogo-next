import React from "react";
import styles from "../styles/header.module.css";
import { SmallNews } from "./SmallNews";
const menu = [
  {
    name: "Мэдээ",
  },
  {
    name: "GoGo Булан",
  },
  {
    name: "Үзэх",
  },
  {
    name: "Хэв маяг",
  },
  {
    name: "English",
  },
];
const headerRight = [
  {
    name: "Цаг агаар",
    img: "https://mgl.gogo.mn/newsn/v4/images/icon-snowflake.1fe08d41.svg",
    num: "-13",
  },
  {
    name: "Зурхай",
    img: "https://mgl.gogo.mn/newsn/v4/images/calendar-icon.ff84145b.svg",
    num: "12.19",
  },
  {
    name: "Валиутын ханщ",
    img: "$",
    num: "3418",
  },
];
const HeaderRight = () => {
  return (
    <div className={styles.headerRight}>
      {headerRight.map((props) => {
        return (
          <div className={styles.weather}>
            <p>{props.name}</p>
            <div className={styles.hIMg}>
              <img src={props.img} alt="" />
              <p>{props.num}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
const Menu = () => {
  return (
    <div className={styles.menu}>
      <img
        className={styles.headerImg}
        src="https://mgl.gogo.mn/newsn/v4/images/gogo-logo.345096b3.png"
        alt=""
      />

      {menu.map((name) => {
        return <p className={styles.headerImgP}>{name.name}</p>;
      })}

      <div className={styles.input}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className={styles.header}>
      <Menu />
      <HeaderRight />
    </div>
  );
};
export default Header;
