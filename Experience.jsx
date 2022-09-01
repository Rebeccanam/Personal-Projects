import React from 'react'
import './experience.css'
import {BsCheck2All} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What I've Been Working On</h5>
      <h2>Projects</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsCheck2All/>
              <h4>HTML</h4>
              <small>Intermediate</small>
            </article>

            <article className='experience__details'>
              <BsCheck2All/>
              <h4>CSS</h4>
              <small>Intermediate</small>
            </article>

            <article className='experience__details'>
              <BsCheck2All/>
              <h4>JavaScript</h4>
              <small>Intermediate</small>
            </article>

          </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
        <article className='experience__details'>
              <BsCheck2All/>
              <h4>Java</h4>
              <small>Intermediate</small>
            </article>

            <article className='experience__details'>
              <BsCheck2All/>
              <h4>C++</h4>
              <small>Intermediate</small>
            </article>

            <article className='experience__details'>
              <BsCheck2All/>
              <h4>NodeJS</h4>
              <small>Intermediate</small>
            </article>

          
          </div>    
      </div>
    </section>
  )
}

export default Experience