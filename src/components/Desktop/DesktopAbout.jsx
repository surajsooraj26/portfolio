import { IoBookOutline } from "react-icons/io5";

import "./DesktopAbout.css";
function DesktopAbout() {
  return (
    <div className="home">
      <div className="section_2">
        <h1>About Me</h1>
        <p>
          I'm a passionate web developer with a focus on creating innovative and
          user-friendly applications. With a background in computer science and
          a love for problem-solving, I enjoy building solutions that make a
          difference. My expertise spans various technologies, and I'm always
          eager to learn and adapt to new challenges.
        </p>
        <h3>Education</h3>
        <div className="educations">
          <div className="education">
            <div className="edu1">
              <div className="icon">
                <IoBookOutline />
              </div>
              <div className="icon2">
                <div className="edu1l">&nbsp;</div>
                <div className="edu1r">&nbsp;</div>
              </div>
            </div>
            <div className="edu2">
              <p>Masters in Computer Science at University of Kerala</p>
              <p className="year">2023-2025</p>
            </div>
          </div>
          <div className="education">
            <div className="edu1">
              <div className="icon">
                <IoBookOutline />
              </div>
              <div className="icon2">
                <div className="edu1l">&nbsp;</div>
                <div className="edu1r">&nbsp;</div>
              </div>
            </div>
            <div className="edu2">
              <p>
                Bachelors in Computer Science at Sree Ayyappa College,
                Eramallikkara
              </p>
              <p className="year">2020-2023</p>
            </div>
          </div>
          <div className="education">
            <div className="edu1">
              <div className="icon">
                <IoBookOutline />
              </div>
            </div>
            <div className="edu2">
              <p>
                Computer Operator and Programming Assistant at Govt. ITI
                Chandhanathope
              </p>
              <p className="year">2018-2019</p>
            </div>
          </div>
        </div>
      </div>
      <div className="skills section_3">
        <h3>Skills</h3>
        <ul>
          <li>JavaScript</li>
          <li>Python</li>
          <li>HTML</li>
          <li>PHP</li>
          <li>Git</li>
          <li>React</li>
          <li>CSS</li>
          <li>Node.js</li>
        </ul>
      </div>
      <div className="interest">
        <h3>Interests</h3>
        <p>
          Outside of coding, I enjoy exploring new technologies, contributing to
          open-source projects, and keeping up with the latest industry trends.
          I’m also an avid reader who finds inspiration in books.{" "}
        </p>
        <p>
          In addition to my technical interests, I actively participate in
          library activities, where I contribute as an engaged member by helping
          organize and arrange resources effectively. I take pride in my ability
          to plan and structure programs, especially when it comes to arranging
          and managing events or tasks in an orderly way.
        </p>
      </div>
    </div>
  );
}
export default DesktopAbout;
