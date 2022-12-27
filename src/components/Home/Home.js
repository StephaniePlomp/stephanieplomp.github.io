import React from 'react';
import './Home.css';
import logoHome from '../Images/logoHome.png';
import { SiReact } from 'react-icons/si'
import { TbBrandCss3, TbBrandJavascript, TbBrandHtml5 } from 'react-icons/tb'
import { Link } from "react-scroll"

function Home() {
  return (
    <section id='home'>
      <div className='home-section'>
        <div className='home-content'>
          <div className='home-section-left'>
            <p className='hello-text'>Hey, my name is</p>
            <h2 className='heading-intro'>Stephanie Plomp</h2>
            <p className='heading-text'>I am a Front-end developer focused on creating beautiful and user-friendly websites while writing clean code.</p>
            <Link to="projects" className='btn-projects' spy={true} smooth={true} offset={-75} duration={500}>
              Projects
            </Link>
          </div>
          <div className='home-section-right'>
            <div className='logo-wrapper'>
              <div className='filter'>
                <img src={logoHome} alt="logo" className='logo-home' />
              </div>
              <div className='icon-wrapper'>
                <SiReact className='logo-icon react' />
                <TbBrandHtml5 className='logo-icon html' />
                <TbBrandCss3 className='logo-icon css' />
                <TbBrandJavascript className='logo-icon js' />
              </div></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home