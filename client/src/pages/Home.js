import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
export default class Home extends Component {
  state = {
    loggedIn: false
  };

  render() {
    return (
        <div>
          <img src="FlowSentialWave.jpg" alt="japanese_wave" width="500" height="600"/>

<div class="col-md-12 LOGIN">
 	<br/>
   <Jumbotron>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
	<button type="button" class="btn btn-primary">Create Account</button>
  <br/>
	<button type="button" class="btn btn-secondary">Login</button>  </p>
</Jumbotron>;
	

	<br/>


<title>FlowSential Welcome</title>
	
	
  </div>
        </div>
    );
  }
}


{/* 
FS.css body{ max-width: 1000px; margin: auto; background-color: pink; } h1{ color: deeppink; text-align: center; } body{} img { display: block; margin-left: auto; margin-right: auto;

} .LOGIN {text-align: center;} */}