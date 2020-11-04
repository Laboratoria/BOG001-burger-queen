import React, { useState } from 'react';
import './Tab.scss';
import Card from './Card'

export default function Tab(props) {
  const [click, setClick] = useState({ active: 'Desayuno' });
  const handleClick = (e) => {
    setClick({ active: e.target.id });
  };
  let menu;
  const tabs = props.menu.map((section, index) => {
    if (click.active === section.id) {
      menu = section.menu.map((content, i) => <Card name={content.name} price={content.price} img={content.img} key={content.name + i} />)
    }
    return (
      <li
        className={click.active === section.id ? 'tab active' : 'tab'}
        key={section.id + index}
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
      <section className="container-card">{menu}</section>
    </div>
  );
}
