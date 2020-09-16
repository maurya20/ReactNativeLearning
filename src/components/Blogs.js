import React from "react";
import { Link } from "react-router-dom";


class Blogs extends React.Component {
  state = {
    blogs: [],
  };
  componentDidMount() {
    fetch("http://127.0.0.1:8000/mapi/")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ blogs: data });
        console.log(this.state.blogs);
      })
      .catch((err)=>console.log(err,"Error"));
  }
  render() {
    return (
      <div className="container">
         
          
        <h1 style={{textAlign:"center", color:"#990099"}}>Trending Blogs</h1>
        <div className="row">
          {this.state.blogs.map((blog) => (
             
            <div className="col-md-4">
              <div className="thumbnail">
                <img
                  src={blog.pic}
                  alt="Lights"
                  style={{ width: "100%" }}
                ></img>
                <div className="caption">
                <Link to={`/detail?id=${blog.id}`}>
                <h3>{blog.heading}</h3>
                </Link>
                  
                </div>
                  <p>Published on: {blog.date}</p>
              </div>
            </div>
           
          ))}
        </div>
      </div>
    );
  }
}

export default Blogs;
