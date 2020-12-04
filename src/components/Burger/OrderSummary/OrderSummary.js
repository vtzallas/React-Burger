import React, { Component } from "react";
import Auxiliarry from "../../../hoc/Auxiliarry";
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  //THIS COULD BE A FUNCTIONAL COMPONENT ,DOESNT HAVE TO BE A CLASS 
  componentDidUpdate() {
    console.log('COMPONENT DID UPDATE');
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(igKey => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: 'capitalize' }}>
              {igKey}</span>: {this.props.ingredients[igKey]}
          </li>);
      });
    return (
      <Auxiliarry>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <strong><p>The cost of your Burger is  {this.props.price.toFixed(2)} $  </p></strong>
        <p>Continue to Checkout?</p>

        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>

      </Auxiliarry>
    );
  };
}

export default OrderSummary;
