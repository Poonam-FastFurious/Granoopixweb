function Newslatter() {
  return (
    <>
      {/* <div className="p-4">
       
          <div className="row ">
            <div className="col-12 col-sm-4 text-center">
              <img
                src="https://www.myinternet.services/static/media/mail-icon.91ea8185d96ce472a990.webp"
                className="img-fluid"
                alt="Mail Icon"
              />
            </div>
            <div className="col-12 col-sm-4  text-center">
              <p className="lead text-white ">Newsletter Subscription</p>
              <h4 className="white-clr fw_600 mb-4">
                Subscribe To Our Newsletter
              </h4>
            </div>
            <div className="col-12 col-sm-4 text-center">
              <img
                src="https://www.myinternet.services/static/media/send-icon.6c43f7b8dc0aab6fe209.webp"
                className="img-fluid"
                alt="Send Icon"
              />
            </div>
          </div>
       
      </div> */}
      <div className="newsletter-section">
        <div className="newsletter-container">
          <h3 className="newsletter-title">Newsletter</h3>
          <p className="newsletter-description">
            Subscribe to our newsletter and stay up to date with the latest
            news, updates, and exclusive offers. Get valuable insights. Join our
            community today!
          </p>
          <div className="newsletter-input-container">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button type="button" className="newsletter-button">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newslatter;
