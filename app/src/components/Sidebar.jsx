const instagramImages = [
  '/images/blog-image/blog-image1.jpg',
  '/images/blog-image/blog-image2.jpg',
  '/images/blog-image/blog-image3.jpg',
  '/images/blog-image/blog-image4.jpg',
  '/images/blog-image/blog-image5.jpg',
  '/images/blog-image/blog-image6.jpg',
  '/images/blog-image/blog-image7.jpg',
  '/images/blog-image/blog-image8.jpg',
]

export default function Sidebar({ open, onClose }) {
  return (
    <div className={`sidebar-modal ${open ? 'active' : ''}`}>
      <div className="sidebar-modal-inner">
        <div className="sidebar-about-area">
          <div className="title">
            <h2>About Us</h2>
            <p>
              VexaCore Technologies LLC builds AI and cloud products for businesses.
              We believe practical technology should solve real problems — with clarity,
              support, and products teams can actually use.
            </p>
          </div>
        </div>
        <div className="sidebar-instagram-feed">
          <h2>Instagram</h2>
          <ul>
            {instagramImages.map((src) => (
              <li key={src}>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <img alt="" width="860" height="700" src={src} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar-contact-area">
          <div className="contact-info">
            <div className="contact-info-content">
              <h2>
                <span className="main-color">+1 832 870 6646</span>
                <span className="or">OR</span>
                <span>
                  <a href="mailto:mailz4irfi@gmail.com">mailz4irfi@gmail.com</a>
                </span>
              </h2>
              <ul className="social">
                <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                <li><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
                <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <span className="close-btn sidebar-modal-close-btn" onClick={onClose} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onClose()}>
          <i className="flaticon-close"></i>
        </span>
      </div>
    </div>
  )
}
