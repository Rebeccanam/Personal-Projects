import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {TbSchool} from 'react-icons/tb'
import {CgGym} from 'react-icons/cg'
import {FaPaintBrush} from 'react-icons/fa'

const About = () => {
  return (
    <section id="about">
      <h5>a snippet</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <TbSchool className='about__icon'/>
              <h3>Education</h3>
              <h4>UT Dallas '23</h4>
              <small>Computer Science</small>
              <h4>UT Austin '20</h4>
              <small>Exercise Science</small>
            </article>

            <article className='about__card'>
              <CgGym className='about__icon'/>
              <h3>Skills/Courses</h3>
              <small> C++, Java, ReactJS, CSS, Data Structures and Algorithms, UNIX Programming,
                      Software Engineering
              </small>
            </article>

            <article className='about__card'>
              <FaPaintBrush className='about__icon'/>
              <h3>Projects</h3>
              <small>This website! and more to come..</small>
            </article>

          </div>
          <p>
          My name is Rebecca Nam and I am currently a science major at the University of Texas
          at Dallas! I am originally from Austin, TX and am currently located in Dallas, TX.
          I am extremely passionate about and hope to expand my background in health sciences
          and software development for many years to come! 
          </p>

          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
      </section>
  )
}

export default About