import React from "react";
import ProductBox from "../../components/ProductBox/ProductBox";
import Section from "../../components/Section/Section";
import ItemCard from "../../components/ItemCard/ItemCard";
import OfferBanner from "../../components/OfferBanner/OfferBanner";
import Card from "../../components/Card/Card";
import './Home.scss'
import TopNav from "../../components/TopNav/TopNav";

function Home(props) {
  return (
    <div className="home__wrapper">
      <TopNav />
      <OfferBanner offerText={"10% off on your recent order"} offerCode={"TENOFF"} offerImage={"https://pixabay.com/get/g0b55f863f5d30834a3e4e82073e92da947acafcfa7b2a996efe9f769c5ff87c6a7cec9b1c3f7f7b58cffa49daf84c4e7d6c6b1f2458cd6e4f4d1b371d6f50ed0815232dbeb4af9645499fe6fda941726_1920.jpg"} />
      
      <ProductBox title={"Order By Category"} >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </ProductBox>
        <ProductBox title={"Recent Orders"} >
        
        <ItemCard
          ItemName={"Corn"}
          ItemPrice={60}
          description={"corn,extra cheese"}
        />
        <ItemCard
          ItemName={"Corn"}
          ItemPrice={60}
          description={"corn,extra cheese"}
        />
        <ItemCard
          ItemName={"Corn"}
          ItemPrice={60}
          description={"corn,extra cheese"}
        />
        <ItemCard
          ItemName={"Corn"}
          ItemPrice={60}
          description={"corn,extra cheese"}
        />
      </ProductBox>
    </div>
  );
}

export default Home;
