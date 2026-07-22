import { Component } from "react";
import Post from "./Post";

class Posts extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }
  componentDidMount() {

  const posts = [
    new Post(1, "React Introduction", "Learning React Components"),
    new Post(2, "Component Lifecycle", "Understanding componentDidMount"),
    new Post(3, "React State", "Managing data using state")
  ];

  this.setState({
    posts: posts
  });
}
render() {
  return (
    <div>
      <h2>Blog Posts</h2>

      {this.state.posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

}

export default Posts;