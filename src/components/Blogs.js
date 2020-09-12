import React, { Fragment } from "react";
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
      .catch(console.log);
  }
  render() {
    return (
      <div className="container">
         
          
        <h1 style={{textAlign:"center", color:"#990099"}}>Trending Blogs</h1>
        <div className="row">
          {this.state.blogs.map((blog) => (
             <React.Fragment key={blog.id}>
             
        
            <div className="col-md-4">
              <div className="thumbnail">
                <img
                  src={blog.pic}
                  alt="Lights"
                  style={{ width: "100%" }}
                ></img>
                <div className="caption">
                <Link to={"/detail"}>
                <h3>{blog.heading}</h3>
                </Link>
                  
                </div>
                  <p>Published on: {blog.date}</p>
              </div>
            </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }
}

export default Blogs;
