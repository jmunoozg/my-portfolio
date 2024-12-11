import React, { useEffect, useState} from 'react';
import './index.css';
import cv1 from './images/cv1.jpg';
import logo from './images/logo-personal.png';
import imgaboutme from './images/imgaboutme.jpg';


function Portfolio() {
  return (
    <div>
      <nav>
        <div id="div1">
          <a href="#skills">Skills</a>
          <a href="#about">About me</a>
        </div>
        <div id="logo">
          <img src={logo} alt="Logo - JM" />
        </div>
        <div id="div2">
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <ProfileSection />
      <Keywords />
      <Aboutme />
      <Experience />
      <Contact />
    </div>
  );
}

function ProfileSection() {
  return (
    <section id="profile-section" className="common-background">
      <div id="profile-container">
        <h2 className="nombre">Jaime</h2>
        <ProfilePicture image={cv1} />
        <h2 className="apellido">Muñoz</h2>
      </div>
      <Logo image={logo} />
      <TextSection />
    </section>
  );
}


function ProfilePicture({ image }) {
  return (
    <div id="foto">
      <img src={image} alt="Profile" />
    </div>
  );
}
function Logo ({image}) {
  return(
    <div id="logo">
    </div>
  )
}

function NameDisplay({ firstName, lastName }) {
  return (
    <div id="name-display">
      <h2 className="nombre">{firstName}</h2>
      <h2 className="apellido">{lastName}</h2>
    </div>
  );
}

function TextSection() {
  return (
    <div className='texto1'>
      <h2>Creative<br /> Developer</h2>
      <h3>Based in Madrid, Spain.</h3>
    </div>
  );
}

function Keywords() {
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.1 }
      );
  
      const elements = document.querySelectorAll('.fade-up');
      elements.forEach((el) => observer.observe(el));
  
      return () => observer.disconnect();
    }, []);
  return (
    <section id="skills" className="different-background">
    <div className='fade-up keywordfrontend'>
        <h2>Front-end Web Developer</h2>
    </div>
    <div className='fade-up keywordseo'>
      <h2>SEO & SEM</h2>
    </div>
    <div className='fade-up keywordmarketing'>
      <h2>Digital Marketing</h2>
    </div>
    <div className='fade-up detail'>
      <h2>Detail</h2>
    </div>
    <div className="fade-up creativity">
      <h2>Creativity</h2>
    </div>
    <div className="fade-up bar">
      <hr></hr>
    </div>
    <div className="fade-up and">
      <h2>&</h2>
    </div>
    </section>
  );
}
function Aboutme(){
return(

  <section id="about" className='thirdbackground'>
    <div className="fade-up aboutmetitle">
      <h2>J.M.</h2>
    </div>
    <div className="fade-up fotoaboutme">
      <img src={imgaboutme} alt='foto-sobre-mi'></img>
    </div>
    <div className="fade-up introduccion">
      <h3>Hi,</h3>
    </div>
    <div className="fade-up textoaboutme">
      <p>I’m Jaime — a Full-Stack Web Developer 
        with a background in marketing and advertising.
         I’m passionate about creating intuitive, high-performance websites 
         and apps using modern technologies like JavaScript, React, and Node.js. 
         My experience in SEO and digital strategies allows me to design solutions
          that not only work but also drive results. I’m eager to contribute to 
          impactful projects and help businesses grow through thoughtful, 
          user-centered development.</p>
    </div>
    <div className="fade-up technologies">
      <h4>Here are some technologies I have been working with:</h4>
      <div className="fade-up technologies-grid">
        <div className="fade-up tech-item">HTML5</div>
        <div className="fade-up tech-item">Node.js</div>
        <div className="fade-up tech-item">CSS3</div>
        <div className="fade-up tech-item">Git & GitHub</div>
        <div className="fade-up tech-item">JavaScript (ES6+)</div>
        <div className="fade-up tech-item">Express.js</div>
        <div className="fade-up tech-item">React.js</div>
        <div className="fade-up tech-item">Webpack</div>
        <div className="fade-up tech-item">TypeScript</div>
      </div>
    </div>
  </section>
  
)
}
function Experience() {
  return (
    <section id='experience' className='fourth-background'>
      <div className="experience-title">
        <h2>Experieeeence</h2>
      </div>
      <div id="experience-info">
          <div className="expinf1">
            <h3>Advanced Diploma in Marketing and Advertising</h3>
            <p>IMF Business School | 2021 - 2023</p>
          </div>
          <div className="expinf2">
            <h3>SEO and SEM Intern</h3>
            <p>Rage Pank | 2023 (4 months)</p>
          </div>
          <div className="expinf3">
            <h3>German Language Courses</h3>
            <p>Goethe-Institut, Freiburg (3 months, 2024)</p>
          </div>
          <div className="expinf4">
            <h3>Web Development Full Stack Course</h3>
            <p>IBM | 2023 - Present</p>
          </div>
        </div>
      <div className="experience-path">
        <svg className="path-line" viewBox="0 0 3000 600" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,300 Q500,10 1000,300 T2000,300 T3000,300"
            stroke="#d3eaf2"
            strokeWidth="3"
            strokeDasharray="20"
            fill="none"
          />
          </svg>
          <div id="marks">
          <div className="mark-1">X</div>
          <div className="mark-2">X</div>
          <div className="mark-3">X</div>
          <div className="mark-4">X</div>
        </div>
      </div>
    </section>
  );
}
/*Contact Section*/
function Contact() {
  return(
    <section id="contact" className='contact-section'>
      <h2>
      Bring your <span class="highlight">ideas</span> to life. <br />
      Let’s <span class="highlight">connect</span> and make it happen!
      </h2>
      <p>
        <a href="mailto:jaime.munozgab@gmail.com" class="email">jaime.munozgab@gmail.com</a>
      </p>
      <p class="action">
        <span class="arrow">→</span> Reach out for <span class="highlight">collaborations</span>, <br />
        freelance projects, or just to brainstorm ideas.
      </p>
      <div class="social-links">
        <a href="www.linkedin.com/in/jaime-muñoz-gabaldón" target='_blank' rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com" target="_blank">GitHub</a>
        <a href="https://twitter.com" target="_blank">Instagram</a>
      </div>
    </section>
  )
}



export default Portfolio;