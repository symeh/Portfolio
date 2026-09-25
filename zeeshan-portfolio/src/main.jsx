import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Mail,
  Code2,
  Layers3,
  ExternalLink,
  Sparkles,
  MapPin,
  Menu,
  X,
  Trophy,
  BriefcaseBusiness,
  GraduationCap
} from 'lucide-react';
import './styles.css';

const GithubIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.35-3.88-1.35-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.21-1.5 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.08.78 2.18v3.23c0 .31.21.67.8.56A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const socials = {
  github: 'https://github.com/symeh',
  leetcode: 'https://leetcode.com/u/syd2489',
  email: 'mailto:syedzeeshan198237@gmail.com'
};

const experience = [
  {
    period: 'Sep 2025 — Present',
    role: 'Software Trainee',
    company: 'Intelizign Lifecycle Services',
    location: 'Hyderabad, Telangana · On-site',
    current: true,
    desc: 'Working on software engineering and Polarion-focused development in an enterprise product lifecycle environment.'
  },
  {
    period: 'Aug 2024 — Sep 2025',
    role: 'Polarion ALM Developer',
    company: 'Labyrinth Global Solutions',
    location: 'Hyderabad, Telangana · On-site',
    desc: 'Developed Polarion ALM customizations, reports, workflows, templates, scripts and integrations for engineering and regulated development use cases.'
  },
  {
    period: 'Jun 2024 — Aug 2024',
    role: 'Polarion ALM Developer Intern',
    company: 'Labyrinth Global Solutions',
    location: 'India',
    desc: 'Started with Polarion configuration and front-end customization while building practical experience with JavaScript, HTML/CSS and ALM workflows.'
  }
];

const projects = [
  {
    num: '01',
    title: 'E-Waste Bridge',
    type: 'Current build · Full-stack platform',
    desc: 'A practical platform for connecting e-waste sources, material lots and collection workflows. The interface is designed to stay simple, responsive and usable even in lower-bandwidth environments.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Drizzle'],
    accent: 'lime'
  },
  {
    num: '02',
    title: 'PM Internship Recommendation Engine',
    type: 'SIH · Problem Statement 25034',
    desc: 'An AI-assisted recommendation engine for the PM Internship Scheme. It matches student preferences such as education, skills, sector, location, duration and language with relevant internship opportunities.',
    tags: ['AI', 'React', 'Data', 'Recommendation'],
    accent: 'violet'
  },
  {
    num: '03',
    title: 'Polarion Engineering Toolkit',
    type: 'Professional · Enterprise engineering',
    desc: 'A collection of Polarion customizations, reports, workflows, templates and integrations using REST/Open API, JavaScript, Velocity and Java for engineering and regulated development environments.',
    tags: ['Polarion', 'Java', 'Velocity', 'REST API'],
    accent: 'cyan'
  },
  {
    num: '04',
    title: 'Spring Boot Learning API',
    type: 'Backend · Java practice',
    desc: 'A backend project used to strengthen Core Java, Spring Boot, JPA and REST API fundamentals through entities, repositories, services and CRUD endpoints.',
    tags: ['Java', 'Spring Boot', 'JPA', 'REST'],
    accent: 'orange'
  }
];

const skills = [
  'Java',
  'JavaScript',
  'React',
  'Node.js',
  'Spring Boot',
  'Python',
  'SQL',
  'PostgreSQL',
  'Git',
  'REST APIs',
  'Polarion ALM',
  'Apache Velocity',
  'HTML/CSS',
  'DSA'
];

function App() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  }, [dark]);

  useEffect(() => {
    const on = () => {
      const ids = ['home', 'work', 'experience', 'about', 'contact'];
      let current = 'home';

      ids.forEach((id) => {
        const el = document.getElementById(id);

        if (el && window.scrollY >= el.offsetTop - 180) {
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener('scroll', on);
    on();

    return () => window.removeEventListener('scroll', on);
  }, []);

  const go = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth' });

    setMenu(false);
  };

  return (
    <div className="app">
      <div className="noise" />
      <div className="grid" />

      <nav className="nav">
        <button className="brand" onClick={() => go('home')}>
          <span className="brand-mark">SZ</span>

          <span>
            ZEE<span className="dot">.</span>SHAN
          </span>
        </button>

        <div className="navlinks">
          {['home', 'work', 'experience', 'about', 'contact'].map((x) => (
            <button
              className={active === x ? 'active' : ''}
              onClick={() => go(x)}
              key={x}
            >
              {x}
            </button>
          ))}
        </div>

        <div className="nav-actions">
          <button
            className="theme"
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
          >
            {dark ? '☼' : '◐'}
          </button>

          <button
            className="menu"
            onClick={() => setMenu(!menu)}
            aria-label="Menu"
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {menu && (
        <div className="mobile-menu">
          {['home', 'work', 'experience', 'about', 'contact'].map((x) => (
            <button onClick={() => go(x)} key={x}>
              {x}
            </button>
          ))}
        </div>
      )}

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="pulse" />
              SOFTWARE ENGINEER
              <span>•</span>
              HYDERABAD, INDIA
            </div>

            <h1>
              I build systems
              <br />
              that <em>move ideas</em>
              <br />
              into reality.
            </h1>

            <p className="lead">
              Software Engineer focused on <b>Polarion ALM</b>, Java,
              full-stack development and practical products that solve real
              problems.
            </p>

            <div className="cta">
              <button className="primary" onClick={() => go('work')}>
                Explore my work
                <ArrowUpRight size={18} />
              </button>

              <a
                className="secondary"
                href={socials.github}
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon size={17} />
                GitHub
                <ExternalLink size={16} />
              </a>
            </div>

            <div className="hero-meta">
              <span>
                <MapPin size={15} />
                Hyderabad, India
              </span>

              <span>
                <Code2 size={15} />
                Java · React · Polarion
              </span>
            </div>
          </div>

          <div className="hero-art">
            <div className="orb orb1" />
            <div className="orb orb2" />

            <div className="terminal-card">
              <div className="term-top">
                <span />
                <span />
                <span />
                <small>zeeshan@dev ~</small>
              </div>

              <div className="code">
                <p>
                  <i>const</i> developer = {'{'}
                </p>

                <p className="indent">
                  name: <b>'Zeeshan'</b>,
                </p>

                <p className="indent">
                  focus: [<b>'Java'</b>, <b>'React'</b>],
                </p>

                <p className="indent">
                  domain: <b>'ALM'</b>,
                </p>

                <p className="indent">
                  status: <b className="green">'building'</b>
                </p>

                <p>{'}'};</p>
                <p className="cursor">▌</p>
              </div>
            </div>

            <div className="floating-chip chip1">
              <Sparkles size={14} />
              Builder mindset
            </div>

            <div className="floating-chip chip2">
              <span>01</span>
              Engineering
            </div>
          </div>
        </section>

        <section id="work" className="section work">
          <div className="section-head">
            <div>
              <span className="kicker">SELECTED WORK</span>
              <h2>Things I'm building.</h2>
            </div>

            <p>
              From enterprise engineering tools to student-focused platforms
              — I like building useful software, not just demos.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((p) => (
              <article
                className={'project ' + p.accent}
                key={p.num}
              >
                <div className="project-top">
                  <span>{p.num}</span>
                  <ArrowUpRight size={20} />
                </div>

                <div>
                  <span className="project-type">{p.type}</span>

                  <h3>{p.title}</h3>

                  <p>{p.desc}</p>
                </div>

                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section experience">
          <div className="section-head">
            <div>
              <span className="kicker">EXPERIENCE</span>

              <h2>
                Where I've been
                <br />
                building.
              </h2>
            </div>

            <p>
              My path has moved from Polarion development into broader
              software engineering, while continuing to work close to
              enterprise engineering systems.
            </p>
          </div>

          <div className="experience-list">
            {experience.map((item, i) => (
              <article
                className="experience-item"
                key={item.role + item.company}
              >
                <div className="experience-marker">
                  <span className={item.current ? 'live' : ''} />

                  {i < experience.length - 1 && <i />}
                </div>

                <div className="experience-main">
                  <div className="experience-top">
                    <span className="period">{item.period}</span>

                    {item.current && (
                      <span className="current-badge">
                        CURRENT
                      </span>
                    )}
                  </div>

                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>

                  <p className="location">{item.location}</p>

                  <p>{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section about">
          <div className="about-left">
            <span className="kicker">ABOUT</span>

            <h2>
              Curious by default.
              <br />
              <em>Practical by choice.</em>
            </h2>

            <p>
              I'm a Software Engineer working with Polarion ALM while
              pursuing my Computer Science degree. My work sits at the
              intersection of enterprise software, automation, APIs and
              modern web development.
            </p>

            <p>
              Outside professional work, I'm strengthening Java, DSA,
              Spring Boot and full-stack skills by turning ideas into
              working products.
            </p>

            <div className="social-row">
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon size={17} />
                GitHub
              </a>

              <a
                href={socials.leetcode}
                target="_blank"
                rel="noreferrer"
              >
                <Trophy size={17} />
                LeetCode
              </a>

              <a href={socials.email}>
                <Mail size={17} />
                Email
              </a>
            </div>
          </div>

          <div className="about-right">
            <div className="stats">
              <div>
                <strong>2+</strong>
                <span>Years building</span>
              </div>

              <div>
                <strong>14+</strong>
                <span>Core technologies</span>
              </div>

              <div>
                <strong>04</strong>
                <span>Featured projects</span>
              </div>
            </div>

            <div className="stack">
              <div className="stack-head">
                <Layers3 size={18} />
                CURRENT TOOLKIT
              </div>

              <div className="skill-list">
                {skills.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section timeline">
          <div className="timeline-card">
            <div className="timeline-title">
              <span className="kicker">CURRENT FOCUS</span>

              <h2>What I'm focused on.</h2>
            </div>

            <div className="focus-list">
              <div>
                <span>01</span>

                <div>
                  <b>Enterprise engineering</b>

                  <p>
                    Polarion configuration, customization, reporting,
                    workflows and integrations.
                  </p>
                </div>
              </div>

              <div>
                <span>02</span>

                <div>
                  <b>Full-stack development</b>

                  <p>
                    React + Node.js + PostgreSQL applications with clean
                    APIs and deployment-ready structure.
                  </p>
                </div>
              </div>

              <div>
                <span>03</span>

                <div>
                  <b>Computer Science fundamentals</b>

                  <p>
                    Deepening Java, DSA, backend architecture and
                    problem-solving through consistent practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-box">
            <div>
              <span className="kicker">LET'S CONNECT</span>

              <h2>
                Have an idea?
                <br />
                <em>Let's build it.</em>
              </h2>

              <p>
                Open to interesting engineering problems, collaborations,
                internships and opportunities where I can learn, contribute
                and ship.
              </p>
            </div>

            <div className="contact-actions">
              <a href={socials.email}>
                <Mail />
                Email me
                <ArrowUpRight />
              </a>

              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon size={20} />
                GitHub
                <ArrowUpRight />
              </a>

              <a
                href={socials.leetcode}
                target="_blank"
                rel="noreferrer"
              >
                <Trophy />
                LeetCode
                <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>
          © {new Date().getFullYear()} Syed Zeeshan Mehmood
        </span>

        <span>Designed & built with intent.</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);