import React, { Component, useState} from 'react';
import Navbar from '../Navbar';
import ChatBox from '../ChatBox';
import AppRating from '../froms/appRating';
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

const currentTabData = [
  {
    id: "01" ,
    name: "rate",
    Component: <AppRating/>
  }
];

const MainPage = () => {
const [ currentTab, setCurrentTab] = useState(<AppRating/>)

  return (
    <div className='mainpage'>
      <div className='maindiv'>
          <Navbar/>
        <div className='container1'>
            {currentTab}
          <div className='main_user'>
            <div className='user_box'>
              <FontAwesomeIcon icon={faUser} size="lg" style={{color: "#f1f2f3",}} />
              <div className='user_name'>Username</div>
            </div> 
          </div>
        </div>
        <ChatBox/>
      </div>
    </div>
  )
}

export default MainPage