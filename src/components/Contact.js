import React, { Component } from "react";
import JotformEmbed from "react-jotform-embed";
import styled from "styled-components";

import _ from "lodash";

export default class Contact extends Component {
  render() {
    const props = this.props,
      Container = styled.div`
        background: whitesmoke;
        .flex-container {
          display: flex;
          max-width: 1000px;
          padding-bottom: 100px;
          flex-wrap: wrap;
        }
        .c-form {
          background: white;
          width: 90%;
          margin: 0 auto;
          margin-top: 50px;
          margin-bottom: 50px;
          padding: 30px;
          position: relative;
        }
        @media screen and (min-width: 1024px) {
          .c-form {
            width: 70%;
            padding: 50px;
            margin-bottom: 0;
          }
          .contact-image {
            width: 30%;
            background-size: cover;
            background-position: center;
          }
        }
      `;

    return (
      <Container>
        <div className="flex-container">
          <div
            className="contact-image"
            style={{ backgroundImage: "url(" + props.image + ")" }}
          />
          <div className="c-form">
            {props.content}
            {/* <JotformEmbed src="https://form.jotform.com/83445787357169" /> */}
          </div>
        </div>
      </Container>
    );
  }
}
