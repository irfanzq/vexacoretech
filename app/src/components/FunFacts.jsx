const facts = [
  { value: '50', suffix: '+', label: 'Projects Completed', letter: 'P' },
  { value: '100', suffix: '%', label: 'Client Satisfaction', letter: 'C' },
  { value: '5', suffix: '', label: 'Product Lines', letter: 'A' },
  { value: '24', suffix: '+', label: 'Expert Members', letter: 'E' },
]

export default function FunFacts() {
  return (
    <div className="fun-facts-area ptb-100">
      <div className="container">
        <div className="row">
          {facts.map((fact) => (
            <div className="col-lg-3 col-sm-6" key={fact.label}>
              <div className="single-fun-facts">
                <h3>
                  {fact.value}
                  {fact.suffix && <span className="sign-icon">{fact.suffix}</span>}
                </h3>
                <p>{fact.label}</p>
                <div className="back-text">{fact.letter}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
