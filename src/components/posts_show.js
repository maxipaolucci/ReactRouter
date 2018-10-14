import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost, deletePost } from "../actions";
import { Link } from "react-router-dom";

class PostsShow extends Component {
  componentDidMount() {
    //this.props.match.params.id provided by react router (when I added this comp to a route in src/index.js)
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params; //get it from parmas object (url)
    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back to index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  //ownProps is the props object of the Component (PostsShow)
  return { post: posts[ownProps.match.params.id] }; //this way we make our component only works with the post we are showing instead of using the whole list of posts returned by fetchPost
}
export default connect(
  mapStateToProps,
  { fetchPost, deletePost }
)(PostsShow);
