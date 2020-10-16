import React, { useState } from "react";
import "./Tab.scss";
import Card from './Card'

const menu = [
  { type: "desayuno", cards: <Card></Card> },
  { type: "fuerte", cards: "hambuergesa" },
];

export default function Tab(props) {

  const [click, setClick] = useState({ active: "Desayuno" });
  const handleClick = (e) => {
    setClick({ active: e.target.id });
  };
  let content;
  const tabs = props.menu.map((section, index) => {
    content = click.active === section.id ? section.menu.map((content, i) => <Card name={content.name} price={content.price} key={i}></Card>) : content;
    return (
      <li
        className={click.active === section.id ? "tab active" : "tab"}
        key={index}
        id={section.id}
        onClick={handleClick}
      >
        {section.id}
      </li>
    );
  });

  return (
    <div className="menuContainer">
      <ul className="tabList">{tabs}</ul>
      <section>{content}</section>
    </div>
  );
}
