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
    </div>
  );
}
export default DesktopAbout;
