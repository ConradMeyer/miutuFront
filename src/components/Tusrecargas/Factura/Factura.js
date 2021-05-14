import React from "react";

function Factura(props) {
  return (
    <>
      <div className="info-factura">
        <div className="importe">
          <h3>Factura: {props.factura.idFactura}</h3>
          <h3>{props.factura.importe}</h3>
        </div>
        <div className="info">
          <h4>{props.factura.concepto}</h4>
          <p>{props.factura.direccion && props.factura.direccion[0]} {props.factura.direccion && props.factura.direccion[1]}</p>
          <p></p>
          <p>Madrid</p>

          <div className="fecha">
            <p>
              <strong>Fecha: </strong>
            </p>
            <p>{props.factura.fecha.split("T")[0]}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Factura;
