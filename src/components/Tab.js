import React, { useState } from "react";
import "./Tab.scss";
import Card from './Card'


export default function Tab(props) {

  const [click, setClick] = useState({ active: "Desayuno" });
  const handleClick = (e) => {
    setClick({ active: e.target.id });
  };
  let content;
  const tabs = props.menu.map((section, index) => {
    content = click.active === section.id ? section.menu.map((content, i) => <Card name={content.name} price={content.price} img={content.img}key={i} clickToOpen={props.clickToOpen}></Card>) : content;
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
    <div className="menu-container">
      <ul className="tab-list">{tabs}</ul>
      <section className="container-card">{content}</section>
    </div>
  );
}
