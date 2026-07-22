const services = [
  {
    image: '/images/machine-learning/ml-service1.png',
    width: 155,
    title: 'AI Agents & Automation',
    text: 'Intelligent agents and automation tools that reduce manual work and help teams move faster.',
  },
  {
    image: '/images/machine-learning/ml-service2.png',
    width: 200,
    title: 'Software Engineering',
    text: 'Full-stack development for business applications — built to scale with your operations.',
  },
  {
    image: '/images/machine-learning/ml-service2.png',
    width: 200,
    title: 'AWS Onboarding',
    text: 'Get your business applications running on AWS with security, reliability, and best practices.',
  },
  {
    image: '/images/machine-learning/ml-service3.png',
    width: 148,
    title: 'Cloud Security',
    text: 'Security-first cloud architecture and ongoing monitoring for peace of mind.',
  },
  {
    image: '/images/machine-learning/ml-service4.png',
    width: 200,
    title: 'Managed Operations',
    text: 'Monthly managed AWS services — we handle the cloud so you can focus on your business.',
  },
  {
    image: '/images/machine-learning/ml-service5.png',
    width: 200,
    title: 'Data & Analytics',
    text: 'Turn your data into actionable insights with modern analytics and ML pipelines.',
  },
]

export default function ServicesSection() {
  return (
    <div className="ml-services-area bg-f2f2f7 pt-100 pb-70" id="services">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Our Services</span>
          <h2>Professional Services For Your Business</h2>
          <p>
            Company-wide capabilities across our product lines — AI, cloud, and product delivery
            designed for teams that want results without becoming technical experts.
          </p>
        </div>
        <div className="row justify-content-center">
          {services.map((service) => (
            <div className="col-lg-4 col-md-6" key={service.title}>
              <div className="ml-service">
                <div className="image">
                  <img alt={service.title} width={service.width} height="180" src={service.image} />
                </div>
                <h3><a href="#contact">{service.title}</a></h3>
                <p>{service.text}</p>
                <a className="read-more" href="#contact">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
