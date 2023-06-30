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

 
  
const Profile = () => {
    const navigate = useNavigate()
    const Naviget=() => {
    navigate('login')
}
    return (
        <div className='icon-text'>
            <button className='play nav-icons'  onClick={Naviget}>
                <FontAwesomeIcon icon={faUser} size="lg" style={{color: "#f1f2f3",}} />
            </button>
            <div><h2>User</h2></div>
        </div>
    )
}

export default Profile