import React, { Component } from 'react'
import styled from 'styled-components'
import Editor from './Editor'

export default class Mosaic extends Component {
  renderA() {
    const props = this.props

    const Block = styled.div`
      background: url(${props.aData.image}) center / cover;
      grid-area: a;
      position: relative;
      .overlay{
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1;
      }
      .title{
        position: relative;
        top: 50%;
        z-index: 2;
        text-align: center;
        color: white;
        translateY(-50%);
      }
    `

    return (
      <Block>
        {props.overlay && <div className='overlay' />}
        <div className='title'>{props.aData.title}</div>
      </Block>
    )
  }

  renderB() {
    const props = this.props

    const Block = styled.div`
      background: url(${props.bData.image}) center / cover;
      grid-area: b;
      position: relative;
      .overlay{
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1;
      }
      .title{
        position: relative;
        top: 50%;
        z-index: 2;
        color: white;
        text-align: center;
        translateY(-50%);
      }
    `

    return (
      <Block>
        {props.overlay && <div className='overlay' />}
        <div className='title'>{props.bData.title}</div>
      </Block>
    )
  }

  renderC() {
    const props = this.props

    const Block = styled.div`
      background: url(${props.cData.image}) center / cover;
      grid-area: c;
      position: relative;
      .overlay{
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1;
      }
      .title{
        position: relative;
        top: 50%;
        z-index: 2;
        color: white;
        text-align: center;
        translateY(-50%);
      }
    `

    return (
      <Block>
        {props.overlay && <div className='overlay' />}
        <div className='title'>{props.cData.title}</div>
      </Block>
    )
  }
  render() {
    const props = this.props

    const Container = styled.div`
      display: grid;
      position: relative;
      grid-gap: ${props.gridPadding}
      height: ${props.height}
      grid-template-areas: 'a b' 'a c';
    `
    return (
      <Container>
        {this.props.editor && <Editor id={this.props.id} enableIcon={this.props.enableIcon} />}

        {this.renderA()}
        {this.renderB()}
        {this.renderC()}
      </Container>
    )
  }
}
