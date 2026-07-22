import ShapeDecorations from './ShapeDecorations'

const plans = [
  {
    name: 'Starter',
    description: 'Explore VexaCore.ai capabilities',
    price: '0',
    period: 'Trial',
    features: [
      { text: 'AI Problem Assessment', included: true },
      { text: 'Basic Agent Demo', included: true },
      { text: 'Cloud Readiness Review', included: true },
      { text: 'Email Support', included: true },
      { text: 'Managed AWS', included: false },
      { text: '24/7 Support', included: false },
      { text: 'Custom Integrations', included: false },
      { text: 'Dedicated Account Manager', included: false },
    ],
  },
  {
    name: 'Business',
    description: 'Full AI & cloud for growing teams',
    price: '149',
    period: 'Monthly',
    features: [
      { text: 'AI Agents & Automation', included: true },
      { text: 'AWS Onboarding', included: true },
      { text: 'Managed Cloud Operations', included: true },
      { text: 'Priority Email Support', included: true },
      { text: 'Monthly Health Reports', included: true },
      { text: 'Custom Integrations', included: true },
      { text: '24/7 Support', included: false },
      { text: 'Dedicated Account Manager', included: false },
    ],
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions at scale',
    price: '299',
    period: 'Monthly',
    features: [
      { text: 'Everything in Business', included: true },
      { text: 'Custom AI Models', included: true },
      { text: 'Multi-Cloud Support', included: true },
      { text: '24/7 Support', included: true },
      { text: 'Dedicated Account Manager', included: true },
      { text: 'SLA Guarantees', included: true },
      { text: 'On-Site Training', included: true },
      { text: 'Partnership Programs', included: true },
    ],
  },
]

export default function Pricing() {
  return (
    <div className="pricing-area-two pt-100 pb-70 bg-f4f7fe" id="pricing">
      <div className="container">
        <div className="section-title">
          <h2>Our Pricing Plan</h2>
          <p>
            Flexible plans for businesses at every stage — from exploring AI to full managed
            cloud operations with VexaCore Technologies LLC.
          </p>
        </div>
        <div className="row justify-content-center">
          {plans.map((plan) => (
            <div className="col-lg-4 col-sm-6" key={plan.name}>
              <div className="single-pricing-table">
                <div className="pricing-header">
                  <h3>{plan.name}</h3>
                  <p>{plan.description}</p>
                </div>
                <div className="price">
                  <sup>$</sup> {plan.price} <sub>/ {plan.period}</sub>
                </div>
                <ul className="pricing-features">
                  {plan.features.map((feature) => (
                    <li key={feature.text}>
                      <i className={feature.included ? 'bx bx-badge-check' : 'bx bxs-x-circle'}></i>
                      {feature.text}
                    </li>
                  ))}
                </ul>
                <div className="btn-box">
                  <a className="default-btn" href="#contact">Get Started <span></span></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ShapeDecorations />
    </div>
  )
}
