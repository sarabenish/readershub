import { Link } from "react-router-dom";
import "../App.css";

interface Props {
  title: string;
}

function Header({ title }: Props) {
  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark shadow-5-strong"
          style={{ fontWeight: "500" }}
        >
          <Link
            className="navbar-brand mb-2 mb-lg-0"
            style={{ marginLeft: "1em" }}
            to="/BookHub"
          >
            {title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav col-6 col-sm-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li className="nav-item">
                <Link className="nav-link" to="/BooksFeed">
                  Feed
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/BooksCollection">
                  Explore
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Library">
                  Library
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
