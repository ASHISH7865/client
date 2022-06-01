import React from "react";
import ItemCard from "../../components/ItemCard/ItemCard";
import "./Menu.scss";
import OfferBanner from "../../components/OfferBanner/OfferBanner";
import CategoryButton from "../../components/CategoryButton/CategoryButton";
import pizzaData from '../../constant'
import TopNav from "../../components/TopNav/TopNav";

const Home = () => {
  
  
  return (
    <>
      <div className="menu__wrapper">
        <TopNav />
       
      <OfferBanner offerText={"10 % off"} offerCode={"TENOFF"}   />
        
        

        <div className="menu__wrapper__pizza-cards">
         { pizzaData.data.map((item, index) => <ItemCard key={item.id} ItemName={item.name} ItemPrice={item.regular || item.medium || item.large} description={item.description} ItemImg={item.image}/>)}
        </div>
      </div>
    </>
  );
};

export default Home;
