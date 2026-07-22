import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const projects = [
  { image: '/images/projects-image/project1.jpg', title: 'AI Agent Platform', category: 'AI' },
  { image: '/images/projects-image/project2.jpg', title: 'Cloud Migration', category: 'AWS' },
  { image: '/images/projects-image/project3.jpg', title: 'Business Automation', category: 'Automation' },
  { image: '/images/projects-image/project4.jpg', title: 'Managed Cloud Ops', category: 'Operations' },
  { image: '/images/projects-image/project5.jpg', title: 'Data Pipeline', category: 'Analytics' },
  { image: '/images/projects-image/project6.jpg', title: 'VexaCore.ai Launch', category: 'Product' },
]

export default function ProjectsSection() {
  return (
    <div className="projects-area ptb-100" id="projects">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Projects</span>
          <h2>Proud Projects That Make Us Stand Out</h2>
          <p>
            From AI agents to managed cloud operations — solutions we build and operate
            under the VexaCore Technologies umbrella.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="swiper projects-slides">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.title}>
                <div className="single-projects-box">
                  <img alt={project.title} width="600" height="600" src={project.image} />
                  <div className="projects-content">
                    <h3><a href="#contact">{project.title}</a></h3>
                    <span className="category">{project.category}</span>
                  </div>
                  <div className="plus-icon">
                    <a className="popup-btn" href="#contact"><span></span></a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
