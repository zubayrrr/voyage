import { Link } from "gatsby";
import React, { Component } from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import DarkMode from "../components/darkmode";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
    };
  }

  render() {
    const { data, header } = this.props;
    const { menu } = this.state;
    return (
      <header className={`site-header glass shadow-sm ${menu ? "active" : ""}`}>
        <div className="container">
          <div className="header-main">
            <div className="logo">
              <AniLink paintDrip duration={1} hex="#363F47" to="/">
                {data.logo.file.url ? (
                  <img src={data.logo.file.url} alt="logo" />
                ) : (
                  <span>{data.siteName}</span>
                )}
              </AniLink>
            </div>
            <div
              className="responsive-menu"
              onClick={() => {
                this.setState({
                  menu: !menu,
                });
              }}
            >
              <span></span>
            </div>
            {header === "home" ? (
              <div className="menu">
                <ul
                  onClick={() => {
                    this.setState({
                      menu: false,
                    });
                  }}
                >
                  <li key="home">
                    <Link to="/#home">Home</Link>
                  </li>
                  {data.menus
                    .filter((item) => item === "About")
                    .map((t) => {
                      return (
                        <li key="About">
                          <AniLink paintDrip to={`/#About`}>
                            About
                          </AniLink>
                        </li>
                      );
                    })}
                  {data.menus
                    .filter((item) => item === "Blogs")
                    .map((t) => {
                      return (
                        <li key="Blogs">
                          <Link to={`/#Blogs`}>Blogs</Link>
                        </li>
                      );
                    })}
                  {data.menus
                    .filter((item) => item === "Work")
                    .map((t) => {
                      return (
                        <li key="Work">
                          <Link to={`/#Work`}>Work</Link>
                        </li>
                      );
                    })}
                  {data.menus
                    .filter((item) => item === "Contact")
                    .map((t) => {
                      return (
                        <li key="Contact">
                          <Link to={`/#Contact`}>Contact</Link>
                        </li>
                      );
                    })}
                </ul>{" "}
                <DarkMode />
              </div>
            ) : (
              <div className="menu">
                <ul
                  onClick={() => {
                    this.setState({
                      menu: false,
                    });
                  }}
                >
                  <li key="home">
                    <Link to="/#home">Home</Link>
                  </li>
                  {data.menus
                    .filter((item) => item === "Blogs")
                    .map((t) => {
                      return (
                        <li key="blogs">
                          <Link to="/blogs">Blogs</Link>
                        </li>
                      );
                    })}
                  {data.menus
                    .filter((item) => item === "Photos")
                    .map((t) => {
                      return (
                        <li key="photos">
                          <Link to="/photos">Photos</Link>
                        </li>
                      );
                    })}
                </ul>
                <DarkMode />
              </div>
            )}
          </div>
        </div>
      </header>
    );
  }
}
