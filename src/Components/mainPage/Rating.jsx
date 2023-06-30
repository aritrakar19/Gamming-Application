import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faHandshake,
    faStar,
    faChessKnight,
    faUser,
    faCircleXmark,
    faBarChart,
    faIdCard,
    faBell,
    faBuilding,
    faImage,
    faMessage,
   
   } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';


const Rating = () => {
    const navigate = useNavigate()


    return (
        <div>
            <div className='icon-text'>
                <button className='account nav-icons' >
                    <FontAwesomeIcon icon={faBarChart} size="lg" style={{color: "#f1f2f3",}} />
                </button>
                <div><h2>Rate Us</h2></div>
            </div>
         </div>
    )
  
}

export default Rating
