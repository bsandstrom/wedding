import "../css/Template.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const links = {
  "/": "Home",
  "/story": "Our Story",
  "/photos": "Photos",
  "/registry": "Registry",
};

function Template({ children }) {
  const location = useLocation();

  return (
    <div id="appContent">
      <Link className="mainHeader" to="/">
        Brent & Brett
      </Link>
      <p className="headerInfo">December 18th 2021</p>
      <p className="headerInfo">Franklin NH</p>
      <nav className="siteNav">
        {Object.entries(links).map(([k, v]) => {
          return (
            <Link
              key={k}
              {...(k === location.pathname ? { className: "selected" } : {})}
              to={k}
            >
              {v}
            </Link>
          );
        })}
      </nav>
      {children}
      <footer>Website written in React by Brent</footer>
    </div>
  );
}

export default Template;
