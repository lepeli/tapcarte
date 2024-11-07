import React from "react";
import "./Bottom_bar.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-solid-svg-icons'
import { faList} from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

export const Bottom_bar = () =>{
    return(
        <div className="bottom_bar">
            <Link to="/services">
                <FontAwesomeIcon icon={faList} className="bottom_bar_icon"/>
            </Link>
            <FontAwesomeIcon icon={faCalendar} className="bottom_bar_icon"/>
            <Link to="/home">
                <FontAwesomeIcon icon={faHouse} className="bottom_bar_icon"/>
            </Link>
            <FontAwesomeIcon icon={faHeart} className="bottom_bar_icon"/>
            <FontAwesomeIcon icon={faPhone} className="bottom_bar_icon"/>
        </div>
    )
}