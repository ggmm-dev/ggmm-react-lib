import React, { Component } from "react";
import styled from "styled-components";
import MailchimpSubscribe from "react-mailchimp-subscribe";

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

        input{
          border: 0px solid;
          padding-left: 10px;
        }

        .mc-field-group {
          margin-right: 5px;
        }
      `,
      CustomForm = ({ status, message, onValidated }) => {
        let email;
        const submit = () =>
          email &&
          email.value.indexOf("@") > -1 &&
          onValidated({
            EMAIL: email.value
          });
        if (status === "success" && props.callBack) {
          props.callBack();
        }
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            {status === "sending" && (
              <div style={{ color: "blue" }}>sending...</div>
            )}
            {status === "error" && (
              <div
                style={{ color: "red" }}
                dangerouslySetInnerHTML={{ __html: message }}
              />
            )}
            {status === "success" && (
              <div
                className="sux"
                style={{ color: "green" }}
                dangerouslySetInnerHTML={{ __html: message }}
              />
            )}

            <input
              ref={node => (email = node)}
              type="email"
              placeholder="Your Email"
            />
            <br />
            <button className={props.buttonClass} onClick={submit}>
              Submit
            </button>
          </div>
        );
      };

    const SimpleForm = () => <MailchimpSubscribe url={props.mcUrl} />;
    return (
      <MailChimp className={props.customClass}>
        <div className="opt-in">
          <div className="container">
            {this.props.children}

            <MailchimpSubscribe
              url={props.mcUrl}
              render={({ subscribe, status, message }) => (
                <CustomForm
                  status={status}
                  message={message}
                  onValidated={formData => subscribe(formData)}
                />
              )}
            />
          </div>
        </div>
      </MailChimp>
    );
  }
}
