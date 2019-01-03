import React, { Component } from "react";

import logo from "./logo.svg";

import {
  Hero,
  NavBar,
  TwoCol,
  SourceText,
  Mosaic,
  Contact,
  Grid,
  FullSlider,
  TextHeadline,
  ThreeCol
} from "ggmm-react-lib";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      grid: {
        0: {
          image: "https://source.unsplash.com/user/williamkarl",
          content: "Title",
          link: "https://google.com"
        },
        1: {
          image: "https://source.unsplash.com/user/timmossholder",
          content: "Title"
        },
        2: {
          image: "https://source.unsplash.com/user/braydenlaw",
          content: "Title"
        },
        3: {
          image: "https://source.unsplash.com/user/chuttersnap",
          content: "Title"
        }
      },
      threeCol: {
        0: {
          content: "<h2>Headline</h2><p>Descriptive text for each box</p>",
          image: "https://source.unsplash.com/user/williamkarl"
        },
        1: {
          content: "<h2>Headline</h2><p>Descriptive text for each box</p>",
          image: "https://source.unsplash.com/user/timmossholder"
        },
        2: {
          content: "<h2>Headline</h2><p>Descriptive text for each box</p>",
          image: "https://source.unsplash.com/user/braydenlaw"
        }
      },
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
      },
      nav: {
        0: {
          name: "menu-item",
          link: "/"
        },
        1: {
          name: "menu-item",
          link: "/"
        }
      },
      social: {
        0: {
          type: "facebook",
          link: "/"
        },
        1: {
          type: "instagram",
          link: "/"
        },
        2: {
          type: "twitter",
          link: "/"
        },
        3: {
          type: "youtube",
          link: "/"
        },
        4: {
          type: "linkedin",
          link: "/"
        },
        5: {
          type: "email",
          link: "tyler@ggmm.io"
        }
      }
    };
  }
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.1.0/css/all.css"
          integrity="sha384-87DrmpqHRiY8hPLIr7ByqhPIywuSsjuQAfMXAE0sMUpY3BM7nXjf+mLIUSvhDArs"
          crossOrigin="anonymous"
        />

        <SourceText
          types={[
            "logo=(data)",
            "nav=(data)",
            "navColor=(str)",
            "social=(data)",
            "type=(center/left/mobile)",
            "padding=(number w/px)",
            "logoWidth=(number w/px)",
            "iconColor=(str)"
          ]}
          title="NavBar"
        />
        <SourceText types={["type=(left)"]} title="Navbar" />
        <NavBar
          backgroundColor="whitesmoke"
          type="left"
          logo={logo}
          navColor="gray"
          logoWidth="50px"
          iconColor="gray"
          padding="10px"
          nav={this.state.nav}
          social={this.state.social}
        />
        <SourceText types={["type=(center)"]} title="Navbar" />
        <NavBar
          backgroundColor="#444"
          type="center"
          logo={logo}
          logoWidth="50px"
          iconColor="whitesmoke"
          padding="10px"
          nav={this.state.nav}
          navColor="whitesmoke"
          social={this.state.social}
        />
        <SourceText types={["type=(mobile)"]} title="Navbar" />
        <NavBar
          backgroundColor="#fab420"
          type="mobile"
          logo={logo}
          logoWidth="50px"
          iconColor="gray"
          padding="10px"
          nav={this.state.nav}
          social={this.state.social}
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
            "height=(str)",
            "left=(image/imageCover/text)",
            "right=(image/imageCover/text)",
            "leftContent=(data)",
            "rightContent=(data)",
            "fullWidth=(boolean)",
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
          fullWidth={true}
          ratio="half"
        />
        <SourceText
          types={[
            "data=(data)",
            "textAlign=(align)",
            "imageHeight=(str)",
            "fullWidth=(boolean)",
            "text=(boolean)",
            "type=(imageCover/icons/boxed)"
          ]}
          title="ThreeCol"
        />
        <ThreeCol
          fullWidth={false}
          textAlign="center"
          type="imageCover"
          imageHeight="300px"
          text={true}
          data={this.state.threeCol}
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
          margin="auto"
          cat="Cat"
          width="500px"
          maxWidth="400px"
          subheadline="Bacon ipsum dolor amet beef ribs drumstick swine cow brisket, flank pancetta spare ribs strip steak salami turkey ball tip ground round ham turducken."
          headline="Headline"
        />
        <SourceText
          types={[
            "fullWidth=(boolean)",
            "gridGap(str)",
            "height=(str)",
            "columns=(str)",
            "overaly=(boolean)",
            "data=(data)",
            "text=(boolean)"
          ]}
          title="Grid"
        />
        <Grid
          data={this.state.grid}
          columns="2"
          gridGap="10px"
          height="400px"
          overlay={true}
          fullWidth={true}
          text={true}
        />
        <SourceText
          types={[
            "data=(data)",
            "dots=(boolean)",
            "infinite=(boolean)",
            "speed=(number)",
            "slidesToShow=(number)",
            "slidesToScroll=(number)",
            "height=(number)"
          ]}
          title="FullSlider"
        />
        <FullSlider
          data={this.state.grid}
          dots={true}
          infinite={true}
          speed="500"
          slidesToShow={1}
          slidesToScroll={1}
          height="600px"
        />
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
        <Contact image="https://source.unsplash.com/random" />
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
