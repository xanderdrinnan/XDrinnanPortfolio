import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import { Button, Form, FormGroup, Input } from 'reactstrap'
import "./contact.css"
import "./fonts.css"

class ContactForm extends Component {
  state = {
    name: '',
    message: '',
    contactInfo: '',
    submitText: 'Send'
  } 

 changeText = (submitText) => {
   this.setState({submitText});
 }

  handleSubmit(e) {
    e.preventDefault()    
    const { name, email, message } = this.state    
    let templateParams = {
      name: name,
      message: message,
      contactInfo: email
     }     
     
     emailjs.send(
      'gmail',
      'template_SFfj7gWo',
       templateParams,
      'user_HRaJIcDp1a9rQTY7qQF7u'
     )     
     
    this.resetForm()
 }   resetForm() {
    this.setState({
      name: '',
      message: '',
    })
  }handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  } 
  
  render() {
    const{submitText} = this.state;

    return (
      <>
      <div className="contactContainer">
          <h1>Get in Touch!</h1>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicEmail">
            <h3>Email</h3>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
              />
            </FormGroup><FormGroup controlId="formBasicName">
            <h3>Name</h3>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
              />
            </FormGroup><FormGroup>
              <h3>Message</h3>
                <textarea
                id="messageBox"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
                />
            </FormGroup><Button variant="primary" type="submit" id="submitBtn" onClick={ () => this.changeText("Sent")}>
              {submitText}
            </Button>
          </Form>
          </div>
      </>
    )
  }
} export default ContactForm