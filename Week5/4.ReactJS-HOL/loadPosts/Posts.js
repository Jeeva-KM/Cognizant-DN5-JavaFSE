import { Component } from "react";
import Post from "./Post";

class Posts extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  loadPosts() {

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {

        const posts = data.map(post =>
          new Post(post.id, post.title, post.body)
        );

        this.setState({
          posts: posts
        });

      });

  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert("An error occurred in the component.");
    console.error(error);
    console.error(info);
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