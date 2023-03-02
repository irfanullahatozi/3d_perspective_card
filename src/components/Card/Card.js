import React from "react";
import classes from './Card.module.css'

const Card = () => {
  return (
    <div className={`${classes.card}`}>
      <div className={`${classes.cover} ${classes["item-a"]}`}>
        <h1>
          Little
          <br />
          Bonsai
        </h1>
        <span className={`${classes.price}`} >$35</span>
        <div className={`${classes["card-back"]}`}>
          <a href="#">Add to cart</a>
          <a href="#">View detail</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
