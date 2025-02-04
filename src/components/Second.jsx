import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Border from "./Border";
gsap.registerPlugin(ScrollTrigger);

const Text = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".heading .singleLine .text", {
      y: 100,
      ease: "power4.out",
      duration: 2,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".about-me",
        start: "top 50%",
        end: "50% 50%",
        scrub: true,
        once: true,
      },
    });
  });
  return (
    <>
      <div className="about-me">
        <div className="heading">
          <div className="singleLine">
            <div className="text">
              <p style={{fontWeight:"700"}}>This is me, Utkarsh singh
              </p>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="left">
            <p>A CREATIVE COLLECTIVE MADE TO UNLOCK YOUR BRAND’S POTENTIAL</p>
          </div>
          <div className="right">
            <div className="singleLine">
              <p>
                I&apos;m a passionate Computer Science and Engineering student
                at Mait College, with a strong interest in designing and
                development. enjoy transforming ideas into functional, user-
                friendly solutions and continuously strive to enhance my.
              </p>
            </div>
          </div>
        </div>
        <button
  className="resume"
  onClick={() => window.open("https://drive.google.com/file/d/1G8XmAmreJhqfdVNBblSePHZc3DOC2KFM/view?usp=drive_link", "_blank")}>
  <span>View my Resume</span>
</button>



        <Border
          style={{
            position: "relative",
            bottom: "-3vh",
            width: 0,
            height: "0.5px",
            background: "#d1cfcf",
          }}/>
      </div>
      =
    </>
  );
};

export default Text;
