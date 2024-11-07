import React from "react";
import "./Activites.css"
import { useState } from "react";
import icon_resto from "../assets/activites/image 15.png"
import icon_sport from "../assets/activites/image 17.png"
import icon_culture from "../assets/activites/image 16.png"
import icon_diver from "../assets/activites/image 18.png"
import map from "../assets/activites/image 10.png"

export const Activites = () => {
    const [recommendation,setReccommendation] = useState(1);
    return(
        <div className="activites_page">
            <h1 className="text-center hero">Voici les activités à proximité.</h1>
            <div className="activites_icon">
                <button onClick={ ()=> setReccommendation(1)}>
                    <div className="activites_icon_backround">
                        <img src={icon_resto} alt="icon resto" className="activites_icon_resto"></img>
                        <p className="activites_icon_name_1">Restaurant</p>
                    </div>
                </button>
                <button onClick={ ()=> setReccommendation(2)}>
                <div className="activites_icon_backround">
                    <img src={icon_sport} alt="icon sport"></img>
                    <p className="activites_icon_name_2">Sport</p>
                </div>
                </button>
                <button onClick={ ()=> setReccommendation(3)}>
                <div className="activites_icon_backround">
                    <img src={icon_culture} alt="icon resto"></img>
                    <p className="activites_icon_name_3">Culture</p>
                </div>
                </button>
                <button onClick={ ()=> setReccommendation(4)}>
                <div className="activites_icon_backround">
                    <img src={icon_diver} alt="icon resto"></img>
                    <p className="activites_icon_name_4">Divertissement</p>
                </div>
                </button>
            </div>
            <div className="activite_recommendation">
                <h1 className="text-center hero">Notre programme recommandé pour vous:</h1>
                {recommendation == 1 ? 
                <div className="activite_recommendation_box">
                    <p className="recommendation_text">- Lagoona Restaurant (3km)</p>
                    <p className="recommendation_text">- La Casa Restaurant (6km)</p>
                    <p className="recommendation_text">- Pebbles Restaurant (12km)</p>
                    <p className="recommendation_text">- Sunrise Restaurant (15km)</p>
                    <button>En savoir plus</button>
                </div> : null}
                {recommendation == 2 ? 
                <div className="activite_recommendation_box">
                    <p className="recommendation_text">- Course a pied (1 km)</p>
                    <p className="recommendation_text">- Salle d'escalade (5km)</p>
                    <p className="recommendation_text">- Bateau (8 km)</p>
                    <p className="recommendation_text">- Location de vélo (10 km)</p>
                    <button>En savoir plus</button>
                </div> : null}
                {recommendation == 3 ? 
                <div className="activite_recommendation_box">
                    <p className="recommendation_text">- Musée d'art moderne (6km)</p>
                    <p className="recommendation_text">- Cinéma (6 km)</p>
                    <p className="recommendation_text">- Théatre (7 km)</p>
                    <p className="recommendation_text">- Opéra (15 km)</p>
                    <button>En savoir plus</button>
                </div> : null}
                {recommendation == 4 ? 
                <div className="activite_recommendation_box">
                    <p className="recommendation_text">- Centre commercial (2 km)</p>
                    <p className="recommendation_text">- Bar (4 km)</p>
                    <p className="recommendation_text">- Casino (8 km)</p>
                    <p className="recommendation_text">- Bowling (10km)</p>
                    <button>En savoir plus</button>
                </div> : null}
            </div>
            <div className="recommendation_catre">
                <h1 className="text-center hero">Notre carte interactive:</h1>
                <img src={map} alt="carte" className="activites_carte"/>
            </div>
        </div>
    )
}