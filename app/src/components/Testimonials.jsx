import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  { image: '/images/client-image/client1.jpg', name: 'Jason Roy', role: 'Operations Manager', text: 'VexaCore delivered AI automation that cut our manual processing time in half. Clear communication and practical results throughout.' },
  { image: '/images/client-image/client2.jpg', name: 'James Anderson', role: 'CTO', text: 'Their AWS onboarding and managed cloud services let us focus on product instead of infrastructure. Highly recommended for growing teams.' },
  { image: '/images/client-image/client3.jpg', name: 'Sarah Taylor', role: 'Product Lead', text: 'Real innovations and a positive experience — VexaCore explained everything in language our team could understand. No fake promises.' },
  { image: '/images/client-image/client4.jpg', name: 'Steven Smith', role: 'Business Owner', text: 'We needed AI problem-solving without becoming technical experts. VexaCore.ai delivered exactly that — practical tools that work.' },
  { image: '/images/client-image/client5.jpg', name: 'Tom Nessham', role: 'Director', text: 'Professional, responsive, and product-focused. VexaCore Technologies is a partner we trust for AI and cloud initiatives.' },
]

export default function Testimonials() {
  return (
    <div className="feedback-area feedback-area-two ptb-100">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Testimonials</span>
          <h2>Some Lovely Feedback From Our Clients</h2>
        </div>
      </div>
      <div className="swiper feedback-slides">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          loop
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <div className="single-feedback-item border">
                <p>&ldquo;{item.text}&rdquo;</p>
                <div className="client-info">
                  <img alt={item.name} width="150" height="150" src={item.image} />
                  <h3>{item.name}</h3>
                  <span>{item.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
