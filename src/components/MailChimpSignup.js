import React, { Component } from 'react'
import styled from 'styled-components'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

export default class MailChimpSignup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emailValue: '',
      fNameValue: '',
      lNameValue: ''
    }
  }

  render() {
    const props = this.props

    const MailChimp = styled.div`
        background: ${props.backgroundColor};
        padding: ${props.padding};
        .container {
          ${props.center && 'text-align: center'}
          max-width: ${props.maxWidth};
        }
        div#mc_embed_signup {
          margin-top: 20px;
          ${props.center && 'display: flex; justify-content: center;'}
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
      `

    const SimpleForm = () => <MailchimpSubscribe url={props.mcUrl} />
    return (
      <MailChimp className={props.customClass}>
        <div className='opt-in'>
          <div className='container'>
            {this.props.children}

            <MailchimpSubscribe
              url={props.mcUrl}
              render={({ subscribe, status, message }) => (
                <div>
                  <SimpleForm onSubmitted={formData => subscribe(formData)} />
                  {status === 'sending' && (
                    <div style={{ color: 'blue' }}>swaiting...</div>
                  )}
                  {status === 'error' && (
                    <div
                      style={{ color: 'red' }}
                      dangerouslySetInnerHTML={{ __html: message }}
                    />
                  )}
                  {status === 'success' && (
                    <div style={{ color: 'green' }}>Subscribed !</div>
                  )}
                </div>
              )}
            />
          </div>
        </div>
      </MailChimp>
    )
  }
}
