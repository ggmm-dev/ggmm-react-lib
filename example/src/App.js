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
          content: "Content",
          title: "Title",
          link: "https://google.com",
          linkTitle: "Learn More"
        },
        1: {
          image: "https://source.unsplash.com/user/timmossholder",
          content: "Content",
          title: "Title",
          link: "https://google.com",
          linkTitle: "Learn More"
        },
        2: {
          image: "https://source.unsplash.com/user/braydenlaw",
          content: "Content",
          title: "Title",
          link: "https://google.com",
          linkTitle: "Learn More"
        },
        3: {
          image: "https://source.unsplash.com/user/chuttersnap",
          content: "Content",
          title: "Title",
          link: "https://google.com",
          linkTitle: "Learn More"
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
          link: "/",
          subMenu: {
            name: "sub-item",
            link: "/"
          }
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

  enableIcon = name => event => {
    console.log(name);
  };

  deleteBlock = name => event => {
    console.log(name);
  };

  blockUp = name => event => {
    console.log(name);
  };

  blockDown = name => event => {
    console.log(name);
  };

  render() {
    const HeroDefault = {
      type: {
        value: "image",
        options: ["video", "image"],
        type: "select"
      },
      headline: {
        value: "Headline",
        type: "textarea"
      },
      padding: {
        type: "slider",
        value: "0px"
      },
      subheadline: {
        type: "textarea",
        value: "Subheadline"
      },
      overlay: {
        type: "checkbox",
        value: true
      },
      buttonUrl: {
        value: "/",
        type: "text"
      },
      buttonTitle: {
        value: "Button",
        type: "text"
      },
      height: {
        type: "slider",
        value: "50"
      },
      imageUrl: {
        value: "https://source.unsplash.com/random",
        type: "image_picker"
      }
    };
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
          // editor={true}
          // enableIcon={this.enableIcon()}
          deleteBlock={this.deleteBlock()}
          blockUp={this.blockUp()}
          blockDown={this.blockDown()}
          backgroundColor="whitesmoke"
          type="left"
          logo={logo}
          logoClass="test"
          navColor="gray"
          logoWidth="50px"
          iconColor="gray"
          padding="10px"
          nav={this.state.nav}
          social={this.state.social}
        />
        <SourceText types={["type=(center)"]} title="Navbar" />
        <NavBar
          // editor={true}
          // enableIcon={this.enableIcon()}
          deleteBlock={this.deleteBlock()}
          blockUp={this.blockUp()}
          blockDown={this.blockDown()}
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
          // editor={true}
          // enableIcon={this.enableIcon()}
          deleteBlock={this.deleteBlock()}
          blockUp={this.blockUp()}
          blockDown={this.blockDown()}
          backgroundColor="#fab420"
          type="mobile"
          mobileBgColor="black"
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
          id={1010}
          editor={true}
          enableIcon={this.enableIcon}
          deleteBlock={this.deleteBlock()}
          blockUp={this.blockUp()}
          blockDown={this.blockDown()}
          type="image" //video or image
          headline={HeroDefault.headline.value}
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
          id={1010}
          editor={true}
          enableIcon={this.enableIcon()}
          deleteBlock={this.deleteBlock()}
          blockUp={this.blockUp()}
          blockDown={this.blockDown()}
          alignItems="center"
          height="500px" //container height
          left="imageCover"
          leftWidth="60%"
          leftAlt="Alt Tag"
          leftContent="https://source.unsplash.com/user/erondu"
          right="html"
          rightAlt="Alt Tag"
          rightWidth="40%"
          rightContent="https://source.unsplash.com/user/druks"
          fullWidth={true}
        >
          Yolo
        </TwoCol>
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
          id={1010}
          editor={true}
          enableIcon={this.enableIcon()}
          deleteBlock={this.deleteBlock()}
          blockUp={this.blockUp()}
          blockDown={this.blockDown()}
          fullWidth={false}
          textAlign="center"
          type="icon"
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
          id={1010}
          editor={true}
          enableIcon={this.enableIcon()}
          deleteBlock={this.deleteBlock()}
          blockUp={this.blockUp()}
          blockDown={this.blockDown()}
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
          id={1010}
          editor={true}
          enableIcon={this.enableIcon()}
          deleteBlock={this.deleteBlock()}
          blockUp={this.blockUp()}
          blockDown={this.blockDown()}
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
            "text=(boolean)",
            "textType=(overlay, under)"
          ]}
          title="Grid"
        />
        <Grid
          id={1010}
          editor={true}
          enableIcon={this.enableIcon()}
          deleteBlock={this.deleteBlock()}
          blockUp={this.blockUp()}
          blockDown={this.blockDown()}
          data={this.state.grid}
          columns="4"
          gridGap="10px"
          height="400px"
          imageHeight="200px"
          overlay={true}
          fullWidth={false}
          text={true}
          type="icon"
          textType="under"
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
          id={1010}
          editor={true}
          imageType="cover"
          deleteBlock={this.deleteBlock()}
          blockUp={this.blockUp()}
          blockDown={this.blockDown()}
          enableIcon={this.enableIcon()}
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
        <Contact
          enableIcon={this.enableIcon()}
          deleteBlock={this.deleteBlock()}
          blockUp={this.blockUp()}
          blockDown={this.blockDown()}
          edit={true}
          image="https://source.unsplash.com/random"
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
