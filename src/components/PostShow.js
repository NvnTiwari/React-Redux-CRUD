import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions/index';
import {Link} from 'react-router-dom';

class PostShow extends Component{
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    onDeleteClick() {
        const { id } = this.props.match.params;
        this.props.deletePost(id, ()=> {
            this.props.history.push('');
        });
    }
    render() {
        const {post} = this.props;
        if(!post) {
            return (<div>Loading....</div>)
        }

        return (
            <div>
            <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>Delete</button>
            <Link to="/">Back To Main page</Link>
                <h3>{post.title}</h3>
                <h6>{post.categories}</h6>
                <h6>{post.content}</h6>
            </div>
            )
    }
}
function mapStateToProps({posts}, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostShow);