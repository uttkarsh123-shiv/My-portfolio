import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState, useRef } from "react";
import Border from "./Border";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const x = gsap.timeline({
        scrollTrigger: {
          trigger: ".experience",
          start: "top 60%",
          end: "50% 50%",
          scrub: true,
          once: true,
        },
      });
      x.from(".text2", {
        y: 100,
        ease: "power4.out",
        duration: 4,
      });
      x.from(".right-elem p", {
        y: 130,
        ease: "power4.out",
        duration: 2,
        stagger: 0.3,
        once: true,
      });
    });

    return () => ctx.revert();
  }, []);

  const skills = [
    { 
      name: "Web dev", 
      about: "Creating functional and responsive websites with modern UI/UX principles and scalable architecture." 
    },
    { 
      name: "Core web vitals",
      about: "Optimizing performance, accessibility, and SEO to enhance user experience and improve search rankings."
    },
    { 
      name: "DBMS", 
      about: "Designing and managing structured databases with efficient indexing, normalization, and secure data handling." 
    },
    { 
      name: "Web security",
      about: "Implementing secure coding practices, protection measures, and encryption to prevent cyber threats and attacks."
    },
    { 
      name: "Testing",
      about: "Ensuring software quality through various testing methodologies, including unit, integration, and automated testing." 
    },
  ];

  const hoverBoxRefs = useRef([]);

  const handleMouseEnter = (index) => {
    gsap.to(hoverBoxRefs.current[index], {
      height: "100%",
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(hoverBoxRefs.current[index], {
      height: "0%",
      duration: 0.4,
      ease: "power3.out",
    });
  };

  return (
    <div className="experience">
      <div className="heading2">
        <div className="singleLine2">
          <div className="text2"><p>Core Competencies</p></div>
        </div>
        <Border
          style={{
            position: "relative",
            bottom: "-3vh",
            width: 0,
            height: "0.5px",
            background: "#d1cfcf",
          }}
        />
      </div>

      <div className="content">
        <div className="right">
          {skills.map((item, index) => (
            <div
              key={index}
              className="right-elem"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div 
                className="hover-box" 
                ref={(el) => (hoverBoxRefs.current[index] = el)}
              ></div>
              <p>{item.name}</p>
              <p>{item.about}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
