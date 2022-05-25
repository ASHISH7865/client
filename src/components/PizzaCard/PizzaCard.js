import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./PizzaCard.scss";
import PizzaImg from "../../assets/pizza-png-19323.png";
import Button from "@mui/material/Button";

const PizzaCard = () => {
  const [ItemCount, setItemCount] = useState(0);

  const decreaseItemCount = () => {
    if (ItemCount > 0) {
      setItemCount(ItemCount - 1);
    }
  };
  const increaseItemCount = () => {
    setItemCount(ItemCount + 1);
  };

  return (
    <>
      <div className="card__wrapper">
        <div className="card__body">
          <img className="card__body-img" src={PizzaImg} alt="src" />
          <div className="card__body-title">Margherita</div>
          <div className="card__body-description">Pizza</div>
          <div className="card__body-price">
            <span>Rs</span> 180
          </div>
          <div className="card__body-regulator">
            <Button
              className="card__body-regulator-minus"
              onClick={decreaseItemCount}
            >
              <FontAwesomeIcon icon={solid("minus")} />
            </Button>
            <span className="card__body-regulator-count">{ItemCount}</span>
            <Button
              className="card__body-regulator-plus"
              onClick={increaseItemCount}
            >
              <FontAwesomeIcon icon={solid("plus")} />
            </Button>
          </div>
          <Button className="card__body-button">
            <FontAwesomeIcon icon={solid("shopping-cart")} />
            <span>Add to cart</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default PizzaCard;
