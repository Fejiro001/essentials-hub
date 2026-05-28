import { Link } from "react-router-dom";
import '../css/Notfound.css';

function NotFound() {
  return (
    <div className="not"> 
      <div className="page">
          <h2>404</h2>
          <p>This page has wandered off.</p>
          <p>The page you are looking for does not exist or has been moved.</p>
          <Link to="/">Back to Essentials Hub</Link>
      </div>
    </div>
  );
}

export default NotFound;
