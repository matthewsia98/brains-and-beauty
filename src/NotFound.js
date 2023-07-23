import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center">
      <h1 className="mt-4">Oops! You seem to be lost</h1>
      <h4 className="my-4">Go to Home Page:</h4>
      <Link to="/" className="btn btn-primary">
        Home
      </Link>
    </div>
  );
}
