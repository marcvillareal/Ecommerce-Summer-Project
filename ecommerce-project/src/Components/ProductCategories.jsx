import React from "react";
import "./ProductCategories.css";
import logo from './../Images/Logo.jpg';


export const ProductCategories = () => {

    return (
        <div className="category_area">

                <div className="catalog-tile">
                <img src={logo} alt="ethereal logo"/>
                    <h3>Category 1</h3>
            
                </div>
                
                <div className="catalog-tile">
                <img src={logo} alt="ethereal logo"/>
                    <h3>Category 2</h3>
            
                </div>

                <div className="catalog-tile">
                <img src={logo} alt="ethereal logo"/>
                    <h3>Category 3</h3>
            
                </div>

                <div className="catalog-tile">
                <img src={logo} alt="ethereal logo"/>
                    <h3>Category 4</h3>
            
                </div>

                <div className="catalog-tile">
                <img src={logo} alt="ethereal logo"/>
                    <h3>Category 5</h3>
            
                </div>
            
        </div>
    )
};

export default ProductCategories;