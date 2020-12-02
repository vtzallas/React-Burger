import React from "react";
import Auxiliarry from "../../../hoc/Auxiliarry";
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
  .map( igKey => {
    return (
      <li key={igKey}>
        <span style={{textTransform: 'capitalize' }}>
          {igKey}</span>: {props.ingredients[igKey]}
      </li>);
  });

  return (
    <Auxiliarry>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
          {ingredientSummary}
      </ul>
      <strong><p>The cost of your Burger is  {props.price.toFixed(2)} $  </p></strong>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </Auxiliarry>
  );
};

export default orderSummary;
