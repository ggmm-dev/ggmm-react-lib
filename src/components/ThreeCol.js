import React, { Component } from "react";
import styled from "styled-components";
import _ from "lodash";

export default class ThreeCol extends Component {
  renderLayout() {
    return _.map(this.props.data, box => {
      const props = this.props,
        boxTotal = Object.keys(props.data).length,
        Box = styled.div`
          img {
            width: 100%;
          }
          .box-image {
            height: ${props.imageHeight};
            background: url(${box.image}) center / cover;
          }
          @media screen and (min-width: 1024px) {
            width: ${100 / boxTotal - 1 + "%"};
          }
        `;

      if (props.type === "imageCover") {
        return (
          <Box>
            <div className="box-image" />
            {props.text && (
              <div dangerouslySetInnerHTML={{ __html: box.content }} />
            )}
          </Box>
        );
      }
    });
  }
  render() {
    const props = this.props,
      Container = styled.div`
        ${props.fullWidth ? "width: 100%" : "width: 90%; margin: 0 auto"}
      `,
      Flex = styled.div`
        display: flex;
        position: relative;
        flex-wrap: wrap;
        text-align: ${props.textAlign};
        justify-content: space-between;
      `;
    return (
      <Container>
        <Flex>{this.renderLayout()}</Flex>
      </Container>
    );
  }
}
