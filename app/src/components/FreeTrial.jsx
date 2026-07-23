export default function FreeTrial() {
  return (
    <div className="free-trial-area ptb-100 bg-f4f7fe">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="ft-img">
              <img alt="Get started with VexaCore" width="700" height="400" src="/images/machine-learning/free-trial-img.png" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="subscribe-content">
              <span className="sub-title">Get Started Instantly!</span>
              <h2>Start your free trial</h2>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" className="input-newsletter" placeholder="Enter your email" name="email" />
                <button type="submit">Sign Up Free</button>
              </form>
              <p className="help-text">
                Try VexaCore.ai features for 14 days — AI agents, cloud onboarding, and more. No credit card required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
