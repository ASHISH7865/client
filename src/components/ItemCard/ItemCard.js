import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./ItemCard.scss";
import ItemImg from "../../assets/pizza-png-19323.png";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const ItemCard = ({ItemName, description, ItemPrice }) => {
  const [ItemCount, setItemCount] = useState(0);


  const decreaseItemCount = () => {
    if (ItemCount > 0) {
      setItemCount(ItemCount - 1);
    }
  };
  const increaseItemCount = () => {
    if (ItemCount < 10) {
      setItemCount(ItemCount + 1);
    }
  };
  const addToCartHandler =() =>{
    setItemCount(0)

  }


  return (
    <>
      <div className="card__wrapper">
        <Stack direction="row" spacing={1}>
          <Chip label="Regular" color="primary" />
        </Stack>

        <div className="card__body">
          <img className="card__body-img" src={ItemImg} alt="src" />
          <div className="card__body-title">{ItemName}</div>
          <div className="card__body-description">{description}</div>
          <div className="card__body-price">
            <span>Rs</span> {ItemPrice}
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

          <Button className="card__body-button" onClick={addToCartHandler}>
            <FontAwesomeIcon icon={solid("shopping-cart")} />
            <span>Add to cart</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
