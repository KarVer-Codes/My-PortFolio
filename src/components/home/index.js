import React, { useState } from "react";
import './index.css';

const Home = () => {
    const [state] = useState({
        id: 1,
        mypfpUrl: "https://res.cloudinary.com/dhahendfa/image/upload/v1711387026/i3opjgyritkoqeasjirw.png",
        myDescription: "As a Full Stack Developer, I create dynamic digital experiences that blend innovation and functionality. With expertise in both front-end and back-end technologies, I deliver robust web solutions tailored to user and business needs. Explore my portfolio to see my commitment to quality, creativity, and continuous improvement.",
        myName: "Karan Verma",
        myRole: "Full Stack Developer"
    });

    const { mypfpUrl, myName, myRole, myDescription } = state;

    return (
        <div className="main2 pt-5 pb-5">
            <div className="twocards pt-5 pb-5">
                <div className="col-12 col-lg-4 p-5">
                    <div className="pfp-container ml-auto mr-auto">
                        <img 
                            src={mypfpUrl}
                            alt="Profile-Picture"
                            className="w-100"
                        />
                    </div>
                </div>
                <div className="col-12 col-lg-8 p-5 pb-5">
                    <h1 className="introtxt">Hello, I am</h1>
                    <span className="nametxt">"{myName}"</span>
                    <h1 className="introtxt mt-1">
                        I'm a <span className="roletxt"> ({myRole})</span>
                    </h1>
                    <p className="description mt-5">{myDescription}</p>
                    <a 
                        href="https://pdf.ac/1KP6YF"
                        download="Karan_Verna_Resume.pdf"
                    >
                        <button className="resume-button mt-2">
                            Download Resume <i className="fa-solid fa-cloud-arrow-down"></i>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
