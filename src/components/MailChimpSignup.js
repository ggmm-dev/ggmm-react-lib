import React, { Component } from "react";
import styled from "styled-components";

export default class MailChimpSignup extends Component {
  render() {
    const props = this.props,
      MailChimp = styled.div`
        background: ${props.backgroundColor};
        padding: ${props.padding};
        .container {
          ${props.center && "text-align: center"}
          max-width: ${props.maxWidth};
        }
        div#mc_embed_signup {
          margin-top: 20px;
          ${props.center && "display: flex; justify-content: center;"}
        }
        h4{
          margin-bottom: 10px;
        }
        div#mc_embed_signup_scroll {
          display: flex;
        }

        .mc-field-group {
          margin-right: 5px;
        }
      `;
    return (
      <MailChimp className={props.customClass}>
        <div className="opt-in">
          <div className="container">
            {this.props.children}

            <div id="mc_embed_signup">
              <form
                action={props.mcUrl}
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                novalidate
              >
                <div id="mc_embed_signup_scroll">
                  <div className="mc-field-group">
                    <input
                      type="email"
                      value=""
                      name="EMAIL"
                      placeholder="Your Email"
                      className="required email"
                      id="mce-EMAIL"
                    />
                  </div>
                  {props.hasFirstName && (
                    <div className="mc-field-group">
                      <input
                        type="text"
                        value=""
                        name="FNAME"
                        className=""
                        id="mce-FNAME"
                      />
                    </div>
                  )}
                  {props.hasLastName && (
                    <div className="mc-field-group">
                      <input
                        type="text"
                        value=""
                        name="LNAME"
                        className=""
                        id="mce-LNAME"
                      />
                    </div>
                  )}
                  <div id="mce-responses" className="clear">
                    <div
                      className="response"
                      id="mce-error-response"
                      style={{ display: "none" }}
                    />
                    <div
                      className="response"
                      id="mce-success-response"
                      style={{ display: "none" }}
                    />
                  </div>
                  <div
                    style={{ position: "absolute", left: "-5000px" }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_4c27f09ab6a622c6340c21d60_b6d5e93004"
                      tabindex="-1"
                      value=""
                    />
                  </div>
                  <div className="clear">
                    <input
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className={props.buttonClass}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </MailChimp>
    );
  }
}
