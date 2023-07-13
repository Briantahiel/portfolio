
import { useState, useEffect } from 'react';
import './App.css';
import linkedin from "./assets/linkedin.svg";
import github from "./assets/github.svg";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import cat from "./assets/cat.png";
import question from "./assets/question.png";

// import parallax from "./assets/headphones.png";

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
          <p>LOGO</p> 
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
          <li><a href="#contact">Contact</a></li>
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
          <img src={linkedin} alt='Linkedin'/>
        </div>
        <div className='social-icon'>
          <img src={github} alt='Github'/>
        </div>
      </div>
      {/* <div className="parallax-container">
        <img className="parallax-image" src={parallax} alt="Parallax Image" />
      </div> */}
      {/* <div className='main-container' id='about'> */}
      {/* <div className='custom-cursor'></div> */}
      <div className='about-container' id='about'>
      <div id='container-about'>
      <div className='about-content about_text' data-aos="fade-right" >
        <h4>Hello, I&apos;m Brian, a university-trained programming technician. With a curious and perfectionist nature, I am always eager to expand my knowledge. My passion for technology has motivated me to pursue various courses and engage in personal projects alongside my university studies. Now that I have successfully completed my academic journey, I am actively seeking an opportunity to contribute to the world of technology. If you have any potential opportunities available, please don&apos;t hesitate to contact me.</h4>
        </div>
        <div className='img-content img_section'>
          <img src={cat} className='parallax-image cat' alt='Cat'/>
          <img src={question} alt='Question mark' className='question'/>
        </div>
        </div>
      </div>
      {/* </div> */}
      <div className='projects-container'>
        <p>Projects section</p>
        <h4>Hello, I&apos;m Brian, a university-trained programming technician. With a curious and perfectionist nature, I am always eager to expand my knowledge. My passion for technology has motivated me to pursue various courses and engage in personal projects alongside my university studies. Now that I have successfully completed my academic journey, I am actively seeking an opportunity to contribute to the world of technology. If you have any potential opportunities available, please don&apos;t hesitate to contact me.</h4>
        <h4></h4>
      </div>
      <div className='education-container'>
        <p>Education section</p>
        <h4></h4>
      </div>
    </>
  );
}

export default Home;
