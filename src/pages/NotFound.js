import { Link } from "react-router-dom";
import "../css/NotFound.css";
import PageWrapper from "../components/PageWrapper";

function NotFound() {
  return (
    <PageWrapper>
      <main className="not container">
        <section className="page">
          <h2>404</h2>
          <p>This page has wandered off.</p>
          <p>
            The page you are looking for does not exist or has been moved. Let
            us get you back on track.
          </p>
          <Link className="primary-btn" to="/">
            Back to Essentials Hub
          </Link>
        </section>
      </main>
    </PageWrapper>
  );
}

export default NotFound;
