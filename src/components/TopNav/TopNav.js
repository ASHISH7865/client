import React from 'react';
import './TopNav.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";


const TopNav = () => {
   
    

    
  return (
    <div className='top-nav_-wrapper'>
        <div className='top-nav__container'>
            <div className="top-nav__route">
                <p>/Home</p>
            </div>
            <div className="search">
                <input className='search-input' type="text" placeholder="Search for your favourite food"/>
                <button className="search-button">
                   <FontAwesomeIcon icon={solid("magnifying-glass")} />
                </button>
            </div>
            <div className="filter">
                
                
            </div>
        </div>
    </div>
  )
}

export default TopNav