import React from 'react'
import './nav.css'
import {BiHomeSmile} from 'react-icons/bi'
import {FaUserGraduate} from 'react-icons/fa'
import {TbHighlight} from 'react-icons/tb'
import {BiMessageDots} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')}
      className={activeNav === '#' ? 'active' : ''}><BiHomeSmile/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserGraduate/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><TbHighlight/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDots/></a>
    </nav>
  )
}

export default Nav