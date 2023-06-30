import React, { Component, useState } from 'react'
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
import SearchIcon from '@mui/icons-material/Search';
import CustomizedInputBase from '../mui/CustomizedInputBase'
import MenuIcon from '@mui/icons-material/Menu';
import Profile from './Profile';
import Exit from './mainPage/Exit';
import Rating from './mainPage/Rating';
import AppHome from './mainPage/AppHome';
import AppPlay from './mainPage/AppPlay';
import AppMore from './mainPage/AppMore';

const  Navbar=(props) => {
const [ expand, setExpand] = useState(false);
// const navigate = useNavigate()
// const Naviget=() => {
//   navigate('')
//   }
  return (
    <nav className={`gamenav ${ expand ? 'expand-nav' : ''}`}>
      <div className='divnav'>
        <div className='manu-icon'>
            <button 
              className='nav-icons'
              onClick={()=> {setExpand(!expand)}}
              >
                <MenuIcon/>
            </button>
        </div>
            {expand ? (<div className='searchbtn'>
              <CustomizedInputBase/>
          </div>) :
          (<div onClick={()=> {setExpand(!expand)}} className='search-icon'>
            <SearchIcon />
        </div>)}
          </div>
          {props.childs}
          <Profile/>
          <AppHome />
          <AppPlay/>
          <Rating/>
          <AppMore/>
          <Exit/> 
    </nav>
  )
}

export default Navbar
