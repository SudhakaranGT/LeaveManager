import React from 'react'
import "./hero.css";
import { Link } from 'react-router-dom';

const hero = () => {
  return (
      <section className='hero'>
          <div className="hero-text">
             <h1 className='hero-text'>Take Control of your <span>Breaks!</span></h1>
             <p className='hero-des'>Simple,Efficient,Stress-Free Management</p>
          </div>
          <div className='hero-buttons'>
            <a className='hero-button' >Take a leave</a>
            <a className='hero-button' >Show History</a>
          </div>

      </section>
  )
}

export default hero
