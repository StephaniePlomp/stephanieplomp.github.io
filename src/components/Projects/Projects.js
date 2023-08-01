import React from 'react'
import './Projects.css'
import weatherApp from '../Images/weatherApp.png'
import budgetManager from '../Images/budgetManager.png'
import portfolioPage from '../Images/portfolioPage.png'
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
            <div className='card-top'>
              <div className='card-image'>
                <img
                  alt="project screenshot 1"
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
                <div className='content-top'>
                  <h2 className='card-title'>Weather App</h2>
                  <p className='card-text'>
                    This Weather App is built with React.js. It automatically recognizes user's location.
                    The weather can be searched entering a city in the searchbar with autocomplete location suggestions.
                    It is showing current, hourly and daily weather using the OpenWeatherMap API,
                    as well as the date and local time. Temperature can be changed from Celsius to Fahrenheit and vice versa through fetching new data.</p>
                </div>

                <div className='content-bottom'>
                  <button
                    className="card-btn-video"
                    onClick={toggle}
                    id="ZU1iKTIurYE"
                  >
                    Watch project summary in 2-minute video</button>
                  <div className='card-buttons'>
                    <a href="https://stephanieplomp.github.io/react-weather-app/" className='card-btn' target="_blank" rel="noreferrer">Live demo</a>
                    <a href="https://github.com/StephaniePlomp/react-weather-app/" className='card-btn' target="_blank" rel="noreferrer">Source code</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='card right'>
            <button className='project-number-btn'>2</button>
            <div className='card-top'>
              <div className='card-image'>
                <img
                  alt="project screenshot 2"
                  src={budgetManager}
                  className='project-img'></img>
              </div>

              <div className='card-content'>
                <div className='content-top'>
                  <h2 className='card-title'>Budget Manager App</h2>
                  <p className='card-text'>
                    This Budget Manager App is built with with React.js and Redux Toolkit.
                    Redux Toolkit is used to efficiently manage the application's state,
                    ensuring a single source of truth for the financial data.
                    This enables smooth data flow and real-time updates across the app.
                    Recharts is used for creating interactive charts to visualize the financial data.
                    The financial data is organized in rows and columns with Material UI Pagination.
                    The app also utilizes LocalStorage, a web API that allows data to be stored locally on the user's device
                  </p>
                </div>
                <div className='content-bottom'>
                  <button
                    className="card-btn-video"
                    onClick={toggle}
                    id="rokGy0huYEB"
                  >
                    Watch project summary in 2-minute video</button>
                  <div className='card-buttons'>
                    {/* <a href="" className='card-btn current' target="_blank">Current page</a> */}
                    <a href="https://stephanieplomp.github.io/budget-manager-app/" className='card-btn' target="_blank" rel="noreferrer">Live demo</a>
                    <a href="https://github.com/StephaniePlomp/budget-manager-app" className='card-btn' target="_blank" rel="noreferrer">Source code</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='card'>
            <button className='project-number-btn'>3</button>
            <div className='card-top'>
            <div className='card-image'>
              <img
                alt="project screenshot 2"
                src={portfolioPage}
                className='project-img tall'></img>
            </div>
            <div className='card-content'>
              <div className='content-top'>
                <h2 className='card-title'>Portfolio page</h2>
                <p className='card-text'>
                  This portfolio page is built with React.js. React-router-DOM is used for the about section.
                  In the About section are multiple page routes. When changing routes and the component enters the Dom, React Transition Group is used for the animation.
                  Modals are used for showing the resume PDF and project videos. EmailJS is used for sending and receiving messages. After submitting the message the component redirects to the success component.
                </p>
              </div>
              <div className='content-bottom'>
                <button
                  className="card-btn-video"
                  onClick={toggle}
                  id="rokGy0huYEB"
                >
                  Watch project summary in 2-minute video</button>
                <div className='card-buttons'>
                  {/* <a href="" className='card-btn current' target="_blank">Current page</a> */}
                  <a href="https://github.com/StephaniePlomp/stephanieplomp.github.io" className='card-btn' target="_blank" rel="noreferrer">Source code</a>
                </div>
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