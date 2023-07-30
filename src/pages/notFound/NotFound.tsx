import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section>
      <div className="container notfound__container">
        <h2>Page Not Found</h2>
        <Link to="/" className="btn">
          Go Back to Home Page
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
