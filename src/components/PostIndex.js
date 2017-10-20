import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';
import _ from 'lodash';
import {Link} from 'react-router-dom';

class PostIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
        console.log(this.props.fetchPosts());
    }
    renderList() {
        return _.map(this.props.posts, post => {
            return (
                    <li className="list-group-item" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                    </li>
                )
        })
    }
    render() {
        console.log(this.props.posts);
        return (
        <div>
        <br/>
            <div className="text-xs-right">
                <Link className="btn btn-primary pull-right" to="/posts/new">New Post</Link>
            </div>
                    <br/>
            <ul>
                {this.renderList()}
            </ul>
        </div>
            )
    };
}
function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps, {fetchPosts})(PostIndex);
