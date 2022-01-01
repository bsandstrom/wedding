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
      <Link class="mainHeader" to="/">
        Brent & Brett
      </Link>
      <p class="headerInfo">December 18th 2021</p>
      <p class="headerInfo">Franklin NH</p>
      <nav class="siteNav">
        {Object.entries(links).map(([k, v]) => {
          return (
            <Link
              {...(k === location.pathname ? { class: "selected" } : {})}
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
