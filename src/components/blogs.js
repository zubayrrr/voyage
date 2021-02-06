import React, { Component } from "react";
import Img from "gatsby-image";
import moment from "moment";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default class Blogs extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="blogs-section section py-5" id="Blogs">
        <div className="container">
          <div className="section-head">
            <h2>Blogs</h2>
          </div>
          <div className={` ${data.edges.length < 4 ? "few-blogs" : ""}`}>
            {data.edges.map((item, index) => {
              return (
                <div
                  key={index}
                  className="row post my-5 align-items-center justify-content-center"
                >
                  <div className="col-lg-6 p-0 post-section-1 align-self-end ">
                    {item.node.featureImage ? (
                      <div className="post-img-container">
                        <Img
                          fluid={item.node.featureImage.fluid}
                          objectFit="contain"
                          objectPosition="50% 50%"
                          className="rounded post-img"
                        />
                      </div>
                    ) : (
                      <div className="no-image"></div>
                    )}
                  </div>
                  <div className="col-lg-6 p-5 post-section-2 rounded">
                    <h1 className="title ">{item.node.title}</h1>
                    <hr />
                    <span className="date">
                      <i className="fas fa-calendar-alt"></i>{" "}
                      {moment(item.node.createdAt).format("LL")}
                    </span>
                    <AniLink
                      swipe
                      top="exit"
                      direction="left"
                      entryOffset={100}
                      duration={1}
                      className="post-link"
                      to={`/${item.node.slug}`}
                    >
                      <p className="lead">
                        {item.node.description.childMarkdownRemark.excerpt}
                      </p>
                    </AniLink>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="see-more">
            <AniLink swipe direction="up" to="/blogs">
              <span>More Blogs</span>
            </AniLink>
          </div>
        </div>
      </div>
    );
  }
}
