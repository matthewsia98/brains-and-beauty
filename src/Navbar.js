import { Link } from 'react-router-dom';
import './index.css';
const  Navbar = () => {
    return (  
      <div>
        <nav className="navbar navbar-expand-md bg-pink">
        <div className="container-fluid">
           <Link className="navbar-brand navbar-heading" to="/">Brains&Beauty</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/face">Face Products</Link>
                  {/* <a href="/face">Face Products</a> */}
                </li>
                <li className="nav-item">
                  <Link to="/body">Body Products</Link>
                </li>
                <li className="nav-item">
                  <Link to="/suncare">Sun Care</Link>
                </li>
                <li className="nav-item">
                  <Link to="/hair">Hair Products</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
}
 
export default Navbar;