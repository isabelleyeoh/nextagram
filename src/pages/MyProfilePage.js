import React, { Component } from 'react';
import axios from 'axios';




class App extends React.Component {
  state = {

  }

  getImages = () = {

  axios({
    method: 'get',
    url: `https://insta.nextacademy.com/api/v1/images/me`,
    header: {Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDM4MjcxOTksImlhdCI6MTU0Mzc0MDc5OSwic3ViIjoyfQ.gAwzdbi2pizMN56_tDD_FEkzA9dwEpGRwszZmf-HHcs}
    data: {
       
    }
  })
  .then(result => {
    console.log(result)
    localStorage.setItem('jwt', result.data.auth_token)
    this.setState ({
      
      })
 
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

render(){
  const {users, isLoading} = this.state
  return (
    <>
    
  </>
  )
 
}
}



export default App;
