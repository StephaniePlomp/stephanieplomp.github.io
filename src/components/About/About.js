import React, { useState } from 'react'
import './About.css'
import { NavLink, Route, Routes , useLocation} from 'react-router-dom'
import { Education } from './Education'
import { Experience } from './Experience'
import { Intro } from './Intro'
import DataSkills from './DataSkills.json'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ResumeModal from './ResumeModal'

function About() {
  const location = useLocation();
  const [modalState, setModalState] = useState(false)

  if (modalState) {
    document.body.classList.add('active')
  } else {
    document.body.classList.remove('active')
  }

  const [isVisible, setIsVisible] = useState(false)

  const HandleClick = () => {
    setIsVisible(!isVisible)
  }

  const SwitchHandle = () => {
    setIsVisible(!isVisible)
  }


  return (
    <section id='about'>
      {modalState && <ResumeModal onClose={() => setModalState(false)} />}
      <div className='about-section'>
        <div className='about-left'>
          <h2 className='section-title'>About me</h2>

          {/* <MemoryRouter> */}
            <nav className='about-menu'>
              <ul>
                <li className="menu-item">
                  <NavLink to="/" onClick={HandleClick}>Intro</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to="/education" onClick={HandleClick}>Education</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to="/experience" onClick={HandleClick}>Work History</NavLink>
                </li>
              </ul>
            </nav>
            <TransitionGroup component={null}>
            <CSSTransition 
              key={location.key}
              in={isVisible}
              timeout={1000}
              classNames='transition'
              onExit={SwitchHandle}
            >
              <Routes location={location}>
                <Route path="/" element={<Intro />} />
                <Route path="/education" element={<Education />} />
                <Route path="/experience" element={<Experience />} />
              </Routes>
            </CSSTransition>
            </TransitionGroup>
          {/* </MemoryRouter> */}
          <div className='about-left-bottom'>
            <button onClick={() => setModalState(true)} className='download-resume-btn'>Resume PDF</button>
          </div>
        </div>
        <div className='about-right'>
          <h2 className='section-title'>Skills</h2>
          <div className='skills-box'>
            {DataSkills.map(skill => {
              return (
                <div className='skill-card' key={skill.id}>
                  <img className='skill-icon' src={`${process.env.PUBLIC_URL}${skill.img}`} alt="skill icon" />
                  <p className='skill-name'>{skill.name}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About