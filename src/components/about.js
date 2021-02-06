import React from "react";

const Header = ({ data }) => (
  <div className="about section" id="About">
    <div
      className="about-main"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="row">
        {/* Right section */}
        <div className="col-md-5 col-lg-7 pl-5">
          <div className="about-details">
            <span className="display-2 font-weight-bold">
              Hello.
              <br />
              I'm {data.name}.
            </span>

            <h1 className="sub-position">A {data.designation}.</h1>
            <ul className="sub-data list-inline">
              {data.bannerList.map((item, index) => {
                return (
                  <li className="list-inline-item" key={index}>
                    * {item}
                  </li>
                );
              })}
            </ul>

            {/* <ul className="details">
            <li>
              <strong>Email</strong>
              <p>
                <a href={`mailto:${data.email}`}>{data.email}</a>
              </p>
            </li>
          </ul>
          <div className="socials">
            <ul>
              <li>
                <a
                  className="fab fa-github"
                  href={data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </li>
            </ul>
          </div> */}
          </div>
        </div>
        <div className="col-md-5 col-lg-5 pr-5 ">
          <div
            dangerouslySetInnerHTML={{
              __html: data.description.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Header;
