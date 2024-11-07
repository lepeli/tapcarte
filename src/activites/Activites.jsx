import React from "react";
import "./Activites.css"
import { useState } from "react";
import icon_resto from "../assets/activites/image 15.png"
import icon_sport from "../assets/activites/image 17.png"
import icon_culture from "../assets/activites/image 16.png"
import icon_diver from "../assets/activites/image 18.png"

export const Activites = () => {
    const [recommendation,setReccommendation] = useSate(1);
    return(
        <div className="activites_page">
            <h1 className="text-center hero">Voici les activités à proximité.</h1>
            <div className="activites_icon">
                <div className="activites_icon_backround">
                    <img src={icon_resto} alt="icon resto" className="activites_icon_resto"></img>
                    <p className="activites_icon_name_1">Restaurant</p>
                </div>
                <div className="activites_icon_backround">
                    <img src={icon_sport} alt="icon sport"></img>
                    <p className="activites_icon_name_2">Sport</p>
                </div>
                <div className="activites_icon_backround">
                    <img src={icon_culture} alt="icon resto"></img>
                    <p className="activites_icon_name_3">Culture</p>
                </div>
                <div className="activites_icon_backround">
                    <img src={icon_diver} alt="icon resto"></img>
                    <p className="activites_icon_name_4">Divertissement</p>
                </div>
            </div>
            <div className="activite_recommendation">
                <h1 className="text-center hero">Notre programme recommandé pour vous:</h1>

            </div>
        </div>
    )
}