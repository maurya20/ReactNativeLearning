import React from "react";
import axios from "axios";



class Blogs extends React.Component {
  state = {
    todos: []
  }
  componentDidMount() {
    fetch('http://127.0.0.1:8000/mapi/')
    .then(res => res.json())
    .then((data) => {
      this.setState({ todos: data })
      console.log(this.state.todos)
    })
    .catch(console.log)
  }
  render() {

    return (
       <div className="container">
        <h1>Trending Blogs </h1>
        {this.state.todos.map((todo) => (
  
              <h5>{todo.heading}</h5>
        
        ))
  }
            
      </div>
    );
  }
}

export default Blogs;
 