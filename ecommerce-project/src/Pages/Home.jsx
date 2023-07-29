import React from "react";
import "./src/../../App.css";
//components imported here
import { Search } from "../Components/Search";
import { Carousel } from "../Components/Carousel";
import { ProductCategories } from "../Components/ProductCategories";


export const Home = () => {
    return (
        <main className="Home">
        <div className="search-container">
          <Search />
        </div>
        <div className="carousel-container">
          <Carousel />
        </div>
        <div className="categories-container">
          <ProductCategories/>
        </div>
        </main>
    );

};
