import { useState } from 'react'

const faqs = [
  {
    question: 'What AI and cloud services does VexaCore Technologies offer?',
    answer: [
      'We offer AI agents and automation, AWS onboarding, managed cloud operations, and product development under the VexaCore brand — including our flagship product VexaCore.ai.',
      'Each service is designed for businesses that want practical technology without becoming technical experts.',
    ],
  },
  {
    question: 'How does VexaCore.ai differ from VexaCore Technologies?',
    answer: [
      'VexaCore Technologies LLC is the parent company. VexaCore.ai is our live product for AI problem-solving, agents, AWS onboarding, and managed cloud operations.',
    ],
  },
  {
    question: 'Can you help migrate our existing apps to AWS?',
    answer: [
      'Yes. We provide AWS onboarding with security, high availability, and best practices — plus optional monthly managed operations so your team can focus on the business.',
    ],
  },
  {
    question: 'How do I get started or request a partnership?',
    answer: [
      'Contact us at mailz4irfi@gmail.com or +1 832 870 6646. We welcome partnerships, product questions, and early access conversations for upcoming VexaCore products.',
    ],
  },
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0)

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <div className="faq-area ptb-100 bg-f4f7fe">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">FAQ</span>
          <h2>Frequently Asked Questions</h2>
          <p>
            Common questions about VexaCore Technologies LLC, our products, and how we work
            with businesses on AI and cloud solutions.
          </p>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="faq-img pr-3">
              <img alt="FAQ" width="600" height="450" src="/images/faq.png" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="faq-accordion">
              {faqs.map((faq, index) => {
                const isActive = activeIndex === index
                return (
                  <div className={`accordion-item ${isActive ? 'active' : ''}`} key={faq.question}>
                    <div className="accordion-button" onClick={() => toggle(index)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && toggle(index)}>
                      <div className="d-flex align-items-center gap-1">
                        <i className={`bx ${isActive ? 'bx-chevron-down' : 'bx-chevron-right'}`}></i>
                        {faq.question}
                      </div>
                    </div>
                    <div
                      className="accordion-panel"
                      style={{
                        display: isActive ? 'block' : 'none',
                        maxHeight: isActive ? '1000px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease',
                      }}
                    >
                      <div className="accordion-content">
                        {faq.answer.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
