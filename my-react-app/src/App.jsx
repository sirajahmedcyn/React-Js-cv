import "./App.css";
import profileImg from "./profile.jpg"; // optional local image

function App() {
  return (
    <div className="container">
      <header>
        <div className="profile-photo">
          <img
            src={profileImg}
            alt="Siraj Ahmed Soomro"
            onError={(e) =>
              (e.target.src = "https://via.placeholder.com/150")
            }
          />
        </div>

        <h1>Siraj Ahmed Soomro</h1>

        <div className="contact-info">
          <p>
            <i className="fas fa-envelope"></i>
            <a href="mailto:sirajahmedsoomrocyn@yahoo.com">
              sirajahmedsoomrocyn@yahoo.com
            </a>
          </p>

          <p>
            <i className="fas fa-phone"></i>
            <a href="tel:+923703258220">+92 370 3258220</a>
          </p>

          <p>
            <i className="fab fa-github"></i>
            <a
              href="https://github.com/sirajahmedcyn"
              target="_blank"
              rel="noreferrer"
            >
              github.com/sirajahmedcyn
            </a>
          </p>
        </div>
      </header>

      <section>
        <h2>Professional Summary</h2>
        <p>
          Dedicated Web Developer and First Year student with a Secondary School
          Certificate (SSC). Currently expanding professional skills through an
          internship. Passionate about building visually appealing, responsive,
          and user-friendly websites.
        </p>
      </section>

      <section>
        <h2>Education</h2>

        <div className="education-item">
          <h3>Secondary School Certificate (SSC)</h3>
          <p>
            <strong>Institution:</strong> Govt Secondary Boys Higher School
            Qasimabad, Hyderabad
          </p>
          <p>
            <strong>Board:</strong> BIESH
          </p>
          <p>
            <strong>Duration:</strong> 2024 – 2025
          </p>
        </div>

        <div className="education-item">
          <h3>Web Development Certification</h3>
          <p>
            <strong>Institution:</strong> Nixor Tech Institution
          </p>
          <p>
            <strong>Duration:</strong> 2025 – 2026 (2 months)
          </p>
        </div>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>HTML5, CSS3, JavaScript</li>
          <li>Responsive Web Design</li>
          <li>Git & GitHub</li>
          <li>Basic SEO</li>
          <li>React JS (Beginner)</li>
          <li>Node JS (Beginner)</li>
          <li>MongoDB (Beginner)</li>
        </ul>
      </section>

      <section>
        <h2>Experience</h2>
        <ul>
          <li>
            <strong>Web Development Internship</strong>
            <br />
            Hands-on experience with responsive design, modern HTML, CSS, and
            collaborative development.
          </li>
        </ul>
      </section>

      <section>
        <h2>Languages</h2>
        <ul>
          <li>English</li>
          <li>Sindhi</li>
          <li>Urdu</li>
          <li>Saraiki</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
