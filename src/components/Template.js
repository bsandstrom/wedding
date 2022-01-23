import "../css/Template.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const links = {
  "/": "Home",
  "/story": "Our Story",
  "/photos": "Photos",
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
      <footer>
        <p>This website is written in React</p>
        <p>
          Check out the{" "}
          <a href="https://github.com/bsandstrom/wedding">source code</a> on my
          github!
        </p>
      </footer>
    </div>
  );
}

export default Template;
