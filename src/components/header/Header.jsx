import "./Header.css";
import logo from "../../image/logo.png";
import logOut from "../../icons/log-out.png";
import { useContext } from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StoreCtxt } from "../../services/StoreService";

function Header(props) {
  const { logoutUser } = useContext(StoreCtxt).actions;

  const signOut = () => {
    console.log("signOut");
    logoutUser();
  };

  return (
    <div className="header-out">
      <div className="header-in">
        <div>
          <Link
            className="header-link"
            id={`header-link-${props.bold}`}
            to="/gigs"
          >
            הגיגים שלי
          </Link>
          <Link
            className="header-link"
            id={`header-link-${!props.bold}`}
            to="/paidgigs"
          >
            גיגים משולמים
          </Link>
        </div>
        <div className="header-right">
          <NavDropdown title={<img src={logo} />} id="basic-nav-dropdown">
            <NavDropdown.Item onClick={signOut}>
              יציאה
              <img src={logOut} />
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
    </div>
  );
}

export default Header;
