
import { useState } from 'react';
import './App.css';
// import parallax from "./assets/3600_2_06 (1).svg";

const Home = () => {
  // const [parallaxTransform, setParallaxTransform] = useState({ x: 0, y: 0 });
  // const handleMouseMove = (e) => {
  //   const x = e.clientX / window.innerWidth;
  //   const y = e.clientY / window.innerHeight;
  //   setParallaxTransform({ x: x * 20, y: y * 100 });
  // };

  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className='menu-container'>
        <div className='menu-logo'>
          <p>LOGO</p> 
        </div>
        {/* <div className={`menu-links ${isActive ? 'active' : ''}`}>
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </div> */}
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
            <li>CONTACT</li>
          </ul>
        </div>
      {/* <div className="parallax-container" onMouseMove={handleMouseMove}>
        <div className="parallax-container-img img" style={{ transform: `translate(${parallaxTransform.x}%, ${parallaxTransform.y}%)`, transition: "transform 0.7s ease-out" }}>
          <img src={parallax} alt="" />  
        </div>
      </div> */}
     
      {/* <div className="parallax-container" onMouseMove={handleMouseMove}>
      <div className="parallax-container-img img" style={{ transform: `translate(${parallaxTransform.x}%, ${parallaxTransform.y}%)`, transition: "transform 0.7s ease-out" }}>
      
        <div className="wrapper">
    <h1 className="glitch"> FRONT END</h1>
    </div>
  </div>
</div> */}
<div className='social-container'>
  
</div>
    </>
  );
}

export default Home;
