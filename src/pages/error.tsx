import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
        <h1>404</h1>
        <p>Page Not Found</p>
        <Link to="/"  replace={true} >Go Back Home</Link>
    </div>
  );
}

export default Error;