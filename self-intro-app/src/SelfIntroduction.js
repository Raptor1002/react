import React from 'react';
import './SelfIntroduction.css';

const SelfIntroduction = () => {
  return (
    <div className="card-container">
      <div className="profile-card">
     
        <div className="card-header">
          <div className="profile-avatar">
            <h2>MR</h2> 
          </div>
          <h1 className="name">Mohan Raj</h1>
          <h3 className="role">Frontend Developer</h3>
        </div>

        <div className="card-body">
          <div className="section">
            <h4> Education</h4>
            <p>B.E Eectronics and Communication Engineering- Excel University (2016 - 2020)</p>
          </div>

          <div className="section">
            <h4>Skills</h4>
            <div className="skills-tags">
              <span>React.js</span>
              <span>JavaScript</span>
              <span>HTML & CSS</span>
              <span>Git</span>
              <span>UI/Design</span>
            </div>
          </div>

          <div className="section">
            <h4> Experience</h4>
            <p><strong>Web Development Trainee</strong> at Besant Tech (6 Months)</p>
            <p className="sub-text">Developed responsive web components and assisted in building UI layouts.</p>
          </div>

          <div className="section">
            <h4> Hobbies & Interests</h4>
            <p>Open Source Contributing, Reading Tech Blogs, Photography, Playing Chess.</p>
          </div>

          <div className="section highlight">
            <h4> Career Goal</h4>
            <p>To become a proficient Full-Stack Developer and build scalable, user-centric applications that solve real-world problems.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfIntroduction;