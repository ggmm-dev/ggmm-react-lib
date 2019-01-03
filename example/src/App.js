import React, { Component } from "react";

import logo from "./logo.svg";

import {
  Hero,
  NavBar,
  TwoCol,
  SourceText,
  Mosaic,
  TextHeadline
} from "ggmm-react-lib";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      threeCol: [],
      aData: {
        title: "yolo",
        image: "https://source.unsplash.com/user/williamkarl"
      },
      bData: {
        title: "yolo",
        image: "https://source.unsplash.com/user/braydenlaw"
      },
      cData: {
        title: "yolo",
        image: "https://source.unsplash.com/user/timmossholder"
      }
    };
  }
  render() {
    return (
      <div>
        <SourceText
          types={[
            "logo=(data)",
            "nav=(data)",
            "social=(data)",
            "type=(center/left/mobile)"
          ]}
          title="NavBar"
        />

        <NavBar
          type="center"
          logo={logo}
          nav={this.state.nav}
          social={this.state.socail}
        />

        <SourceText
          types={[
            "headline=(str)",
            "subheadline(str)",
            "type=(video/image)",
            "height=(100/75/50)",
            "overlay=(boolean)",
            "buttonUrl=(str)",
            "buttonTitle=(str)",
            "videoId=(str)",
            "imageUrl=(str)"
          ]}
          title="Hero"
        />
        <Hero
          type="image" //video or image
          headline="Headline"
          subheadline="Subheadline"
          overlay={true} //disables darkened overlay
          buttonUrl="/"
          height="50" // represents percentage height
          buttonTitle="Start"
          videoId="306913138" // vimeo video id
          imageUrl="https://source.unsplash.com/random" // src of image for background if type is image
        />
        <SourceText
          types={[
            "height=(str with px)",
            "left=(image/imageCover/text)",
            "right=(image/imageCover/text)",
            "leftContent=(data)",
            "rightContent=(data)",
            "type=(full/container)",
            "ratio=(half/one-third)"
          ]}
          title="TwoCol"
        />
        <TwoCol
          alignItems="center"
          height="500px" //container height
          left="imageCover"
          leftAlt="Alt Tag"
          leftContent="https://source.unsplash.com/user/erondu"
          right="imageCover"
          rightAlt="Alt Tag"
          rightContent="https://source.unsplash.com/user/druks"
          type="full"
          ratio="half"
        />

        <SourceText
          types={["data=(data)", "type=(image/icons/boxed)"]}
          title="ThreeCol"
        />

        <SourceText types={["data=(data)"]} title="Logo Grid" />

        <SourceText
          types={[
            "aData=(data)",
            "bData=(data)",
            "cData=(data)",
            "layout=(reverse)",
            "height=(number w/px)",
            "gridPadding=(number w/px)"
          ]}
          title="Mosaic"
        />

        <Mosaic
          aData={this.state.aData}
          bData={this.state.bData}
          cData={this.state.cData}
          height="700px"
          overlay={true}
          gridPadding="10px"
        />

        <SourceText
          types={[
            "cat=(str)",
            "headline=(str)",
            "subheadline=(str)",
            "algin=(center/left/right)",
            "margin=(center)",
            "width=(number %)",
            "maxWidth=(number w/px)"
          ]}
          title="TextHeadline"
        />

        <TextHeadline
          align="center"
          margin="initial"
          cat="Cat"
          width="300px"
          maxWidth="400px"
          subheadline="Bacon ipsum dolor amet beef ribs drumstick swine cow brisket, flank pancetta spare ribs strip steak salami turkey ball tip ground round ham turducken."
          headline="Headline"
        />

        <SourceText
          types={["margin=(full/padded)", "data=(data)", "text=(boolean)"]}
          title="Grid"
        />

        <SourceText types={["data=(data)"]} title="Carousel" />
        <SourceText types={["data=(data)"]} title="FullSlider" />
        <SourceText
          types={[
            "type=(sideImage)",
            "jotform=(jotformembed)",
            "image=(data)",
            "headline=(str)",
            "subheadline=(str)"
          ]}
          title="Contact"
        />

        <SourceText
          types={[
            "type=(simple/nav)",
            "logo=(data)",
            "nav=(data)",
            "social=(data)",
            "siteInfo=(data)"
          ]}
          title="Footer"
        />
      </div>
    );
  }
}
