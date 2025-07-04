import React, { useEffect, useRef, useState } from 'react';
import { GrGraphQl } from "react-icons/gr";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaLinkedin, FaExternalLinkAlt, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowUp, FaChevronDown, FaServer, FaDatabase } from "react-icons/fa";
import './App.css';

function HomePage() {
  const formRef = useRef(null);
  const [currentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Burger menu toggle
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li');

    const handleBurgerClick = () => {
      navLinks?.classList.toggle('active');
      burger?.classList.toggle('active');
    };

    const handleNavItemClick = () => {
      navLinks?.classList.remove('active');
      burger?.classList.remove('active');
    };

    burger?.addEventListener('click', handleBurgerClick);
    navLinksItems.forEach(item => {
      item.addEventListener('click', handleNavItemClick);
    });

    // Scroll effects
    const header = document.querySelector('header');
    const handleScroll = () => {
      header?.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    const handleBackToTopScroll = () => {
      backToTop?.classList.toggle('active', window.scrollY > 300);
    };
    window.addEventListener('scroll', handleBackToTopScroll);

    const handleBackToTopClick = (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    backToTop?.addEventListener('click', handleBackToTopClick);

    // Smooth scrolling for anchor links
    const handleAnchorClick = function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth',
        });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    // Typing effect
    const jobTitles = [
      'Software Developer',
      'Full Stack Web Developer',
      'Web Designer',
    ];
    const jobTitleElement = document.getElementById('job-title');
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;
    let typingTimeout;

    function typeWriter() {
      if (!jobTitleElement) return;

      const currentTitle = jobTitles[titleIndex];

      if (isDeleting) {
        jobTitleElement.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        jobTitleElement.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 150;
      }

      if (!isDeleting && charIndex === currentTitle.length) {
        typingSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % jobTitles.length;
        typingSpeed = 500;
      }

      typingTimeout = setTimeout(typeWriter, typingSpeed);
    }

    typingTimeout = setTimeout(typeWriter, 1000);

    // Cleanup function
    return () => {
      burger?.removeEventListener('click', handleBurgerClick);
      navLinksItems.forEach(item => {
        item.removeEventListener('click', handleNavItemClick);
      });
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleBackToTopScroll);
      backToTop?.removeEventListener('click', handleBackToTopClick);
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
      clearTimeout(typingTimeout);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbz5k8ShLQSsTTCBpPoNX3ceUqLHpZyN29s_pU3zOVWahCAJRADrOCNgJ-epjajbk2Il/exec';

    fetch(scriptURL, {
      method: 'POST',
      body: formData
    })
      .then(response => {
        if (response.ok) {
          alert('Thank you for your message! I will get back to you soon.');
          form.reset();
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .catch(error => {
        console.error('Error!', error.message);
        alert('There was an error submitting your message. Please try again.');
      });
  };

  const projects = [
    {
      title: "CropHawk",
      desc: "CropHawk aims to enhance agricultural productivity by providing data driven insights, enabling better decision making for sustainable farming.",
      link: "https://crophawk-app.vercel.app/",
      repo: "https://github.com/yatharth-2906/crophawk",
      image: "crophawk-api.png"
    },
    {
      title: "LinkNest",
      desc: "Designed for social media managers and content creators, LinkNest provides a centralized hub to showcase all important links with a single shareable URL.",
      link: "https://linknest-frontend.vercel.app/",
      repo: "https://github.com/yatharth-2906/linknest",
      image: "linknest-1.png"
    },
    {
      title: "Portfolio Website",
      desc: "Showcasing my skills and projects, this portfolio highlights my development journey and my real world projects developed using the MERN Stack.",
      link: "https://yatharth2906.vercel.app/",
      repo: "https://github.com/yatharth-2906/portfolio",
      image: "portfolio.png"
    }
  ];

  return (
    <>
      <header>
        <nav>
          <div className="logo">Portfolio</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </header>

      <section id="home" className="landing">
        <div className="landing-content">
          <h1>Hi, I'm <span className="highlight">Yatharth</span></h1>
          <h2 id="job-title"></h2>
          <p className="para-center">
            I build and deploy Full Stack MERN Applications and have hands on experience working on real world projects. I have also integrated machine learning services into several applications to deliver intelligent and data driven solutions. Beyond coding, I'm passionate about traveling and enjoy engaging in discussions on space exploration and quantum computing.
          </p>
          <a href="#projects" className="btn">View My Work</a>
        </div>
        <div className="scroll-down">
          <a href="#about"><FaChevronDown /></a>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About <span className="highlight">Me</span></h2>
          <div className="about-content">
            <div className="about-img">
              <img className="profile-img" src="yatharth.jpg" alt="Profile" />
            </div>
            <div className="about-text">
              <p>
                I am a Software Engineer with a strong specialization in Full Stack MERN (MongoDB, Express.js, React.js and Node.js) development. My core interest lies in designing and developing applications that are not only aesthetically pleasing but also deliver high performance and seamless user experiences across devices. I am proficient in buiding user friendly and responsive interfaces that prioritize both usability and accessibility. My objective is to build scalable and engaging software solutions that not only solve the real world problems, but also deliver value to the users.
              </p>
              <div className="about-btns">
                <a href="https://resume-craft-pro.vercel.app/file/a8f52acd9af740c7bccd2133/resume1" target='_blank' className="btn">Download CV</a>
                <a href="#contact" className="btn btn-secondary">Contact Me</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">My <span className="highlight">Skills</span></h2>
          <div className="skills-container">
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul className="skills-list">
                <li><FaHtml5 /> HTML</li>
                <li><FaCss3Alt /> CSS</li>
                <li><FaJs /> JavaScript</li>
                <li><FaReact /> React.js</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <ul className="skills-list">
                <li><FaNodeJs /> Node.js</li>
                <li><FaServer /> Express.js</li>
                <li><FaDatabase /> MongoDB</li>
                <li><GrGraphQl style={{ fontSize: '1.2rem' }} /> GraphQL</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">My <span className="highlight">Projects</span></h2>
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <div className="project-card" key={idx}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="project-links">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                    </a>
                    <a href={project.repo} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contact <span className="highlight">Me</span></h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p>Feel free to reach out for collaborations or just a friendly hello</p>
              <div className="contact-details">
                <div className="contact-item"><i className="fas fa-envelope"></i><span>yatharth2906@gmail.com</span></div>
                <div className="contact-item"><i className="fas fa-phone"></i><span>+91 9305501354</span></div>
                <div className="contact-item"><i className="fab fa-github"></i><a href="https://github.com/yatharth-2906" target="_blank" rel="noopener noreferrer"><span>GitHub</span></a></div>
                <div className="contact-item"><i className="fab fa-linkedin"></i><a href="https://www.linkedin.com/in/yatharth2906" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span></a></div>
                <div className="contact-item"><i className="fas fa-map-marker-alt"></i><span>Ghaziabad, India</span></div>
              </div>
            </div>
            <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="user-name"
                  name="Name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="user-email"
                  name="Email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="user-subject"
                  name="Subject"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group">
                <textarea
                  id="user-msg"
                  name="Message"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; <span>{currentYear}</span> Yatharth. All rights reserved.</p>
          <a href="#home" className="back-to-top"><FaArrowUp /></a>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
