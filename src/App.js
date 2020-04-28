import React from 'react';
import './App.css';
import Spotlot from './Spotlot.js';
import facehole from './imgs/me-illu.png';
import frontend from './imgs/front-end.png';
import backend from './imgs/backend.png';
import other from './imgs/other.png';
import face from './imgs/0.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn, faReact, faJsSquare ,faHtml5, faCss3Alt, faNodeJs, faAdobe } from '@fortawesome/free-brands-svg-icons';
import { faFile, faLaptop, faImages, faUser, faDatabase, faServer, faCircle, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [about, setAbout] = React.useState('highlight');
  const [tech, setTech] = React.useState('tech');
  const [project, setProject] = React.useState('project');

  const listenScrollEvent = (event) => {

    let aboutElement = document.querySelector('#about-section');
    let aboutPosition = aboutElement.getBoundingClientRect();
    
    let techElement = document.querySelector('#tech-section');
    let techPosition = techElement.getBoundingClientRect();

    let projectElement = document.querySelector('#projects');
    let projectPosition = projectElement.getBoundingClientRect();

    if(projectPosition.bottom < (window.innerHeight + 3)){
        setAbout('about');
        setTech('tech');
        setProject('highlight');
      } else if(techPosition.top >= 0 && techPosition.bottom <= window.innerHeight){
        setAbout('about');
        setTech('highlight');
        setProject('project');
      } else if(aboutPosition.top === 0) {
        setAbout('highlight');
        setTech('tech');
        setProject('project');
      }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    }
  }, []);

  return (
    <div style={{display: 'flex'}}>
      <div className="sidebar">
        <h1 className="sidebar-name">William Steck</h1>
        <h3 className="sidebar-title">Software Engineer</h3>
        <img className="sidebar-face" src={facehole} alt="profile one"/>
        <div className="sidebar-icon">
          <a title="Check out my GitHub!" href="https://github.com/wills1199/" className="fa-layers fa-fw">
            <FontAwesomeIcon className="github" color='#FFFFFF' icon={faGithubAlt}/>
          </a>
          <a title="Check out my LinkedIn!" href="https://www.linkedin.com/in/willsteck/" className="fa-layers fa-fw" style={{marginTop: 20}}>
            <FontAwesomeIcon className="linkedin" color='#FFFFFF' icon={faLinkedinIn}/>
          </a>
          <a title="Download my resume!" href="William_Steck_Resume.pdf" className="fa-layers fa-fw" style={{marginTop: 20}} id="res" download>
            <FontAwesomeIcon className="resume" color='#FFFFFF' icon={faFile}/>
          </a>
        </div>
        <hr className="sidebar-line" color={'#5789b3'} size={1}></hr>
        <div>
          <a href="#about-section" className={about} style={{textDecoration: 'none'}}>
            <FontAwesomeIcon icon={faUser} className="sidebar-about-icon"/>
            <p className="sidebar-about">About Me</p>
          </a>
          <a href="#tech-section" className={tech} style={{textDecoration: 'none'}}>
            <FontAwesomeIcon icon={faLaptop} className="sidebar-tech-icon"/>
            <p className="sidebar-tech">Tech Skills</p>
          </a>
          <a href="#projects" className={project} style={{textDecoration: 'none'}}>
            <FontAwesomeIcon icon={faImages} className="sidebar-projects-icon"/>
            <p className="sidebar-projects">Projects</p>
          </a>
        </div>
      </div>
      <div className="main">
        <div id="about-section" style={{backgroundColor: '#2d3e50', paddingBottom: '10vh'}}>
          <div className="abut">
            <div style={{flexDirection: 'column'}}>
              <h1 style={{fontSize: 50, color: '#fafafa'}}>William Steck</h1>
              <h3 style={{fontSize: 25, color: '#fafafa', marginTop: -25, marginLeft: 5, fontWeight: 300}}>Software Engineer</h3>
              <div className="para">
                <p style={{lineHeight: '1.6', color: '#fafafa'}}>I'm a software developer that enjoys designing and creating intuitive frontend as well as developing complex scalable backend. Welcome to my website!</p>
              </div>
              <hr color='#4d6475' className="main-line"/>
              <div style={{display: 'flex', flexDirection: 'row'}}>
                <div title="Email me!" className="fa-layers fa-fw" style={{fontSize: '30px', marginTop: '5vh', marginLeft: 5}}>
                  <FontAwesomeIcon color='#5F95C3' icon={faCircle} size="lg"/>
                  <FontAwesomeIcon color='#FFFFFF' icon={faEnvelope} size="xs" style={{padding: '0px 0px 1px 3px'}}/>
                </div>
                
                  <div style={{display: 'flex', flexDirection: 'column'}}>
                    <h1 style={{fontSize: '25px', marginTop: '5vh', marginLeft: 10, color: '#fafafa'}}>Email</h1>
                    <a href="mailto: steckwilliam@gmail.com" style={{textDecoration: 'none'}}>
                      <h3 className="email">steckwilliam@gmail.com</h3>
                    </a>
                  </div>
              </div>
              <hr color='#4d6475' className="main-line"/>
              <div style={{display: 'flex', flexDirection: 'row'}}>
                <div title="Give me a call/text!" className="fa-layers fa-fw" style={{fontSize: '30px', marginTop: '5vh', marginLeft: 5}}>
                  <FontAwesomeIcon color='#5F95C3' icon={faCircle} size="lg"/>
                  <FontAwesomeIcon color='#FFFFFF' icon={faPhone} size="xs" style={{padding: '0px 0px 1px 3px'}}/>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <h1 style={{fontSize: '25px', marginTop: '5vh', marginLeft: 10, color: '#fafafa'}}>Phone</h1>
                  <h3 style={{marginLeft: 10, fontWeight: 300, color: '#fafafa'}}>(504) 920-9950</h3>
                </div>
              </div>
            </div>
            <div className="main-img">
              <div className="pattern-dots-md" style={{width: '100%', height: 'auto', color: '#4770d2'}}>
                <img src={face} alt="face" style={{transform: 'translate(30px, -30px)', width: '100%', height: 'auto'}}/>
              </div>
            </div>
          </div>
        </div>
        {/* <div style={{borderBottom: '2px solid #eaeaea', marginTop: '80px', marginLeft: '2.5%', marginRight: '2.5%'}}/> */}
        <div id="tech-section" style={{backgroundColor: '#add8e6'}}>
          <div className="tec">
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <div style={{backgroundColor: '#5F95C3', width: 7, height: 50, marginRight: 10}}></div>
              <h1 style={{color: '#fafafa'}}>Tech Skills</h1>
            </div>
            <div className="techskills">
              <div className="frontend">
                <img src={frontend} alt="front end" width={75} height={75} style={{position: 'absolute', top: -40}}/>
                <h3 style={{color: '#292929', fontSize: 19, marginBottom: 0, marginTop: 50}}>Frontend</h3>
                <ul style={{listStyle: 'none', fontSize: 18, marginLeft: -40, color: '#292929'}}>
                  <li style={{ marginBottom: 10 }}>
                    <FontAwesomeIcon color='#68d4f8' icon={faReact} style={{marginRight: 6}}/>
                    ReactJS/React Native
                  </li>
                  <li style={{ marginBottom: 10 }}>
                    <FontAwesomeIcon color='#f0dd5c' icon={faJsSquare} style={{marginRight: 10}}/>
                    JavaScript
                  </li>
                  <li style={{ marginBottom: 10 }}>
                    <FontAwesomeIcon color='#dc6e43' icon={faHtml5} style={{marginRight: 11, marginLeft: 1}}/>
                    HTML
                  </li>
                  <li style={{ marginBottom: 10 }}>
                    <FontAwesomeIcon color='#57a8da' icon={faCss3Alt} style={{marginRight: 10, marginLeft: 1}}/>
                    CSS
                  </li>
                  <li>
                    <FontAwesomeIcon color='#58b58a' icon={faNodeJs} style={{marginRight: 9}}/>
                    Node.js
                  </li>
                </ul>
              </div>
              <div className="backend">
                <img src={backend} alt="back end" width={75} height={75} style={{position: 'absolute', top: -40}}/>
                <h3 style={{color: '#292929', fontSize: 19, marginBottom: 0, marginTop: 50}}>Backend</h3>
                <ul style={{listStyle: 'none', marginLeft: -90, fontSize: 18, color: '#292929' }}>
                  <li style={{ marginBottom: 10 }}>
                    <FontAwesomeIcon color='#106cbb' icon={faDatabase} style={{marginRight: 10}}/>
                    PostgreSQL
                  </li>
                  <li style={{ marginBottom: 10 }}>
                    <FontAwesomeIcon color='#106cbb' icon={faDatabase} style={{marginRight: 10}}/>
                    MySQL
                  </li>
                  <li style={{ marginBottom: 10 }}>
                    <FontAwesomeIcon color='#106cbb' icon={faDatabase} style={{marginRight: 10}}/>
                    SQL
                  </li>
                  <li style={{ marginBottom: 10 }}>
                    <FontAwesomeIcon color='#3b2d88' icon={faServer} style={{marginRight: 9}}/>
                    Express
                  </li>
                  <li style={{ marginBottom: 10 }}>
                    <FontAwesomeIcon color='#3b2d88' icon={faServer} style={{marginRight: 9}}/>
                    Fastify
                  </li>
                </ul>
              </div>
              <div className="other">
                <img src={other} alt="other" width={75} height={75} style={{position: 'absolute', top: -40}}/>
                <h3 style={{color: '#292929', fontSize: 19, marginBottom: 0, marginTop: 50}}>Other</h3>
                <ul style={{listStyle: 'none', marginLeft: -90, fontSize: 18, color: '#292929' }}>
                  <li style={{ marginBottom: 10 }}>
                    <FontAwesomeIcon color='#2fbdf0' icon={faAdobe} style={{marginRight: 10}}/>
                    Adobe Photoshop
                  </li>
                  <li style={{ marginBottom: 10 }}>
                    <FontAwesomeIcon color='#fa7e2c' icon={faAdobe} style={{marginRight: 10}}/>
                    Adobe Illustrator
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <div style={{borderBottom: '2px solid #eaeaea', marginTop: '80px', marginLeft: '2.5%', marginRight: '2.5%'}}/> */}
        <div id="projects" style={{backgroundColor: '#2d3e50'}}>
          <div className="proj">
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <div style={{backgroundColor: '#5F95C3', width: 7, height: 50, marginRight: 10}}></div>
              <h1 style={{color: '#fafafa'}}>Projects</h1>
            </div>
            <div className="projects" style={{display: 'flex', flexDirection: 'row', overflowX: 'auto', marginTop: 30, marginBottom: '20px', marginRight: '5%'}}>
              <Spotlot num={20}/>
              <div style={{borderLeft: '2px solid #4d6475', height: '300px', alignSelf: 'center', marginRight: 20}}/>
              <Spotlot num={20}/>
              <div style={{borderLeft: '2px solid #4d6475', height: '300px', alignSelf: 'center', marginRight: 20}}/>
              <Spotlot num={20}/>
              <div style={{borderLeft: '2px solid #4d6475', height: '300px', alignSelf: 'center', marginRight: 20}}/>
              <Spotlot num={0}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
