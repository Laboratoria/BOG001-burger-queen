import React, {useState} from 'react';
import './Tab.scss'

const menu = [
    { type: 'desayuno',
       cards: 'que rico'
},
{ type: 'fuerte',
cards: 'hambuergesa'
}

]

export default function Tab() {
    const [click, setClick] = useState({active: 'desayuno'});
    const handleClick = (e) => {
        setClick({active: e.target.id})
    };
    let content;
    const tabs = menu.map((section, index) => {
        content = click.active === section.type ? section.cards : content; 
        return (<li 
                 className={click.active === section.type ? "tab active" : "tab" } 
                 key={index} 
                 id={section.type}
                 onClick={handleClick}>
          {section.type}
        </li>);
      });

    return (
        <div className='menuContainer'>
            <ul className='tabList'>
                {tabs}
            </ul>
            <section>
                {content}
            </section>
        </div>
    )
}
