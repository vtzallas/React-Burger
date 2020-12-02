import React from "react";
import Auxilliary from "../../hoc/Auxiliarry";
import classes from "./Layout.css";
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
  <Auxilliary>
  <Toolbar/>
    <main className={classes.Content}>{props.children}</main>
  </Auxilliary>
);

export default layout;
