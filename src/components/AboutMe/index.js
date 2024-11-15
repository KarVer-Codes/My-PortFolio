import React from 'react';
import './index.css';

const AboutMe = () => {
  return (
      <div id="aboutsection" className='main3'>
        <div className="twocards">
            <div className="col-12 col-lg-8 p-5 text-center" style={{order: 1}}>
                <h1 className="nametxt mt-3">About Me</h1>
                <p className="aboutmedescription mt-3">
                I'm a seasoned Full Stack Developer with extensive experience in both front-end and back-end development. I specialize in creating dynamic web applications using technologies like React, Node.js, and Python. My strong foundation in programming languages enables me to translate complex ideas into elegant, user-friendly solutions.
                </p>
                <p className="aboutmedescription">
                With a passion for problem-solving, I strive to stay updated with the latest industry trends and technologies. I believe in writing clean, maintainable code and enjoy collaborating with teams to deliver high-quality products. When I'm not coding, you can find me exploring new tech or contributing to open-source projects.
                </p>
                <p className="quote mt-5">
                "The most expensive thing in the world is trust; cheap people can't afford it."
                </p>
            </div>
            <div className="col-12 col-lg-4 text-center" style={{order: 2}}>
                <img src="https://res.cloudinary.com/dhahendfa/image/upload/v1713028990/IMG_20240413_224515_pz0yep.jpg"
                className="image-size2"
                alt='aboutme' />
            </div>
        </div>        
      </div>
  )
}

export default AboutMe;
