import React, { Component } from 'react';
import axios from 'axios';
import Image from "react-graceful-image";

  // stateless component

  export default class UserImages extends React.Component{

    state = {
        userImages:[]
    }

componentDidMount = () => {
    const {userId} = this.props

    axios({
        method: 'get',
        url: `https://insta.nextacademy.com/api/v1/images?userId=${userId}`,
      })
      .then(result => {
        // If successful, we do stuffs with 'result'
        this.setState({
          userImages:result.data
      })
    })
}



    
render(){
    const {userImages} = this.state
    
 return (
    <div>
    {
    userImages.map(userImages => 
    <div key={userImages} id="userImages">
      <Image src = {userImages} 
      width="250"
      height="250"
      style={{ padding: "20px" }}
      alt="userimages"
      retry={{ count: 10, delay: 2 }}
      />
    </div>
    )
    }

  </div>
 )
}

}
