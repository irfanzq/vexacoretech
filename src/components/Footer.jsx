const instagramImages = [
  '/images/instagram-image/insta-img1.jpg',
  '/images/instagram-image/insta-img2.jpg',
  '/images/instagram-image/insta-img3.jpg',
  '/images/instagram-image/insta-img4.jpg',
  '/images/instagram-image/insta-img5.jpg',
  '/images/instagram-image/insta-img6.jpg',
]

export default function Footer() {
  return (
    <div className="footer-area overflow-hidden" id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h3>Contact Info</h3>
              <ul className="footer-contact-info">
                <li>
                  <i className="flaticon-phone-call"></i>
                  <span>Mon to Fri : 10:00AM - 06:00PM</span>
                  <a href="tel:+18328706646">+1 832 870 6646</a>
                </li>
                <li>
                  <i className="flaticon-email"></i>
                  <span>Do You Have a Question?</span>
                  <a href="mailto:mailz4irfi@gmail.com">mailz4irfi@gmail.com</a>
                </li>
                <li>
                  <i className="flaticon-social-media"></i>
                  <span>Socials Network</span>
                  <ul className="social">
                    <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-footer-widget pl-5">
              <h3>Quick Links</h3>
              <ul className="footer-quick-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="https://vexacore.ai" target="_blank" rel="noopener noreferrer">VexaCore.ai</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-footer-widget pl-5">
              <h3>Instagram</h3>
              <ul className="footer-instagram-post">
                {instagramImages.map((src) => (
                  <li key={src}>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                      <img alt="" width="150" height="122" src={src} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6 col-md-6">
              <p>
                Copyright &copy; 2025 VexaCore Technologies LLC. All rights reserved.
              </p>
            </div>
            <div className="col-lg-6 col-sm-6 col-md-6">
              <ul>
                <li><a href="#contact">Terms &amp; Conditions</a></li>
                <li><a href="#contact">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
