import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';
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

const Exit = () => {
    const navigate = useNavigate()
    const Naviget=() => {
    navigate('login')
  }

    return (
      <div>
        <div className='icon-text'>
        <button className='exit nav-icons' onClick={Naviget}>
          <FontAwesomeIcon icon={faCircleXmark} size="lg" style={{color: "#f1f2f3",}} />  
        </button>
          <div><h2>Exit</h2></div>
          </div>
      </div>
    
    )
}

export default Exit