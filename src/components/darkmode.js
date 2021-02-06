import React, { Component } from "react";

import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { FaMoon } from "@react-icons/all-files/fa/FaMoon";
import { FaSun } from "@react-icons/all-files/fa/FaSun";

export default class DarkMode extends Component {
  render() {
    const toggler = (
      <div className="toggler-container ">
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <>
              <input
                type="checkbox"
                id="toggler"
                onChange={(e) =>
                  toggleTheme(e.target.checked ? "dark" : "light")
                }
                checked={theme === "dark"}
                className="tog-checkbox checkbox"
              />
              <label className="tog glass shadow-sm label" for="toggler">
                {theme === "dark" ? (
                  <div className="tog-text fasun">
                    <FaSun size={12} />
                  </div>
                ) : (
                  <div className="tog-text famoon">
                    <FaMoon size={12} />
                  </div>
                )}
                <div className="ball"></div>
              </label>
            </>
          )}
        </ThemeToggler>
      </div>
    );

    return <div>{toggler}</div>;
  }
}
