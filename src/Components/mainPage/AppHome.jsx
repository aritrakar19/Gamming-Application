import React, { Component } from 'react'
import home from '../../assets/logo/home.png'

const AppHome = () =>  {
    return (
      <>
        <div className='icon-text'>
          <button className='about'>
            <img className='about-icon' src={home}/>
          </button>
          <div><h2>Home</h2></div>
        </div>
      </>
    )
}

export default AppHome