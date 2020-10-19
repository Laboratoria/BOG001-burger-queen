import React, { useEffect } from "react";
import { H1, H2 } from "../components/Styling";
import Button from "../components/Button";
import "./Modal.scss";

export default function Modal(props) {
  console.log(Object.keys(props.info[0]));
  // .map((index, section) => section.id));

  return (
    <section className="overlay">
      <div className="modal">
        <H1 className="modal-title">Escoge la carne</H1>
        <label htmlFor="" className="modal-label">
          <img src="" alt="Carne de pollo" className="modal-label-img" />
          <input type="checkbox" className="modal-label-input" />
          <H2>Pollo</H2>
        </label>
        <label htmlFor="" className="modal-label">
          <img src="" alt="Carne de Res" className="modal-label-img" />
          <input type="checkbox" className="modal-label-input" />
          <H2>Res</H2>
        </label>
        <label htmlFor="" className="modal-label">
          <img src="" alt="Vegetariana" className="modal-label-img" />
          <input type="checkbox" className="modal-label-input" />
          <H2>Vegetariana</H2>
        </label>
        <H1>Escoge adicionales</H1>
        <label htmlFor="" className="modal-label">
          {" "}
          <img src="" alt="Queso" className="modal-label-img" />
          <input type="checkbox" className="modal-label-input" />
          <H2>Queso</H2>
        </label>
        <label htmlFor="" className="modal-label">
          <img src="" alt="Huevo" className="modal-label-img" />
          <input type="checkbox" className="modal-label-input" />
          <H2>Huevo</H2>
        </label>
        <Button cName="btn-cancel" text="cancelar"></Button>
        <Button cName="btn-send" text="enviar"></Button>
      </div>
    </section>
  );
}
