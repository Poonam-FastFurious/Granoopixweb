import { Link } from "react-router-dom"; // Assuming you're using react-router-dom for navigation
import errorimg from "../../assets/img/404.jpg";

function Error404() {
  return (
    <>
      <section className="position-relative space-top">
        <div className="container">
         
          <div className="common-thumb">
            <img src={errorimg} alt="img" className="w-100 rounded-3" />
          </div>
          <div className="text-center mt-4 space-bottom">
            <Link to="/" className="btn btn-primary">
              Return to Home Page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Error404;
