import React, { Component } from "react";
import "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h3>Sign In</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="username"
                  ></input>
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                  ></input>
                </div>
                <div className="row align-items-center remember">
                  <input type="checkbox" />
                  Remember me{" "}
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ margin: "10px" }}
                  >
                    <h6 style={{ color: "white" }}>Login</h6>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center links">
          Don't have an account?<Link to={"/"}>Sign Up</Link>
        </div>
        <div className="d-flex justify-content-center">
          <a href="/home">Forgot your password?</a>
        </div>
      </div>
    );
  }
}

export default Login;
