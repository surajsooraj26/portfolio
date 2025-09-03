import "./MobileAbout.css";
function MobileAbout() {
  return (
    <div className="mobile-about">
      <h1>About</h1>
      <div className="mobile-intro">
        <p>
          I'm a passionate web developer with a focus on creating innovative and
          user-friendly applications. With a background in computer science and
          a love for problem-solving, I enjoy building solutions that make a
          difference. My expertise spans various technologies, and I'm always
          eager to learn and adapt to new challenges.
        </p>
      </div>
      <div className="mobile-profile">
        <img src="profile.jpg" loading="lazy" alt="Profile" />
        <h1>Suraj S</h1>
        <p>Web Developer</p>
      </div>
      <div className="mobile-educations">
        <h2>Education</h2>
        <div className="mobile-education">
          <p className="course">Masters in Computer Science</p>
          <p>University of Kerala</p>
          <p>2023-2025</p>
        </div>
        <div className="mobile-education">
          <p className="course">Bachelors in Computer Science</p>
          <p>Sree Ayyappa College, Eramallikkara</p>
          <p>2020-2023</p>
        </div>
        <div className="mobile-education">
          <p className="course">Computer Operating and Programming Assistant</p>
          <p>Govt. ITI Chandanathope</p>
          <p>2018-2019</p>
        </div>
      </div>
    </div>
  );
}
export default MobileAbout;
