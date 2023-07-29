import React from "react";
import "./ProductCategories.css";
//product category images
import tattooINK from './../Images/categoryImages/tattooInk.jpg';
import tattooPSU from './../Images/categoryImages/tattooPSU.jpg';


export const ProductCategories = () => {

    return (
        <div className="category_area">

                <a href="/contact" className="catalog-tile">
                    <div className="img-container">
                        <img src={tattooINK} alt="ethereal logo"/>
                    </div>
                <div className="h3-border">
                    <h3>Tattoo Ink</h3>
                </div> 
                </a>
            
                <a href="/contact" className="catalog-tile">
                    <div className="img-container">
                        <img src={tattooINK} alt="ethereal logo"/>
                    </div>
                <div className="h3-border">
                    <h3>Tattoo Power Supplies</h3>
                </div> 
                </a>

                <a href="/contact" className="catalog-tile">
                    <div className="img-container">
                        <img src={tattooINK} alt="ethereal logo"/>
                    </div>
                <div className="h3-border">
                    <h3>Tattoo Machines</h3>
                </div> 
                </a>

                <a href="/contact" className="catalog-tile">
                    <div className="img-container">
                        <img src={tattooINK} alt="ethereal logo"/>
                    </div>
                <div className="h3-border">
                    <h3>Tattoo Cartridges</h3>
                </div> 
                </a>

                <a href="/contact" className="catalog-tile">
                    <div className="img-container">
                        <img src={tattooINK} alt="ethereal logo"/>
                    </div>
                <div className="h3-border">
                    <h3>Studio Supplies</h3>
                </div> 
                </a>

                <a href="/contact" className="catalog-tile">
                    <div className="img-container">
                        <img src={tattooINK} alt="ethereal logo"/>
                    </div>
                <div className="h3-border">
                    <h3>Extra 1</h3>
                </div> 
                </a>

                <a href="/contact" className="catalog-tile">
                    <div className="img-container">
                        <img src={tattooINK} alt="ethereal logo"/>
                    </div>
                <div className="h3-border">
                    <h3>Extra 2</h3>
                </div> 
                </a>

                <a href="/contact" className="catalog-tile">
                    <div className="img-container">
                        <img src={tattooINK} alt="ethereal logo"/>
                    </div>
                <div className="h3-border">
                    <h3>Extra 3</h3>
                </div> 
                </a>
            
        </div>
    )
};

export default ProductCategories;