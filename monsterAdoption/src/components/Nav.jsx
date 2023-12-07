import { NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

export default function Nav () {
    const handleNavLinkClick = (index) => {
      // Handle nav link click event based on index
      console.log(`Clicked nav link ${index}`);
    };
  
    return (
      <div className="header-container">
        <div className="navbar">
          <Link className="nav-item" to='/'>
            Home
          </Link>
          <Link className="nav-item" to='PetSelection'>
            PetSelection
          </Link>
          <Link className="nav-item" to='AdoptionApplications'>
            Adoption Applications
          </Link>

          
        </div>
      </div>
    );
  };
