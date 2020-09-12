import React, { Component } from 'react'
import "react-bootstrap"
import { Link } from "react-router-dom";
import './Login.css'



class Login extends Component {
  render() {
    return (
      <div className="container">
	<div className="d-flex justify-content-center h-100">
		<div className="card">
			<div className="card-header">
				<h3>Sign In</h3>
				<div className="d-flex justify-content-end social_icon">
					<span><i className="fab fa-facebook-square"></i></span>
					<span><i className="fab fa-google-plus-square"></i></span>
					<span><i className="fab fa-twitter-square"></i></span>
				</div>
			</div>
			<div className="card-body">
				<form>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-user"></i></span>
						</div>
						<input type="text" className="form-control" placeholder="username"></input>
						
					</div>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-key"></i></span>
						</div>
						<input type="password" className="form-control" placeholder="password"></input>
					</div>
					{/* <div className="row align-items-center remember">
						<input type="checkbox">Remember Me</input>
					</div> */}
					<div className="form-group">
						<button type="submit"  className="btn btn-primary"><h6 style={{color:"white"}}>Login</h6></button>
					</div>
				</form>
			</div>
			<div className="card-footer">
				<div className="d-flex justify-content-center links">
					Don't have an account?<Link to={'/'}>Sign Up</Link>
				</div>
				<div className="d-flex justify-content-center">
					<a href="#">Forgot your password?</a>
				</div>
			</div>
		</div>
	</div>
</div>
    )
  }
}

export default Login




