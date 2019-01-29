import React, { Component } from 'react';
import {Spinner} from 'reactstrap';


const Loader = (props) => {
  const {type, color} = props
  const loaderStyle = {
    type, 
    color
  }

  return (
    <div>
        <Spinner style={loaderStyle} />
    </div>
  
  )
}


export default Loader;
