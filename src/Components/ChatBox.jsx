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
   import FullWidthTextField from '../mui/FullWidthTextField'

const  ChatBox = () => {
  return (
    <div className='cont_main'>
      <div className='container2'>
        <div className='chatbar'>
        <div className='chats'>
            Chat
        </div>
          <div className='chat'>
            <FontAwesomeIcon icon={faMessage} size="lg" style={{color: "#f1f2f3",}} />
          </div>
          <div className='notification'>
            <FontAwesomeIcon icon={faBell} size="lg" style={{color: "#f1f2f3",}} />
          </div>
      </div>
        <div className='chatsearch'>
          <FullWidthTextField/>
        </div>
        <div className='btn'>
            <button className='playbtn'>Play</button>
            <button className='box'>
              <div className='box3'>
                <FontAwesomeIcon icon={faHandshake} size="lg" style={{color: "#f1f2f3",}} />
                <p className='padding'>Play as friend</p>
              </div>
            </button>
          <button className='box2'>
              <div className='box1'>
                <FontAwesomeIcon icon={faStar} style={{color: "#f1f2f3",}} />
                <p className='padding1'>Tournament</p>
              </div>
          </button>
        </div>
      </div>
    </div>
  )
}
export default ChatBox