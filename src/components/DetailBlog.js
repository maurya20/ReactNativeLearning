import React, { Component } from "react";
import axios from "axios";

class DetailBlog extends Component {
  state = {
    blog: {},
  };

  componentDidMount() {
    //  const blogid= this.props.match.params.blog.id;
    axios.get(`http://127.0.0.1:8000/mapi/7`).then((res) => {
      this.setState({
        blog: res.data,
      });
    });
  }
  render() {
    return (
      <div className="container">
        <h3>Deatiled Blog </h3>
        <img
          src={this.state.blog.pic}
          alt="Lights"
          style={{ width: "80%", height: "400px" }}
        ></img>
        <h4> {this.state.blog.heading} </h4>
        <p>{this.state.blog.blog}</p>
      </div>
    );
  }
}

export default DetailBlog;
