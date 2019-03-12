import React, { Component } from "react";

class Home extends Component {
  state = {
    loggedIn: false
  };

  render() {
    return (
        <div>
          <img src="FlowSentialWave.jpg" alt="japanese_wave" width="500" height="600"/>

<div class="col-md-4 LOGIN">
 	<br/>
	<button type="button" class="btn btn-primary">Create Account</button>
	<button type="button" class="btn btn-secondary">Login</button>

	<br/>


<title>FlowSential Welcome</title>
	
	
  </div>
        </div>
    );
  }
}

export default Home;


{/* 
FS.css body{ max-width: 1000px; margin: auto; background-color: pink; } h1{ color: deeppink; text-align: center; } body{} img { display: block; margin-left: auto; margin-right: auto;

} .LOGIN {text-align: center;} */}