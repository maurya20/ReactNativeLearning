import React from "react";

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
        <h1>Trending Blogs </h1>
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
                  <p>{blog.heading}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Blogs;
