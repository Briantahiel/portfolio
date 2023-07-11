
// import { useState, useEffect } from 'react';
// import './App.css';
// import linkedin from "./assets/linkedin.svg";
// import github from "./assets/github.svg";
// import gsap from 'gsap';
// import parallax from "./assets/headphones.png"
// const Home = () => {
//   // const [parallaxTransform, setParallaxTransform] = useState({ x: 0, y: 0 });
//   // const handleMouseMove = (e) => {
//   //   const x = e.clientX / window.innerWidth;
//   //   const y = e.clientY / window.innerHeight;
//   //   setParallaxTransform({ x: x * 20, y: y * 20 });
//   // };

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const x = e.clientX;
//       const y = e.clientY;

//       gsap.to('.parallax-image', {
//         x: (x - window.innerWidth / 2) * 0.05,
//         y: (y - window.innerHeight / 2) * 0.05,
//         rotation: (x - window.innerWidth / 2) * 0.02,
//         ease: 'power2.out',
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);
//   const [isActive, setIsActive] = useState(false);

//   const toggleMenu = () => {
//     setIsActive(!isActive);
//   };
//   return (
//     <>
//       <div data-aos="fade-down" className='menu-container'>
//         <div className='menu-logo'>
//           <p>LOGO</p> 
//         </div>
//         {/* <div className={`menu-links ${isActive ? 'active' : ''}`}>
//           <ul>
//             <li>HOME</li>
//             <li>ABOUT</li>
//             <li>CONTACT</li>
//           </ul>
//         </div> */}
//       <div>
//       <div className={`logo ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
//       <div className="bar"></div>
//       <div className="bar"></div>
//       <div className="bar"></div>
//       </div>
//       </div> 
//       </div>
//       <div className={`menu-links ${isActive ? 'active' : ''}`}>
//           <ul>
//             <li>HOME</li>
//             <li>ABOUT</li>
//             <li>PROJECTS</li>
//             <li>CONTACT</li>
//           </ul>
//         </div>
//       {/* <div className="parallax-container" onMouseMove={handleMouseMove}>
//         <div className="parallax-container-img img" style={{ transform: `translate(${parallaxTransform.x}%, ${parallaxTransform.y}%)`, transition: "transform 0.7s ease-out" }}>
//           <img src={parallax} alt="" />  
//         </div>
//       </div> */}
     
//       {/* <div className="parallax-container" onMouseMove={handleMouseMove}>
//       <div className="parallax-container-img img" style={{ transform: `translate(${parallaxTransform.x}%, ${parallaxTransform.y}%)`, transition: "transform 0.7s ease-out" }}>
      
//         <div className="wrapper">
//     <h1 className="glitch"> FRONT END</h1>
//     </div>
//   </div>
// </div> */}
// <div className='description-container'>
//   <div className='description-content'>
//     <h5>HELLO, I&apos;M BRIAN <br /> FRONT END DEVELOPER</h5>
//   </div>
  
// </div>
//     <div data-aos="fade-right" className='social-container'>
//       <div className='social-icon'>
//         <img src={linkedin} alt='Linkedin'/>
//       </div>
//       <div className='social-icon'>
//         <img src={github} alt='Github'/>
//       </div>
//     </div>
//     {/* <div className="parallax-container">
//       <img className="parallax-image" src={parallax} alt="Parallax Image" />
//     </div> */}
//     <div className='about-container section'>
//       <p>About section</p>
//     </div>
//     <div className='projects-container section'>
//       <p>Porjects section</p>
//     </div>
//     <div className='education-container section'>
//       <p>Education section</p>
//     </div>
//     </>
//   );
// }

// export default Home;
import { useState, useEffect } from 'react';
import './App.css';
import linkedin from "./assets/linkedin.svg";
import github from "./assets/github.svg";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
// import parallax from "./assets/headphones.png";

const Home = () => {

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
    <div className='background-img'></div>
      <div data-aos="fade-down" className='menu-container'>
        <div className='menu-logo'>
          <p>LOGO</p> 
        </div>
        <div>
          <div className={`logo ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div> 
      </div>
      <div className={`menu-links ${isActive ? 'active' : ''}`}>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className='description-container'>
        <div className='description-content'>
          <spa>HELLO, I&apos;M BRIAN <br /> FRONT END DEVELOPER</spa>
        </div>
        {/* <div className='circle parallax-image'>
          
        </div> */}
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

      <div className='about-container section'>
        <p>About section</p>
      </div>
      <div className='projects-container section'>
        <p>Projects section</p>
      </div>
      <div className='education-container section'>
        <p>Education section</p>
      </div>
    </>
  );
}

export default Home;
