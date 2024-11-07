import React from "react";
import "./Contact.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

export const Contact = () => {
    return(
        <div className="contact_page">
            <h1 className="text-center hero">Les numéros utiles</h1>
            <div className="contact_list">
                <div className="contact_box_2">
                    <h1 className="contact_name">Réception</h1>
                    <p className="contact_hour">Horaires: 10h-23h</p>
                    <p className="contact_number">+20 2 251 714 78</p>
                    <FontAwesomeIcon icon={faPhone} className="contact_icon"/>
                </div>
                <div className="contact_box">
                    <h1 className="contact_name">Pompiers</h1>
                    <p className="contact_number">125</p>
                    <FontAwesomeIcon icon={faPhone} className="contact_icon"/>
                </div>
                <div className="contact_box">
                    <h1 className="contact_name">Police</h1>
                    <p className="contact_number">122</p>
                    <FontAwesomeIcon icon={faPhone} className="contact_icon"/>
                </div>
                <div className="contact_box">
                    <h1 className="contact_name">Samu</h1>
                    <p className="contact_number">123</p>
                    <FontAwesomeIcon icon={faPhone} className="contact_icon"/>
                </div>
                <div className="contact_box">
                    <h1 className="contact_name">Urgences</h1>
                    <p className="contact_number">112</p>
                    <FontAwesomeIcon icon={faPhone} className="contact_icon"/>
                </div>
            </div>
        </div>
    )
}