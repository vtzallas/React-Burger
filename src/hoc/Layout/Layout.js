import React, { Component } from "react";
import Auxilliary from "../Auxiliarry";
import classes from "./Layout.css";
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state ={
      showSideDrawer: false 
    }

  SideDrawerClosedHandler = () =>{
    this.setState({showSideDrawer: false});
  }

  sideDrawerToggleHandler = () =>{
    this.setState((prevState) =>{
      return {showSideDrawer: !prevState.showSideDrawer}
    })
  }

  render() {
    return(
      <Auxilliary>
        <Toolbar drawToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerClosedHandler}/>
        <main className={classes.Content}>{this.props.children}</main>
    
      </Auxilliary>

    );
  }
}
export default Layout;
