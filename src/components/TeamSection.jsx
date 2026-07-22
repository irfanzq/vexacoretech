import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { ShapeDecorationsTeam } from './ShapeDecorations'
import 'swiper/css'
import 'swiper/css/navigation'

const team = [
  { image: '/images/team-image/team10.jpg', name: 'John Smith', role: 'CEO & Founder' },
  { image: '/images/team-image/team11.jpg', name: 'Lucy Eva', role: 'Backend Team Leader' },
  { image: '/images/team-image/team12.jpg', name: 'Steven Smith', role: 'AI Engineer' },
  { image: '/images/team-image/team13.jpg', name: 'Mark Smith', role: 'Cloud Architect' },
  { image: '/images/team-image/team14.jpg', name: 'Williams Smith', role: 'Product Manager' },
]

function SocialLinks() {
  return (
    <div className="social">
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
    </div>
  )
}

export default function TeamSection() {
  return (
    <div className="team-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Our Team</span>
          <h2>Our Expert Team</h2>
        </div>
        <div className="swiper team-slider">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              576: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {team.map((member) => (
              <SwiperSlide key={member.name}>
                <div className="single-team-box">
                  <div className="image">
                    <img alt={member.name} width="510" height="600" src={member.image} />
                    <SocialLinks />
                  </div>
                  <div className="content">
                    <h3>{member.name}</h3>
                    <span>{member.role}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <ShapeDecorationsTeam />
    </div>
  )
}
