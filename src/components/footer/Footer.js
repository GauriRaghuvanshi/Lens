import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../../assets/nav_logo.webp';
const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <img src={logo} alt="LensCorp Logo" style={{ height: '60px' }} />
            <p>Tomorrow's Vision, Today!</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/solutions.lenscorp?mibextid=2JQ9oc" className="me-3 text-dark"><i className="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/lens_corporation/" className="me-3 text-dark"><i className="bi bi-instagram"></i></a>
              <a href="https://www.linkedin.com/company/lens-corporation/" className="me-3 text-dark"><i className="bi bi-linkedin"></i></a>
              <a className="me-3 text-dark"><i className="bi bi-slack"></i></a>
              <a href="https://x.com/i/flow/login?redirect_after_login=%2FLensCorporation" className="text-dark"><i className="bi bi-twitter"></i></a>
            </div>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="mb-4 font-weight-bold">Sitemap</h5>
            <p><a href="#" className="text-dark">MakeMyWeb</a></p>
            <p><a href="#" className="text-dark">Services</a></p>
            <p><a href="#" className="text-dark">Products</a></p>
            <p><a href="#" className="text-dark">Blogs</a></p>
            <p><a href="#" className="text-dark">Life at LENS</a></p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="mb-4 font-weight-bold">Connect</h5>
            <p>+1 517-9300-792</p>
            <p>+91 9990-736-796</p>
            <p>solutions@lenscorp.ai</p>
          </div>
        </div>

        <div className="row d-flex justify-content-center mt-4" style={{ backgroundColor: '#21214a', padding: '10px', margin: '0' }}>
          <div className="col-md-7 col-lg-8">
            <p className="text-center text-md-left" style={{ marginLeft: '20px', color: 'grey' }}>
            <span style={{ color: 'grey' }}> © 2023</span>
            <span style={{ color: 'white' }}>LENS, Inc.</span> 
            <span style={{ color: 'grey' }}> All rights reserved.</span>
            </p>
          </div>

          <div className="col-md-5 col-lg-4" style={{ backgroundColor: '#21214a', padding: '10px', margin: '0' }}>
            <div className="text-center text-md-right" style={{ marginRight: '100px' }}>
              <a href="#" className="text-white me-3">Code of conduct</a>
              <a href="#" className="text-white">Sustainability Goals</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;