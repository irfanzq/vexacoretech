import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import ShapeDecorations from './ShapeDecorations'
import 'swiper/css'
import 'swiper/css/navigation'

const slides = [
  {
    bg: '/images/machine-learning/slider/ml-slider1.jpg',
    title: 'VexaCore Technologies LLC — AI & Cloud Products for Business',
    text: 'We build AI agents, automation, and managed cloud solutions that help businesses solve real problems — explained in plain language, delivered as products.',
  },
  {
    bg: '/images/machine-learning/slider/ml-slider2.jpg',
    title: 'Machine Learning Models For Business Process',
    text: 'From intelligent automation to data-driven decisions, our ML solutions integrate with your workflows to reduce repetitive work and improve outcomes.',
  },
  {
    bg: '/images/machine-learning/slider/ml-slider3.jpg',
    title: 'Use Machine Learning To Augment Your Business Process',
    text: 'VexaCore.ai delivers AI problem-solving, AWS onboarding, and managed cloud operations — so your team can focus on growth, not infrastructure.',
  },
]

function HeroSlide({ slide }) {
  return (
    <div className="machine-learning-banner" style={{ backgroundImage: `url(${slide.bg})` }}>
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container mt-80">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="banner-content">
                  <h1>{slide.title}</h1>
                  <p>{slide.text}</p>
                  <div className="banner-btn">
                    <a className="default-btn mr-4" href="#contact">Get Started <span></span></a>
                    <a className="default-btn-two" href="https://vexacore.ai" target="_blank" rel="noopener noreferrer">Visit VexaCore.ai <span></span></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="ml-video">
                  <div className="solution-video">
                    <div className="video-btn">
                      <i className="flaticon-play-button"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ShapeDecorations />
    </div>
  )
}

export default function HeroSlider() {
  return (
    <Swiper
      id="home"
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 6000, disableOnInteraction: false }}
      loop
      className="machine-learning-slider swiper"
    >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <HeroSlide slide={slide} />
          </SwiperSlide>
        ))}
    </Swiper>
  )
}
