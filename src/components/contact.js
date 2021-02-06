import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="section py-5">
        <div className="container">
          <h2 className="text-center">Contact</h2>
          <div
            className="contact row justify-content-center text-center"
            id="Contact"
          >
            <div className="col-lg-6">
              <form
                name="contact"
                method="post"
                data-netlify="true"
                action="/success"
              >
                <input type="hidden" name="form-name" value="contact" />

                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    className="shadow-sm rounded"
                    placeholder="Your Name"
                    style={{ height: "50px" }}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    className="shadow-sm rounded"
                    placeholder="Your Email"
                    style={{ height: "50px" }}
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    required
                    className="shadow-sm rounded"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div>
                  <button type="submit" className="shadow">
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
