import { Link, useRouteError } from "react-router-dom";
const Error = () => {
  const error =useRouteError() as Response;
  return (
    <div className="error">
        <h1>{error.status}</h1>
        <p>{error.statusText}</p>
        <Link to="/"  replace={true} >Go Back Home</Link>
    </div>
  );
}

export default Error;