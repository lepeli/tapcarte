import React from "react";
import "./Restaurant.css"
import restaurant_image_1 from "../assets/image_7.png"
import restaurant_image_2 from "../assets/image_8.png"
import restaurant_image_3 from "../assets/image_9.png"
export const Restaurant = () => {
    return(
        <div className="restaurant_page">
            <h1 className="text-center hero">Voici les restaurants présents dans votre hôtel </h1>
            <div className="restaurant_list">
                <div className="restaurant_box">
                    <p className="restaurant_name">Lagoona Restaurant</p>
                    <p className="restaurant_desc">Savourez poissons et fruits de mer sur la plage.</p>
                    <img src={restaurant_image_1}  alt="restaurant_image_1" className="restaurant_img"></img>
                    <button className="restaurant_button">Réserver</button>
                </div>
                <div className="restaurant_box">
                    <p className="restaurant_name">La Casa Restaurant</p>
                    <p className="restaurant_desc">Pour les amoureux de la cuisine italienne.</p>
                    <img src={restaurant_image_2}  alt="restaurant_image_1" className="restaurant_img"></img>
                    <button className="restaurant_button">Réserver</button>
                </div>
                <div className="restaurant_box">
                    <p className="restaurant_name">Pebbles Restaurant</p>
                    <p className="restaurant_desc">Venez profitez de notre buffet à volonté!</p>
                    <img src={restaurant_image_3}  alt="restaurant_image_1" className="restaurant_img"></img>
                    <button className="restaurant_button">Réserver</button>
                </div>
            </div>
        </div>
    )
}