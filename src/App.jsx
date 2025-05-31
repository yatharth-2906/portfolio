import { useEffect } from 'react';
import { GrGraphQl } from "react-icons/gr";
import './App.css';

function App() {
  useEffect(() => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li');

    if (burger && navLinks) {
      burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
      });

      navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
          navLinks.classList.remove('active');
          burger.classList.remove('active');
        });
      });
    }

    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
      header?.classList.toggle('scrolled', window.scrollY > 50);
    });

    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
      backToTop?.classList.toggle('active', window.scrollY > 300);
    });

    backToTop?.addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth',
          });
        }
      });
    });

    const form = document.querySelector('.contact-form');
    form?.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for your message! I will get back to you soon.');
      this.reset();
    });

    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

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

    function typeWriter() {
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

      setTimeout(typeWriter, typingSpeed);
    }

    setTimeout(typeWriter, 1000);
  }, []);

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
            I build and deploy Full Stack MERN Applications, with experience of working on
            real world projects. I have also integrated machine learning services into these
            applications to deliver intelligent and data driven solutions. Beyond coding, I am
            passionate about travel and discussions on space exploration & quantum computing.
          </p>
          <a href="#projects" className="btn">View My Work</a>
        </div>
        <div className="scroll-down">
          <a href="#about"><i className="fas fa-chevron-down"></i></a>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About <span className="highlight">Me</span></h2>
          <div className="about-content">
            <div className="about-img">
              <img className="profile-img" src="yatharth_img.jpg" alt="Profile" />
            </div>
            <div className="about-text">
              <p>
                I am a passionate Software Engineer specializing in Full Stack MERN Technology.
                I enjoy building user friendly and responsive web applications that not only look great
                but also provide seamless and intuitive user experiences. My goal is to combine creativity with
                functionality to build web applications that engage and delight users.
              </p>
              <div className="about-btns">
                <a href="#" className="btn">Download CV</a>
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
                <li><i className="fab fa-html5"></i> HTML</li>
                <li><i className="fab fa-css3-alt"></i> CSS</li>
                <li><i className="fab fa-js"></i> JavaScript</li>
                <li><i className="fab fa-react"></i> React.js</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <ul className="skills-list">
                <li><i className="fab fa-node-js"></i> Node.js</li>
                <li><i className="fas fa-server"></i> Express.js</li>
                <li><i className="fas fa-database"></i> MongoDB</li>
                <li>
                  <GrGraphQl
                    style={{
                      fontSize: '1.2rem'
                    }} /> GraphQL
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">My <span className="highlight">Projects</span></h2>
          <div className="projects-grid">
            {[
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
                link: "https://yatharth2906-portfolio.vercel.app/",
                repo: "https://github.com/yatharth-2906/portfolio",
                image: "portfolio.png"
              }
            ].map((project, idx) => (
              <div className="project-card" key={idx}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="project-links">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a href={project.repo} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
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
            <form className="contact-form">
              <div className="form-group"><input type="text" placeholder="Your Name" required /></div>
              <div className="form-group"><input type="email" placeholder="Your Email" required /></div>
              <div className="form-group"><input type="text" placeholder="Subject" /></div>
              <div className="form-group"><textarea placeholder="Your Message" required></textarea></div>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; <span id="year"></span> Yatharth. All rights reserved.</p>
          <a href="#home" className="back-to-top"><i className="fas fa-arrow-up"></i></a>
        </div>
      </footer>
    </>
  );
}

export default App;