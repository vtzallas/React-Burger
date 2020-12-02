import React from "react";
import classes from "./Modal.css";
import Auxilliarry from "../../../hoc/Auxiliarry";
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => (
  <Auxilliarry>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100%)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  </Auxilliarry>
);

export default modal;
