import React from 'react'
import './Projects.css'
import weatherApp from '../Images/weatherApp.png'
import portfolioWeb from '../Images/portfolioWebsite.png'
import VideoModal from "./VideoModal";
import useModal from '../Hooks//useModal';

function Projects() {
  const { isShowing, toggle, embedId } = useModal();

  return (
    <section id='projects'>
      <div className='projects-section'>
        <h2 className='section-title'>Projects</h2>
        <div className='cards'>
          <div className='card'>
            <button className='project-number-btn'>1</button>
            <div className='card-image'>
              <img
                src={weatherApp}
                className='project-img'
              >
              </img>
            </div>

            <VideoModal
              isShowing={isShowing}
              embedId={embedId}
              hide={toggle}
            />

            <div className='card-content'>
            <div className='card-top'>
              <h2 className='card-title'>Weather App</h2>
              <p className='card-text'>
                Weather app made with ReactJS. Automatically recognizes user's location.
                Weather can be searched entering a city in the searchbar with autocomplete location suggestions.
                It is showing current, hourly and daily weather using the OpenWeatherMap API,
                as well as the date and local time. Temperature can be changed from Celsius to Fahrenheit and vice versa through fetching new data.</p>
              </div>
              <div className='card-bottom'>
                <button
                  className="card-btn-video"
                  onClick={toggle}
                  id="ZU1iKTIurYE"
                >
                  Watch project summary in 2-minute video</button>
                <div className='card-buttons'>
                  <a href="https://stephanieplomp.github.io/react-weather-app/" className='card-btn' target="_blank">Live demo</a>
                  <a href="https://github.com/StephaniePlomp/react-weather-app/" className='card-btn' target="_blank">Source code</a>
                </div>
              </div>
            </div>
          </div>

          <div className='card'>
            <button className='project-number-btn'>2</button>
            <div className='card-image'>
              <img src={portfolioWeb} className='project-img two'></img>
            </div>
            <div className='card-content'>
              <div className='card-top'>
              <h2 className='card-title'>Portfolio page</h2>
              <p className='card-text'>
                This portfolio page is made with ReactJS. React-router-DOM is used for the about section.
                In the About section are multiple page routes. When changing routes and the component enters the Dom, React Transition Group is used for the animation.
                Modals are used for showing the resume PDF and project videos. Emailjs is used for sending and receiving messages. After submitting the message the component redirects to the success component. 
              </p>
            </div>
            <div className='card-bottom'>
              <button
                className="card-btn-video"
                onClick={toggle}
                id="rokGy0huYEB"
              >
                Watch project summary in 2-minute video</button>
              <div className='card-buttons'>
              <a href="" className='card-btn current' target="_blank">Current page</a>
                  <a href="https://github.com/StephaniePlomp/stephanieplomp.github.io" className='card-btn' target="_blank">Source code</a>
              </div>
            </div>
            </div>
          </div>

          <div className='card'>
            <button className='project-number-btn'>3</button>
            <div className='card-image'>
              <p className='image-coming-soon'>Coming soon</p>
              {/* <img src={} className='project-img two'></img> */}
            </div>
            <div className='card-content'>

              <h2 className='card-title'>To-do App</h2>
              <div className='coming-soon-overlay'>
                <p className='card-text'>
                  This portfolio page is made with ReactJS. Automatically recognizes user's location.
                  Weather can be searched entering a city in the searchbar with autocomplete.
                  It is showing current, hourly and daily weather using the OpenWeatherMap API,
                  as well as the date and local time. Temperature can be changed from Celsius to Fahrenheit and vice versa through fetching new data.
                  More information...
                </p>
                <button
                  className="card-btn-video"
                  onClick={toggle}
                  id="rokGy0huYEB"
                >
                  Watch project summary in 2-minute video</button>
                <div className='card-buttons'>
                  <button className='card-btn'>Current page</button>
                  <button className='card-btn'>Show source</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects