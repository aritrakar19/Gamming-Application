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

const User = () =>  {
    return (
      <>
        <div className='input_log'>
          <div className='loginbox login_input' >
            <div className='input_box'>
              <div className='input_box_individual'>
                <div className='users'>
                  <p>Name</p>
                </div>
                <div className='input_holder'>
                  <input type="text"  autoComplete='off'/>
                </div>
              </div>
              <div className='input_box_individual'>
                <div className='users'>
                  <p>Id Number</p>
                </div>
                <div className='input_holder'>
                  <input type="text"  autoComplete='off'/>
                </div>
              </div>
              <div className='input_box_individual'>
              <div className='users'>
                  <p>Rank</p>
                </div>
                  <div className='input_holder'>
                <input type="text"  autoComplete='off'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )  
}

export default User