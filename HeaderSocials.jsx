import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/rebecca-nam" target="_blank"><AiOutlineLinkedin/></a>
        <a href="https://github.com/Rebeccanam" target="_blank"><AiOutlineGithub/></a>
    </div>
  )
}

export default HeaderSocials