import { ShapeDecorationsLight } from './ShapeDecorations'

const partners = Array.from({ length: 10 }, (_, i) => ({
  image: `/images/partner-image/partner-img${i + 1}.png`,
  alt: `Partner ${i + 1}`,
}))

export default function Partners() {
  return (
    <div className="partner-area ptb-100">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Clients</span>
          <h2>Our Loving Clients</h2>
          <p>
            Businesses that trust VexaCore Technologies LLC for AI, cloud, and product delivery.
          </p>
        </div>
        <div className="row align-items-center">
          {partners.map((partner) => (
            <div className="single-partner-item" key={partner.alt}>
              <a href="#contact" rel="noopener noreferrer">
                <img alt={partner.alt} width="200" height="60" src={partner.image} />
                <img alt={partner.alt} width="200" height="60" src={partner.image} />
              </a>
            </div>
          ))}
        </div>
      </div>
      <ShapeDecorationsLight />
    </div>
  )
}
