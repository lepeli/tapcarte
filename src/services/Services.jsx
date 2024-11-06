import React from "react";
import { Link } from "react-router-dom"
import "./Services.css"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight } from '@fortawesome/free-solid-svg-icons'

export const Services = () => {
    return( 
    <div className="service_page">
        <h1 className="text-center hero">Voici les services proposés par votre hôtel</h1>
        <div className="service_list">
            <div className="service_1">
                <p className="service_1_name">Restaurants</p>
                <p className="service_1_horaire">Horaires: 10h-23h</p>
                <Link to="/restaurant">
                    <FontAwesomeIcon icon={faCircleRight} className="resto_button"/>
                </Link>
            </div>
            <div className="service_2">
                <p className="service_2_name">Spa/Hammam</p>
                <p className="service_2_horaire">Horaires: 8h-23h</p>
                <p className="service_2_age">Reservé au +16 ans</p>
                <button className="service_2_button">Réserver</button>
            </div>
            <div className="service_1">
                <p className="service_1_name">Piscine</p>
                <p className="service_1_horaire">Horaires: 9h-21h</p>
            </div>
            <div className="service_1">
                <p className="service_1_name">Laverie</p>
                <p className="service_1_horaire">Horaires: 9h-21h</p>
            </div>
            <div className="service_1">
                <p className="service_1_name">Room service</p>
                <p className="service_1_horaire">24/7</p>
            </div>
        </div>
    </div>
    )
}