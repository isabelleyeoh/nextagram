import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Form, Label, Input } from 'reactstrap';
import axios from 'axios';
import MyProfilePage from '../pages/MyProfilePage'

class Login extends React.Component { 

  state = {
    email: "",
    password: "", 
    response:"",
    hasErrors: false,
    statusLogin: false

  }; 

  submitLogin = (e) => {
    
    e.preventDefault();

    axios({
      method: 'post',
      url: `https://insta.nextacademy.com/api/v1/login`,
      data: {
          email: this.state.email,
          password: this.state.password       
      }
    })
    .then(result => {
      console.log(result)
      localStorage.setItem('jwt', result.data.auth_token)
      this.setState ({
        response: result.data.message, 
        statusLogin: true
        })
        
        this.props.toggle();
        window.alert (this.state.response)

    })
    .catch(error => {
        // If unsuccessful, we notify users what went wrong
        console.log('ERROR: ', error)
        this.setState({
          hasErrors: true
        })
        window.alert("unsuccessful login")
      });

  }

  loginSuccessful = () => {
      this.setState ({
        statusLogin: !this.state.statusLogin
      })
      
  }

  handleChange = (e) => {
  
      this.setState ({
          [e.target.name]: e.target.value
      })
  }

  validateEmail = () => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(this.state.email);
  }

  render() {
     
      const {toggle, isOpen, signupToggle, showSignup} = this.props;
      const {statusLogin} = this.state


    return (

        <Modal isOpen={!showSignup} toggle={toggle}>
          <ModalHeader toggle={toggle}>Log in</ModalHeader>
          <ModalBody>
          <Form>
           <FormGroup>
             <Label for="exampleEmail">Email</Label>
             <Input type="email" name="email" id="exampleEmail" placeholder="email" value={this.state.email} onChange={this.handleChange}/>
           </FormGroup>
           <FormGroup>
             <Label for="examplePassword">Password</Label>
             <Input type="password" name="password" id="examplePassword" placeholder="password" value={this.state.password} onChange={this.handleChange}/>
           </FormGroup>
  
         </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={signupToggle}>Show Sign up</Button>
            <Button color="primary"  onClick={this.submitLogin} disabled={this.state.email && this.state.password && this.validateEmail()? false:true}>Login</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>

        
        </Modal>
        
    );
  }
}

export default Login;


