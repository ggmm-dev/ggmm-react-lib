import React, { Component } from "react";
import styled from "styled-components";
import _ from "lodash";

import { slide as MobileBurger } from "react-burger-menu";

const MobileMenu = styled.div`
    .bm-item.closer {
      position: absolute;
      top: 20px;
      right: 40px;
      cursor: pointer;
      color: white;
      font-size: 24px;
    }
    img {
      filter: brightnees;
    }
    .bm-overlay {
      top: 0;
      left: 0;
    }

    .bm-menu-wrap {
      top: 0;
      left: 0;
    }

    .bm-burger-button {
      display: none;
    }
  `,
  Nav = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  Burger = styled.div`
    .burger {
      display: block;
    }
    @media screen and (min-width: 1024px) {
      .burger {
        display: none !important;
      }
    }
  `,
  SocialBar = styled.div`
    width: inherit;
    align-items: center;
    display: none;
    @media screen and (min-width: 1024px) {
      display: flex !important;
    }
  `,
  Menu = styled.div`
    display: none;
    align-items: center;
    @media screen and (min-width: 1024px) {
      display: flex !important;
    }
  `;

export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      isTop: true,
      menuOpen: false
    };
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu(e) {
    e.preventDefault();
    this.setState({ menuOpen: false });
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  renderMobile() {
    return (
      <MobileMenu>
        <MobileBurger
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
        >
          <div className="closer">
            <i className="far fa-times" onClick={e => this.toggleMenu(e)} />
          </div>
          {this.renderLinks()}
        </MobileBurger>
      </MobileMenu>
    );
  }

  renderSocial() {
    const props = this.props,
      SocialIcon = styled.div`
        margin-right: 10px;
        &:last-child {
          margin-right: 0px;
        }
        i {
          color: ${props.iconColor};
        }
      `;
    return _.map(props.social, sm => {
      if (sm.type === "twitter") {
        return (
          <SocialIcon>
            <a href={sm.link} target="_blank" noreferrer noopener>
              <i className="fab fa-twitter" />
            </a>
          </SocialIcon>
        );
      }
      if (sm.type === "instagram") {
        return (
          <SocialIcon>
            <a href={sm.link} target="_blank" noreferrer noopener>
              <i className="fab fa-instagram" />
            </a>
          </SocialIcon>
        );
      }
      if (sm.type === "facebook") {
        return (
          <SocialIcon>
            <a href={sm.link} target="_blank" noreferrer noopener>
              <i className="fab fa-facebook" />
            </a>
          </SocialIcon>
        );
      }
      if (sm.type === "youtube") {
        return (
          <SocialIcon>
            <a href={sm.link} target="_blank" noreferrer noopener>
              <i className="fab fa-youtube" />
            </a>
          </SocialIcon>
        );
      }
      if (sm.type === "email") {
        return (
          <SocialIcon>
            <a href={"mailto:" + sm.link} target="_blank" noreferrer noopener>
              <i className="far fa-envelope" />
            </a>
          </SocialIcon>
        );
      }
      if (sm.type === "linkedin") {
        return (
          <SocialIcon>
            <a href={sm.link} target="_blank" noreferrer noopener>
              <i className="fab fa-linkedin" />{" "}
            </a>
          </SocialIcon>
        );
      }
    });
  }

  renderLinks() {
    const props = this.props,
      MenuItem = styled.a`
        display: inline;
        margin-right: 20px;
        text-decoration: none;
        color: ${props.navColor};
      `;
    return _.map(props.nav, nav => {
      return <MenuItem href={nav.link}>{nav.name}</MenuItem>;
    });
  }

  renderNav() {
    const props = this.props,
      Logo = styled.div`
        img {
          width: ${props.logoWidth};
        }
      `;
    if (props.type === "left") {
      return (
        <Nav>
          <div className="left">
            <Logo>
              <a href="/">
                <img className={props.logoClass} src={props.logo} alt="Logo" />
              </a>
            </Logo>
          </div>
          <div style={{ display: "flex" }} className="right">
            <Menu>{this.renderLinks()}</Menu>
            <SocialBar>{this.renderSocial()}</SocialBar>
            <Burger>
              <div className="burger">
                <i className="far fa-bars" onClick={e => this.toggleMenu(e)} />
              </div>
            </Burger>
          </div>
        </Nav>
      );
    }
    if (props.type === "center") {
      return (
        <Nav>
          <div className="left">
            <Logo>
              <a href="/">
                <img className={props.logoClass} src={props.logo} alt="Logo" />
              </a>
            </Logo>
          </div>
          <div className="center">
            <Menu>{this.renderLinks()}</Menu>
          </div>
          <div style={{ display: "flex" }} className="right">
            <Burger>
              <div className="burger">
                <i className="far fa-bars" onClick={e => this.toggleMenu(e)} />
              </div>
            </Burger>
            <SocialBar>{this.renderSocial()}</SocialBar>
          </div>
        </Nav>
      );
    }

    if (props.type === "mobile") {
      return (
        <Nav>
          <div className="left">
            <Logo>
              <img className={props.logoClass} src={props.logo} alt="Logo" />
            </Logo>
          </div>

          <div style={{ display: "flex" }} className="right">
            <div className="burger">
              <i className="far fa-bars" onClick={e => this.toggleMenu(e)} />
            </div>
          </div>
        </Nav>
      );
    }
  }
  render() {
    const Container = styled.div`
      width: 100%;
      ${this.props.fixed && "position: fixed"}
      background: ${this.props.backgroundColor};
      padding: ${this.props.padding};
      .bm-menu {
        transition: 0.4s;
        background: ${
          this.props.mobileBgColor ? this.props.mobileBgColor : "black"
        };
        overflow: hidden !important;
        h4 {
          color: white;
          text-transform: capitalize;
          margin: 0;
          font-family: $worksans;
          padding: 8px 0;
          font-size: 30px;
          font-weight: 400;
        }
        nav.bm-item-list {
          padding: 70px 0 0 50px;
        }
        a {
          color: white;
          padding: 10px;
        }
      }
    `;
    return (
      <Container>
        {this.renderNav()} {this.renderMobile()}
      </Container>
    );
  }
}
