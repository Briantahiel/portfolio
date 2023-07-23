
import { useEffect } from 'react';
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
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
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

  // const [isActive, setIsActive] = useState(false);

  // const toggleMenu = () => {
  //   setIsActive(!isActive);
  // };

  return (
    <>
    <div className='bg_color'>
      <div className='menu-container'>
      {/* data-aos="fade-down" */}
        <div className='menu-logo'>
          <p>BMG</p> 
        </div>
       <div className='menu-links'>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#technologies">Technologies</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </div>
      </div>
      <div className='description-container'>
        <div className='description-content'>
          <span>Hi, I&apos;m Brian</span>
          <span>Front End Developer</span>
        </div>
      <div className='social-container'>
        <div className='social-icon'>
          <a href='https://www.linkedin.com/in/brian-g%C3%B3mez/' target="_blank" rel="noopener noreferrer"><img src={linkedin} alt='Linkedin'/></a>
        </div>
        <div className='social-icon'>
          <a href='https://github.com/Briantahiel' target="_blank" rel="noopener noreferrer"><img src={github} alt='Github'/></a>
        </div>
      </div>
      </div>
      </div>
     <div id='about'></div> 
      <div className='about-container'>
      <div id='container-about'>
      <div className='about-content about_text'>
        <h1>About me.</h1> 
        {/* data-aos="fade-right" */}
        <h4><strong>Hello, I&apos;m Brian</strong>, a university-trained programming technician. With a curious and perfectionist nature, I am always eager to expand my knowledge. My passion for technology has motivated me to pursue various courses and engage in personal projects alongside my university studies. Now that I have successfully completed my academic journey, I am actively seeking an opportunity to contribute to the world of technology. If you have any potential opportunities available, please don&apos;t hesitate to contact me <a href='https://www.linkedin.com/in/brian-g%C3%B3mez/' target="_blank" rel="noopener noreferrer">here.</a> Or you can check out my <a href='https://github.com/Briantahiel' target="_blank" rel="noopener noreferrer">Github.</a></h4>
        </div>
        <div className='img-content img_section'>
          <img src={cat} className='parallax-image cat' alt='Cat'/>
          <img src={question} alt='Question mark' className='question'/>
        </div>
        </div>
      </div>
      {/* </div> */}
      <div id='technologies'></div> 
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
      <div>
        <h1>When Technology Meets Curiosity: A Personal Journey</h1>
        <h4></h4>   
        </div>
      <div id='projects'></div>
      <h1>Projects</h1>
      <div id='card-container'>
      <div id='card-project'>
      <Card sx={{ maxWidth: 310 }} >
      <CardMedia
        component="img"
        alt="Dental Clinic"
        height="100%"
        image={consultorio}
      />
      <CardContent >
        <Typography gutterBottom variant="h6" component="div">
          Dental Clinic
        </Typography>
        <Typography variant="body2" color="text.secondary">
        As part of my university programming class, I undertook a project to develop an appointment scheduling system for a dental clinic. This innovative system empowers patients to conveniently request and manage their appointments with ease.
        </Typography>
        <hr/>
        <Typography variant='subtitle2'>
          HTML - CSS - BOOTSTRAP - JAVASCRIPT - SQL - REACT 
        </Typography>
       <Typography>
        <div className="overlay">
          <div>
            <a href='/'>Private Github</a>
          </div>
          <div>
            <a href='/'>Coming Soon</a>
          </div>
        </div>
       </Typography> 
      
      </CardContent>
    </Card>
    </div>
    <div id='card-project'>
      <Card sx={{ maxWidth: 310 }} >
      <CardMedia
        component="img"
        alt="TechnoStore"
        height="173px"
        image={tecnostore}
      />
      <CardContent >
        <Typography gutterBottom variant="h6" component="div">
          TechnoStore
        </Typography>
        <Typography variant="body2" color="text.secondary">
        This E-commerce project oriented to retail tech companies allowing them to manage product stock, sales for individual clients who are registered on the website, and to encourage customers loyalty through a newsletter subscription.
        </Typography>
        <hr/>
        <Typography variant='subtitle2'>
          HTML - CSS - BOOTSTRAP - JAVASCRIPT - REACT
        </Typography>
       <Typography>
        <div className="overlay">
          <div>
            <a href='https://github.com/No-Country/c6-22' target="_blank" rel="noopener noreferrer">Github</a>
          </div>
          <div>
            <a href='https://tecno-store.vercel.app/' target="_blank" rel="noopener noreferrer">Demo</a>
          </div>
        </div>
       </Typography> 
      </CardContent>
    </Card>
    </div>
    <div id='card-project'>
      <Card sx={{ maxWidth: 310 }} >
      <CardMedia
        component="img"
        alt="TechnoStore"
        height="173px"
        image={ecommerce}
      />
      <CardContent >
        <Typography gutterBottom variant="h6" component="div">
          E-Commerce
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Our tech-savvy ecommerce platform! Where you can browse, search, and filter through a wide range of cutting-edge tech products. Easily add your favorites to the cart and enjoy a seamless shopping experience.
        </Typography>
        <hr/>
        <Typography variant='subtitle2'>
          HTML - CSS - BOOTSTRAP - JAVASCRIPT - REACT
        </Typography>
       <Typography>
        <div className="overlay">
          <div>
            <a href='/'>Private Github</a>
          </div>
          <div>
            <a href='/'>Coming Soon</a>
          </div>
        </div>
       </Typography> 
      </CardContent>
    </Card>
    </div>

    <div id='card-project'>
      <Card sx={{ maxWidth: 310 }} >
      <CardMedia
        component="img"
        alt="Portfolio"
        height="100%"
        image={portfolio}
      />
      <CardContent >
        <Typography gutterBottom variant="h6" component="div">
          Portfolio
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Find my personal projects, university assignments, and various courses I have completed. With a passion for technology and a strong commitment to continuous learning, I have crafted this space to exhibit my diverse skills and experiences.
        </Typography>
        <hr/>
        <Typography variant='subtitle2'>
          HTML - CSS - MATERIAL UI - JAVASCRIPT - REACT
        </Typography>
       <Typography>
        <div className="overlay">
          <div>
            <a href='/'>Private Github</a>
          </div>
          <div>
            <a href='/'>Demo</a>
          </div>
        </div>
       </Typography> 
      </CardContent>
    </Card>
    </div>
    <div id='card-project'>
      <Card sx={{ maxWidth: 310 }} >
      <CardMedia
        component="img"
        alt="Marvel"
        height="100%"
        image={marvel}
      />
      <CardContent >
        <Typography gutterBottom variant="h6" component="div">
          Marvel Api
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Explore the Marvel Universe with our dynamic Marvel Character Search! Powered by an API, our search engine brings you a vast collection of beloved Marvel characters, each with their names, photos, and descriptions
        </Typography>
        <hr/>
        <Typography variant='subtitle2'>
          HTML - CSS - JAVASCRIPT - REACT 
        </Typography>
        <br />
       <Typography>
        <div className="overlay">
          <div>
            <a href='https://github.com/Briantahiel/MarvelApi' target="_blank" rel="noopener noreferrer">Github</a>
          </div>
          <div>
            <a href="https://silver-selkie-4b5577.netlify.app/" target="_blank" rel="noopener noreferrer">Demo</a>
          </div>
        </div>
       </Typography> 
      </CardContent>
    </Card>
    </div>
    <div id='card-project'>
      <Card sx={{ maxWidth: 310 }} >
      <CardMedia
        component="img"
        alt="Weather App"
        height="100%"
        image={weather}
      />
      <CardContent >
        <Typography gutterBottom variant="h6" component="div">
          Weather App
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Welcome to our Weather App, your gateway to real-time weather updates from around the world! Utilizing a powerful API, our app lets you effortlessly search and access accurate temperature and weather conditions for any location.
        </Typography>
        <hr/>
        <Typography variant='subtitle2'>
          HTML - CSS - JAVASCRIPT - REACT
        </Typography>
        <br />
       <Typography>
        <div className="overlay">
          <div>
            <a href='https://github.com/Briantahiel/WeatherApp' target="_blank" rel="noopener noreferrer">Github</a>
          </div>
          <div>
            <a href="https://incredible-beijinho-896f42.netlify.app/" target="_blank" rel="noopener noreferrer">Demo</a>
          </div>
        </div>
       </Typography> 
      </CardContent>
    </Card>
    </div>
    <div id='card-project'>
      <Card sx={{ maxWidth: 310 }} >
      <CardMedia
        component="img"
        alt="Hangman"
        height="100%"
        image={hangman}
      />
      <CardContent >
        <Typography gutterBottom variant="h6" component="div">
          Hangman
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Welcome to Hangman, an interactive word-guessing game crafted with HTML, CSS, and JavaScript! Challenge yourself to solve the mystery word, letter by letter, or load your own custom words to keep the fun going.
        </Typography>
        <hr/>
        <Typography variant='subtitle2'>
          HTML - CSS - JAVASCRIPT 
        </Typography>
        <br />
       <Typography>
        <div className="overlay">
          <div>
            <a href='https://github.com/Briantahiel/Hangman' target="_blank" rel="noopener noreferrer">Github</a>
          </div>
          <div>
            <a href="https://briantahiel.github.io/Hangman/" target="_blank" rel="noopener noreferrer">Demo</a>
          </div>
        </div>
       </Typography> 
      </CardContent>
    </Card>
    </div>
    <div id='card-project'>
      <Card sx={{ maxWidth: 310 }} >
      <CardMedia
        component="img"
        alt="Rock, Paper, Scissors"
        height="100%"
        image={rps}
      />
      <CardContent >
        <Typography gutterBottom variant="h6" component="div">
          Rock, Paper, Scissors
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Get ready for a classic gaming showdown with our Rock Paper Scissors game, brought to life with HTML, CSS, and JavaScript! Challenge the computer in an exhilarating battle of wits and luck. Choose your move wisely 
        </Typography>
        <hr/>
        <Typography variant='subtitle2'>
          HTML - CSS - JAVASCRIPT
        </Typography>
        <br />
       <Typography>
        <div className="overlay">
          <div>
            <a href='https://github.com/Briantahiel/Rock_paper_scissors' target="_blank" rel="noopener noreferrer">Github</a>
          </div>
          <div>
            <a href="https://meek-shortbread-55732c.netlify.app/" target="_blank" rel="noopener noreferrer">Demo</a>
          </div>
        </div>
       </Typography> 
      </CardContent>
    </Card>
    </div>
    <div id='card-project'>
      <Card sx={{ maxWidth: 310 }} >
      <CardMedia
        component="img"
        alt="Encryptor"
        height="100%"
        image={encriptador}
      />
      <CardContent >
        <Typography gutterBottom variant="h6" component="div">
          Encryptor
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Keep your communications secure and confidential by encoding your texts with our user-friendly interface. Whether you want to protect sensitive information or simply add an element of fun to your messages, our app has you covered 
        </Typography>
        <hr/>
        <Typography variant='subtitle2'>
          HTML - CSS - JAVASCRIPT
        </Typography>
        <br />
       <Typography>
        <div className="overlay">
          <div>
            <a href='https://github.com/Briantahiel/encryptor' target="_blank" rel="noopener noreferrer">Github</a>
          </div>
          <div>
            <a href="https://briantahiel.github.io/encryptor/" target="_blank" rel="noopener noreferrer">Demo</a>
          </div>
        </div>
       </Typography> 
      </CardContent>
    </Card>
    </div>
    <div id='card-project'>
      <Card sx={{ maxWidth: 310 }} >
      <CardMedia
        component="img"
        alt="Calculator"
        height="100%"
        image={calculator}
      />
      <CardContent >
        <Typography gutterBottom variant="h6" component="div">
          Calculator
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Crafted as part of a practical project. Experience seamless calculations with this user-friendly and efficient tool. Whether you&apos;re adding, subtracting, multiplying, or dividing, this calculator has got you covered. 
        </Typography>
        <hr/>
        <Typography variant='subtitle2'>
          HTML - CSS - JAVASCRIPT 
        </Typography>
       <Typography>
        <div className="overlay">
          <div>
            <a href='https://briantahiel.github.io/Calculator/' target="_blank" rel="noopener noreferrer">Github</a>
          </div>
          <div>
            <a href='https://github.com/Briantahiel/Calculator' target="_blank" rel="noopener noreferrer">Demo</a>
          </div>
        </div>
       </Typography> 
      </CardContent>
    </Card>
    </div>
    <div id='card-project'>
      <Card sx={{ maxWidth: 310 }} >
      <CardMedia
        component="img"
        alt="Notes"
        height="100%"
        image={crud}
      />
      <CardContent >
        <Typography gutterBottom variant="h6" component="div">
          Notes
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Crafted as part of a practical project. Experience seamless calculations with this user-friendly and efficient tool. Whether you&apos;re adding, subtracting, multiplying, or dividing, this calculator has got you covered. 
        </Typography>
        <hr/>
        <Typography variant='subtitle2'>
          HTML - CSS - JAVASCRIPT - REACT
        </Typography>
       <Typography>
        <div className="overlay">
          <div>
            <a href='https://github.com/Briantahiel/Notes' target="_blank" rel="noopener noreferrer">Github</a>
          </div>
          <div>
            <a href='https://briantahiel.github.io/Notes/' target="_blank" rel="noopener noreferrer">Demo</a>
          </div>
        </div>
       </Typography> 
      </CardContent>
    </Card>
    </div>
    <div id='card-project'>
      <Card sx={{ maxWidth: 310 }} >
      <CardMedia
        component="img"
        alt="Video Games"
        height="100%"
        image={videogames}
      />
      <CardContent >
        <Typography gutterBottom variant="h6" component="div">
          Notes
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Crafted as part of a practical project. Experience seamless calculations with this user-friendly and efficient tool. Whether you&apos;re adding, subtracting, multiplying, or dividing, this calculator has got you covered. 
        </Typography>
        <hr/>
        <Typography variant='subtitle2'>
          HTML - CSS 
        </Typography>
       <Typography>
        <div className="overlay">
          <div>
            <a href='https://github.com/Briantahiel/CSS_grid_layouts' target="_blank" rel="noopener noreferrer">Github</a>
          </div>
          <div>
            <a href='https://briantahiel.github.io/CSS_grid_layouts/' target="_blank" rel="noopener noreferrer">Demo</a>
          </div>
        </div>
       </Typography> 
      </CardContent>
    </Card>
    </div>
    <div id='card-project'>
      <Card sx={{ maxWidth: 310 }} >
      <CardMedia
        component="img"
        alt="Restaurant"
        height="100%"
        image={resto}
      />
      <CardContent >
        <Typography gutterBottom variant="h6" component="div">
          Dantonio Restaurant
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Crafted as part of a practical project. Experience seamless calculations with this user-friendly and efficient tool. Whether you&apos;re adding, subtracting, multiplying, or dividing, this calculator has got you covered. 
        </Typography>
        <hr/>
        <Typography variant='subtitle2'>
          HTML - CSS 
        </Typography>
       <Typography>
        <div className="overlay">
          <div>
            <a href='https://github.com/Briantahiel/Bar' target="_blank" rel="noopener noreferrer">Github</a>
          </div>
          <div>
            <a href='https://neon-souffle-2902c9.netlify.app/' target="_blank" rel="noopener noreferrer">Demo</a>
          </div>
        </div>
       </Typography> 
      </CardContent>
    </Card>
    </div>
    <div id='card-project'>
      <Card sx={{ maxWidth: 310 }} >
      <CardMedia
        component="img"
        alt="App2D2"
        height="100%"
        image={app2d2}
      />
      <CardContent >
        <Typography gutterBottom variant="h6" component="div">
          App2D2
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Crafted as part of a practical project. Experience seamless calculations with this user-friendly and efficient tool. Whether you&apos;re adding, subtracting, multiplying, or dividing, this calculator has got you covered. 
        </Typography>
        <hr/>
        <Typography variant='subtitle2'>
          HTML - CSS 
        </Typography>
       <Typography>
        <div className="overlay">
          <div>
            <a href='https://github.com/Briantahiel/Responsive_Layouts' target="_blank" rel="noopener noreferrer">Github</a>
          </div>
          <div>
            <a href='https://briantahiel.github.io/Responsive_Layouts/' target="_blank" rel="noopener noreferrer">Demo</a>
          </div>
        </div>
       </Typography> 
      </CardContent>
    </Card>
    </div>
    <div id='card-project'>
      <Card sx={{ maxWidth: 310 }} >
      <CardMedia
        component="img"
        alt="IMAXVentas"
        height="100%"
        image={imax}
      />
      <CardContent >
        <Typography gutterBottom variant="h6" component="div">
          IMAXVentas
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Crafted as part of a practical project. Experience seamless calculations with this user-friendly and efficient tool. Whether you&apos;re adding, subtracting, multiplying, or dividing, this calculator has got you covered. 
        </Typography>
        <hr/>
        <Typography variant='subtitle2'>
          HTML - CSS 
        </Typography>
       <Typography>
        <div className="overlay">
          <div>
            <a href='https://github.com/Briantahiel/ImaxVentasGit' target="_blank" rel="noopener noreferrer">Github</a>
          </div>
          <div>
            <a href='https://fancy-muffin-e118ab.netlify.app/' target="_blank" rel="noopener noreferrer">Demo</a>
          </div>
        </div>
       </Typography> 
      </CardContent>
    </Card>
    </div>
    </div>
    <footer>
      <p>All rights reserved. Made with love.</p>
    </footer>
    
    </>
  );
}

export default Home;
