import React, { Component } from "react";
import axios from "axios";

class DetailBlog extends Component {
  state = {
    detailblog: {},
  };

  componentDidMount() {
    // console.log(this.props.match.params)
    // const blogid= this.props.params.blogid;
    const a = window.location.search
    const urlParams = new URLSearchParams(a);
    // console.log(urlParams.get)
    const myParam = urlParams.get('id');
    console.log(myParam)
    axios.get(`http://127.0.0.1:8000/mapi/${myParam}`).then((res) => {
      this.setState({
        detailblog: res.data,
      });
    });
  }
  render() {
    return (
      <div className="container">
        <h3>Deatiled Blog </h3>
        <img
          src={this.state.detailblog.pic}
          alt="Lights"
          style={{ width: "80%", height: "400px" }}
        ></img>
        <h4> {this.state.detailblog.heading} </h4>
    <p>{this.state.detailblog.blog}</p>
      </div>
    );
  }
}

export default DetailBlog;
