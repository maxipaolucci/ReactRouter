import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchPost} from '../actions';

class PostsShow extends Component {
  
  componentDidMount() {
    //this.props.match.params.id provided by react router (when I added this comp to a route in src/index.js)
    const { id } = this.props.match.params
    this.props.fetchPost(id);
  }

  render() {
    return (
      <div>
        Posts show!
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) { //ownProps is the props object of the Component (PostsShow)
  return { post: posts[ownProps.match.params.id] }; //this way we make our component only works with the post we are showing instead of using the whole list of posts returned by fetchPost
}
export default connect(mapStateToProps, { fetchPost })(PostsShow);