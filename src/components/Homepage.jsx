import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
// import Marquee from "react-fast-marquee"

gsap.registerPlugin(useGSAP); 
const Homepage = () => {
    useGSAP(()=> {
      gsap.from(".items li", {
        duration: 0.2,
        opacity: 0,
        delay:0.1,
        y: -50,
        stagger: 0.05,
      })

      gsap.from(".logo li", {
        duration: 4,
        opacity: 0,
      })
    })
  return (
    <div className="first">
    <div className="nav">
      <div className="logo">
        <li>Ⓒ by Uttkarsh</li>
      </div>
      <div className="items">
        <ul>
          <li><a href="">Work</a></li>
          <li><a>About</a></li>
          <li ><a>Contact</a></li>
          <li><a href="">CV</a></li>
        </ul>
      </div>
    </div>

    <svg width="10" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0953 16.0918C13.6452 16.1311 14.1228 15.7155 14.1623 15.1636L14.8047 6.1694C14.8441 5.61748 14.4304 5.13822 13.8805 5.09894C13.3307 5.05967 12.853 5.47526 12.8136 6.02718L12.2425 14.022L4.27801 13.4531C3.72818 13.4138 3.25049 13.8294 3.21107 14.3813C3.17164 14.9333 3.58541 15.4125 4.13525 15.4518L13.0953 16.0918ZM0.245556 1.65636L12.4123 15.7488L13.9211 14.4361L1.75444 0.343636L0.245556 1.65636Z" fill="white"/>
</svg>

    <div className="head">
      <div className="head-content">
      <h1>Designer & Developer</h1> <br />
      {/* <h1>Ui/Ux designe</h1> */}
      </div>
    </div>
  </div>
  )
}

export default Homepage
