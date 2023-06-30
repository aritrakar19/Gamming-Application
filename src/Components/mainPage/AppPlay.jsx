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
const AppPlay = () => {
    return (
        <>
            <div className='icon-text'>
                <button className='carrier nav-icons'>
                    <FontAwesomeIcon icon={faChessKnight} size="lg" style={{color: "#f1f2f3",}} />
                </button>
                <div>
                    <h2>
                        Play 
                    </h2>
                </div>
            </div>
        </>
    )
}

export default AppPlay