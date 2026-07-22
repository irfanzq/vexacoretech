const solutions = [
  {
    icon: 'bx bxs-analyse',
    title: 'AI Problem Solving',
    text: 'Custom AI agents and automation that cut repetitive work and deliver results your team can understand.',
  },
  {
    icon: 'bx bx-shape-circle',
    title: 'Cloud Operations',
    text: 'AWS onboarding, security, high availability, and ongoing managed operations for business applications.',
  },
  {
    icon: 'bx bx-badge-check',
    title: 'Managed AWS',
    text: 'Monthly managed cloud services so your apps stay secure, scalable, and running without constant firefighting.',
  },
  {
    icon: 'bx bx-layer',
    title: 'Product Mindset',
    text: 'We ship software and services as products — with clarity, support, and continuous iteration built in.',
  },
]

export default function FeaturedSolutions() {
  return (
    <div className="pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">What We Offer</span>
          <h2>Our Featured Solutions</h2>
          <p>
            VexaCore Technologies LLC delivers practical AI and cloud products for growing
            businesses — starting with VexaCore.ai and expanding across the VexaCore brand family.
          </p>
        </div>
        <div className="row justify-content-center">
          {solutions.map((item) => (
            <div className="col-lg-3 col-sm-6" key={item.title}>
              <div className="featured-solution-card">
                <i className={item.icon}></i>
                <h3><a href="#services">{item.title}</a></h3>
                <p>{item.text}</p>
                <a className="read-more" href="#services">Discover More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
