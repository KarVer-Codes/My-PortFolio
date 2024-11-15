import React from 'react';
import './index.css';

const Certificates = () => {
  return (
    <div className='main5' id='certificatesSections'>
      <h1 className='nametxt text-center mt-5'>Certificates</h1>
      <div className='certificates-container mt-5'>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
          </ol>
          <div className="carousel-inner">
            {[
              "https://res.cloudinary.com/learning-platform/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fs3-ap-south-1.amazonaws.com%2Fnkb-backend-ccbp-media-static%2Fcertificates%2Fshare%2FPTPJBRUOZD.png",
              "https://res.cloudinary.com/learning-platform/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fs3-ap-south-1.amazonaws.com%2Fnkb-backend-ccbp-media-static%2Fcertificates%2Fshare%2FGWBEDQEIYE.png",
              "https://res.cloudinary.com/learning-platform/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fs3-ap-south-1.amazonaws.com%2Fnkb-backend-ccbp-media-static%2Fcertificates%2Fshare%2FOBNYVNKOCS.png",
              "https://res.cloudinary.com/learning-platform/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fs3-ap-south-1.amazonaws.com%2Fnkb-backend-ccbp-media-static%2Fcertificates%2Fshare%2FZCTVJRHWEK.png",
              "https://res.cloudinary.com/learning-platform/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fs3-ap-south-1.amazonaws.com%2Fnkb-backend-ccbp-media-static%2Fcertificates%2Fshare%2FUXFGIFEUTD.png",
              "https://res.cloudinary.com/learning-platform/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fs3-ap-south-1.amazonaws.com%2Fnkb-backend-ccbp-media-static%2Fcertificates%2Fshare%2FUWCOQWSFUN.png",
              "https://res.cloudinary.com/learning-platform/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fs3-ap-south-1.amazonaws.com%2Fnkb-backend-ccbp-media-static%2Fcertificates%2Fshare%2FQGBYRPELZD.png",
            ].map((src, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <img className="d-block w-100 certificate-image" src={src} alt={`Certificate ${index + 1}`} />
              </div>
            ))}
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
