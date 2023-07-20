
import { useState, useEffect } from 'react';
import './App.css';
import linkedin from "./assets/linkedin.svg";
import github from "./assets/github.svg";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import cat from "./assets/cat.png";
import question from "./assets/question.png";
import htmlIcon from "./assets/html.png";
import cssIcon from "./assets/css.png";
import javascriptIcon from "./assets/javascript.png";
import sqlIcon from "./assets/sql.png";
import pythonIcon from "./assets/py.png";
import githubIcon from "./assets/github.png";
import gitIcon from "./assets/git.png";
import bootstrapIcon from "./assets/bootstrap.png";
import reactIcon from "./assets/react.png";
import sassIcon from "./assets/sass.png";
import consultorio from "./assets/consultorio.png";
import hangman from "./assets/hangman.jpg";
import marvel from "./assets/marvel.jpg";
import videogames from "./assets/videogames.jpg";
import app2d2 from "./assets/app2d2.jpg";
import rps from "./assets/rps.jpg";
import crud from "./assets/crud.jpg";
import encriptador from "./assets/encriptador.jpg";
import weather from "./assets/weather.jpg";
import imax from "./assets/imax.jpg";
import resto from "./assets/resto.jpg";
import ecommerce from "./assets/ecommerce.jpg";
import calculator from "./assets/calculator.jpg";
import portfolio from "./assets/portfolio.jpg";
import tecnostore from "./assets/tecnoStore.jpg";
import materialui from "./assets/materialUI.svg";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Home = () => {
  // useEffect(() => {
  //   const cursor = document.querySelector('.custom-cursor');
  //   const section = document.querySelector('#about');

  //   section.addEventListener('mouseenter', () => {
  //     cursor.classList.add('active');
  //   });

  //   section.addEventListener('mouseleave', () => {
  //     cursor.classList.remove('active');
  //   });

  //   document.addEventListener('mousemove', (e) => {
  //     if (cursor.classList.contains('active')) {
  //       gsap.to(cursor, {
  //         x: e.clientX,
  //         y: e.clientY,
  //         duration: .1,
  //       });
  //     }
  //   });
  // }, []);

  useEffect(() => {
  
    gsap.registerPlugin(ScrollTrigger);

    const sections = document.querySelectorAll('.section');

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

   useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      gsap.to('.parallax-image', {
        x: (x - window.innerWidth / 2) * 0.05,
        y: (y - window.innerHeight / 2) * 0.05,
        rotation: (x - window.innerWidth / 2) * 0.02,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
    <div className='main-container bg_color'>
      <div className='menu-container' data-aos="fade-down" >
        <div className='menu-logo'>
          <p>BMG</p> 
        </div>
          <div className={`logo ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div> 
      </div>
      <div className={`menu-links ${isActive ? 'active' : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          {/* <li><a href="#contact">Contact</a></li> */}
        </ul>
      </div>
      <div className='description-container'>
        <div className='description-content'>
          <span>BRIAN</span>
          <span>PROGRAMMER</span>
          <span>FRONT END DEVELOPER</span>
        </div>
      </div>
      </div>
      <div data-aos="fade-right" className='social-container'>
        <div className='social-icon'>
          <a href='https://www.linkedin.com/in/brian-g%C3%B3mez/' target="_blank" rel="noopener noreferrer"><img src={linkedin} alt='Linkedin'/></a>
        </div>
        <div className='social-icon'>
          <a href='https://github.com/Briantahiel' target="_blank" rel="noopener noreferrer"><img src={github} alt='Github'/></a>
        </div>
      </div>
      {/* <div className="parallax-container">
        <img className="parallax-image" src={parallax} alt="Parallax Image" />
      </div> */}
     <div id='about'></div> 
      <div className='about-container'>
      <div id='container-about'>
      <div className='about-content about_text' data-aos="fade-right" >
        <h1>About me.</h1>
        <h4><strong>Hello, I&apos;m Brian</strong>, a university-trained programming technician. With a curious and perfectionist nature, I am always eager to expand my knowledge. My passion for technology has motivated me to pursue various courses and engage in personal projects alongside my university studies. Now that I have successfully completed my academic journey, I am actively seeking an opportunity to contribute to the world of technology. If you have any potential opportunities available, please don&apos;t hesitate to contact me <a href='https://www.linkedin.com/in/brian-g%C3%B3mez/' target="_blank" rel="noopener noreferrer">here.</a> Or you can check out my <a href='https://github.com/Briantahiel' target="_blank" rel="noopener noreferrer">Github.</a></h4>
        </div>
        <div className='img-content img_section'>
          <img src={cat} className='parallax-image cat' alt='Cat'/>
          <img src={question} alt='Question mark' className='question'/>
        </div>
        </div>
      </div>
      {/* </div> */}
      <div className='icon-container'>
        <h1>Technologies and Tools.</h1><br />
        <div className='icons'>
          <div className='icon-img'>
            <img src={htmlIcon} alt='HTML'/>
            <div className="text-overlay">HTML</div>
          </div>
          <div className='icon-img'>
            <img src={cssIcon} alt='CSS'/>
            <div className="text-overlay">CSS</div>
          </div>
          <div className='icon-img'>
            <img src={javascriptIcon} alt='Javascript'/>
            <div className="text-overlay">Javascript</div>
          </div>
          <div className='icon-img'>
            <img src={reactIcon} alt='React'/>
            <div className="text-overlay">React</div>
          </div>
          <div className='icon-img'>
            <img src={pythonIcon} alt='Python'/>
            <div className="text-overlay">Python</div>
          </div>
          <div className='icon-img'>
            <img src={sqlIcon} alt='SQL'/>
            <div className="text-overlay">SQL</div>
          </div>
          <div className='icon-img'>
            <img src={bootstrapIcon} alt='Bootstrap'/>
            <div className="text-overlay">Bootstrap</div>
          </div>
          <div className='icon-img'>
            <img src={materialui} alt='Material UI'/>
            <div className="text-overlay">MaterialUI</div>
          </div>
          <div className='icon-img' id='sass'>
            <img src={sassIcon} alt='Sass'/>
            <div className="text-overlay">Sass</div>
          </div>
          <div className='icon-img'>
            <img src={githubIcon} alt='Github'/>
            <div className="text-overlay">Github</div>
          </div>
          <div className='icon-img'>
            <img src={gitIcon} alt='Git'/>
            <div className="text-overlay">Git</div>
          </div>
        </div>
        <br />
      </div>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      <div id='projects'></div>
      <div className='projects-container'>
        <h1>Projects</h1>
        <div className='project-card_container'>
        <div data-aos="fade-up" data-aos-duration="1000">
          <div className='project-card'>
            <img src={consultorio} alt='Consultorio Dentista'/>
            <div className="overlay">
              <div>
                <a href='#'>Private Github</a>
              </div>
              <div>
                <a href='/'>Coming Soon</a>
              </div>
              <div className='proyect-description'>
                <p></p>
              </div>
            </div>
          </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
          <div className='project-card'>
            <img src={hangman} alt='Hangman'/>
            <div className="overlay">
              <div>
                <a href='https://github.com/Briantahiel/Hangman' target="_blank" rel="noopener noreferrer">Github</a>
              </div>
              <div>
              <a href="https://briantahiel.github.io/Hangman/" target="_blank" rel="noopener noreferrer">Demo</a>
              </div>
            </div>
          </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
          <div className='project-card'>
            <img src={marvel} alt='Marvel Api'/>
            <div className="overlay">
              <div>
                <a href='https://github.com/Briantahiel/MarvelApi' target="_blank" rel="noopener noreferrer">Github</a>
              </div>
              <div>
                <a href='https://silver-selkie-4b5577.netlify.app/' target="_blank" rel="noopener noreferrer">Demo</a>
              </div>
            </div>
            </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
            <div className='project-card'>
            <img src={videogames} alt='Video games'/>
            <div className="overlay">
              <div>
                <a href='https://github.com/Briantahiel/CSS_grid_layouts' target="_blank" rel="noopener noreferrer">Github</a>
              </div>
              <div>
                <a href='https://briantahiel.github.io/CSS_grid_layouts/' target="_blank" rel="noopener noreferrer">Demo</a>
              </div>
            </div>
            </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
            <div className='project-card'>
            <img src={app2d2} alt='Landing Page'/>
            <div className="overlay">
              <div>
                <a href='https://github.com/Briantahiel/Responsive_Layouts' target="_blank" rel="noopener noreferrer">Github</a>
              </div>
              <div>
                <a href='https://briantahiel.github.io/Responsive_Layouts/' target="_blank" rel="noopener noreferrer">Demo</a>
              </div>
            </div>
            </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
            <div className='project-card'>
            <img src={rps} alt='Rock Paper Scissors'/>
            <div className="overlay">
              <div>
                <a href='https://github.com/Briantahiel/Rock_paper_scissors' target="_blank" rel="noopener noreferrer">Github</a>
              </div>
              <div>
                <a href='https://meek-shortbread-55732c.netlify.app/' target="_blank" rel="noopener noreferrer">Demo</a>
              </div>
            </div>
            </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
            <div className='project-card'>
            <img src={crud} alt='Crud'/>
            <div className="overlay">
              <div>
                <a href='https://github.com/Briantahiel/Notes' target="_blank" rel="noopener noreferrer">Github</a>
              </div>
              <div>
                <a href='https://briantahiel.github.io/Notes/' target="_blank" rel="noopener noreferrer">Demo</a>
              </div>
            </div>
            </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
            <div className='project-card'>
            <img src={encriptador} alt='Encriptador'/>
            <div className="overlay">
              <div>
                <a href='https://github.com/Briantahiel/encryptor' target="_blank" rel="noopener noreferrer">Github</a>
              </div>
              <div>
                <a href='https://briantahiel.github.io/encryptor/' target="_blank" rel="noopener noreferrer">Demo</a>
              </div>
            </div>
            </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
            <div className='project-card'>
            <img src={weather} alt='Weather'/>
            <div className="overlay">
              <div>
                <a href='https://github.com/Briantahiel/WeatherApp' target="_blank" rel="noopener noreferrer">Github</a>
              </div>
              <div>
                <a href='https://incredible-beijinho-896f42.netlify.app/' target="_blank" rel="noopener noreferrer">Demo</a>
              </div>
            </div>
            </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
            <div className='project-card'>
            <img src={imax} alt='Landing Page'/>
            <div className="overlay">
              <div>
                <a href='https://github.com/Briantahiel/ImaxVentasGit' target="_blank" rel="noopener noreferrer">Github</a>
              </div>
              <div>
                <a href='https://fancy-muffin-e118ab.netlify.app/' target="_blank" rel="noopener noreferrer">Demo</a>
              </div>
            </div>
            </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
            <div className='project-card'>
            <img src={resto} alt='Landing Page'/>
            <div className="overlay">
              <div>
                <a href='https://github.com/Briantahiel/Bar' target="_blank" rel="noopener noreferrer">Github</a>
              </div>
              <div>
                <a href='https://neon-souffle-2902c9.netlify.app/' target="_blank" rel="noopener noreferrer">Demo</a>
              </div>
            </div>
            </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
            <div className='project-card'>
            <img src={ecommerce} alt='E-commerce'/>
            <div className="overlay">
              <div>
                <a href='#' target="_blank" rel="noopener noreferrer">Private Github</a>
              </div>
              <div>
                <a href='/'>Coming Soon</a>
              </div>
            </div>
            </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
            <div className='project-card'>
            <img src={calculator} alt='Calculator'/>
            <div className="overlay">
              <div>
                <a href='https://briantahiel.github.io/Calculator/' target="_blank" rel="noopener noreferrer">Github</a>
              </div>
              <div>
                <a href='https://github.com/Briantahiel/Calculator' target="_blank" rel="noopener noreferrer">Demo</a>
              </div>
            </div>
            </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
            <div className='project-card'>
            <img src={portfolio} alt='Calculator'/>
            <div className="overlay">
              <div>
                <a href='#' target="_blank" rel="noopener noreferrer">Private Github</a>
              </div>
              <div>
                <a href='/'>Coming Soon</a>
              </div>
            </div>
            </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
            <div className='project-card'>
            <img src={tecnostore} alt='TecnoStore'/>
            <div className="overlay">
              <div>
                <a href='https://github.com/No-Country/c6-22' target="_blank" rel="noopener noreferrer">Github</a>
              </div>
              <div>
                <a href='https://tecno-store.vercel.app/' target="_blank" rel="noopener noreferrer">Demo</a>
              </div>
            </div>
            </div>
            </div>
        </div>
      </div>
      <footer>
        <p>All rights reserved. Made with love.</p>
      </footer>
    </>
  );
}

export default Home;
