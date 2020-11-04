import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button";
import { H, P } from "../Styling";
import "./Home.scss";
import logo from "../../assets/Logo.png";
import chef from "../../assets/chef.svg";
import waiter from "../../assets/waiter.svg";
import { AppContext } from "../../AppContext";

export default function Home() {
  const { employee, setEmployee } = useContext(AppContext);
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleEmployee = (e) => {
    setName(e.currentTarget.value);
  };

  const handleClickHome = () => {
    if (name !== "") {
      setEmployee(name);
    } else {
      setError(<P error > Escribe tu nombre</P>);
    }
  };

  console.log(error);
  return (
    <div id="home">
      <section className="home-section">
        <img src={logo} alt="Logo" />
        <H>"Fresco y auténtico"</H>
      </section>
      <section className="home-section">
        <div>
          <h3 className="letra">¡Bienvenido!</h3>
          <label>
            <H>Ingresa tú nombre</H>
            <input
              type="text"
              className="name-employee"
              onChange={(e) => handleEmployee(e)}
              placeholder="Escribe tú nombre"
            />
            {error}
          </label>
          <H>Escoge tú rol</H>
          <Link to={name !== "" ? "/pedidos" : "/"}>
            <Button
              cName="btn-home"
              img={<img className="icon-home" src={chef} alt="chef" />}
              text="CHEF"
              onClick={handleClickHome}
            />
          </Link>
          <Link to={name !== "" ? "/nueva-orden" : "/"}>
            <Button
              cName="btn-home"
              img={<img className="icon-home" src={waiter} alt="waiter" />}
              text="MESERO"
              onClick={handleClickHome}
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
