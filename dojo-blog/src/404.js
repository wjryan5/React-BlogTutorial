import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="NotFound">
      <h2>Sorry</h2>
      <p>That page cannot be Found</p>
      <Link to="/"> Back to the Homepage.</Link>
    </div>
  );
};

export default NotFound;
