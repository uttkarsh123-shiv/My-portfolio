import { useRef , useState} from "react";
import { gsap } from "gsap";
import Border from "./Border";

const Contact = () => {
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    const box = e.target;
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    const boxWidth = box.clientWidth;
    const boxHeight = box.clientHeight;

    const maxMove = 50;
    const newX = Math.max(-maxMove, Math.min(maxMove, x - boxWidth / 2));
    const newY = Math.max(-maxMove, Math.min(maxMove, y - boxHeight / 2));

    gsap.to(buttonRef.current, {
      x: newX,
      y: newY,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.4)",
    });
  };

    const [hovered, setHovered] = useState(false);
  
    const handleMouseEnter1 = () => {
      setHovered(true); 
    };
  
    const handleMouseLeave2 = () => {
      setHovered(false); 
    };

  return (
    <div className="contact-page">
      <div className="heading">
        <p>Stay in the loop.</p>
        <button
          ref={buttonRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          Fill Contact Form
        </button>
      </div>

      <Border
        style={{
          position: "relative",
          width: "90%",
          left: "5%",
          height: "0.8px",
          background: "gray",
        }}
      />

      <div className="main-page">
        <div className="contact-form">
          <div className="name">
            <p>Full Name</p>
            <input type="text" placeholder="John Doe" required />
          </div>
          <div className="email">
            <p>Email</p>
            <input type="email" placeholder="Johndoe@abc" required />
          </div>
          <div className="message">
            <p>Enter Message</p>
            <textarea placeholder="Your Message"></textarea>
          </div>
          <button
      className="submit">
     <p> View my Resume</p>
      <span
        onMouseEnter={handleMouseEnter1}
        onMouseLeave={handleMouseLeave2}
        className={hovered ? "hovered" : ""} // Add a class when hovered
      ></span>
    </button>
        </div>

        <div className="impo-links">
          <ul>
            Contact Ids
            <li>uttkarshsingh450@gmail.com</li>
            <li>+91-9582189958</li>
          </ul>

          <ul>
            Social Links
            <li>
              <a href="https://www.linkedin.com/in/uttkarsh-singh450/">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/uttkarsh123-shiv">Github</a>
            </li>
            <li>
              <a href="https://www.instagram.com/dilligaf_uf/">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
