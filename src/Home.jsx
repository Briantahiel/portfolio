
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
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
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
      {/* <div className='description-container'>
        <div className='description-content'>
          <span>BRIAN</span>
          <span>PROGRAMMER</span>
          <span>FRONT END DEVELOPER</span>
        </div>

      </div> */}
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
      <div className='main-container'>
      <div className='about-container section'>
      <div className='about-content'>
        <p>About section</p>
        <h4>Hello, I&apos;m Brian, a university-trained programming technician. With a curious and perfectionist nature, I am always eager to expand my knowledge. My passion for technology has motivated me to pursue various courses and engage in personal projects alongside my university studies. Now that I have successfully completed my academic journey, I am actively seeking an opportunity to contribute to the world of technology. If you have any potential opportunities available, please don&apos;t hesitate to contact me.</h4>
        </div>
        <div className='about-content'>
        <h4>Hello, I&apos;m Brian, a university-trained programming technician. With a curious and perfectionist nature, I am always eager to expand my knowledge. My passion for technology has motivated me to pursue various courses and engage in personal projects alongside my university studies. Now that I have successfully completed my academic journey, I am actively seeking an opportunity to contribute to the world of technology. If you have any potential opportunities available, please don&apos;t hesitate to contact me.</h4>
        </div>
      </div>
      <div className='projects-container section'>
        <p>Projects section</p>
        <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam expedita atque modi, distinctio excepturi accusamus consectetur temporibus labore sit voluptate nulla? Fugiat dolore possimus, molestias sapiente quae nam, fugit ducimus adipisci ipsam assumenda delectus autem aut impedit a corporis similique numquam maxime deleniti sed. At eveniet exercitationem animi placeat voluptas eius harum quia corporis. Repudiandae ducimus eveniet nam odit mollitia rem a, maxime consectetur hic laborum natus optio doloribus ipsum excepturi accusamus cum quidem laudantium sed facilis veritatis animi? Optio, necessitatibus! Explicabo voluptate sint exercitationem, optio molestiae est earum cum dicta expedita quo quaerat molestias quia incidunt ullam delectus! Molestiae?</h4>
      </div>
      <div className='education-container section'>
        <p>Education section</p>
        <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam expedita atque modi, distinctio excepturi accusamus consectetur temporibus labore sit voluptate nulla? Fugiat dolore possimus, molestias sapiente quae nam, fugit ducimus adipisci ipsam assumenda delectus autem aut impedit a corporis similique numquam maxime deleniti sed. At eveniet exercitationem animi placeat voluptas eius harum quia corporis. Repudiandae ducimus eveniet nam odit mollitia rem a, maxime consectetur hic laborum natus optio doloribus ipsum excepturi accusamus cum quidem laudantium sed facilis veritatis animi? Optio, necessitatibus! Explicabo voluptate sint exercitationem, optio molestiae est earum cum dicta expedita quo quaerat molestias quia incidunt ullam delectus! Molestiae?</h4>
      </div>
      </div>
    </>
  );
}

export default Home;
