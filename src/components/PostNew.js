import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPosts} from '../actions/index';

class PostNew extends Component {
    renderField(field) {

        const {meta} = field;
        const className = `form-group ${meta.touched && meta.error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-danger">
                    {meta.touched ? meta.error: ''}
                </div>
            </div>
            )
    }

    onSubmit(values) {
        this.props.createPosts(values, ()=> {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;
        return (
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        label="Title"
                        name="title"
                        component={this.renderField}
                    />
                    <Field
                        label="Categories"
                        name="categories"
                        component={this.renderField}
                    />
                    <Field
                        label="Content"
                        name="content"
                        component={this.renderField}
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link className="btn btn-danger" to="/">Cancle</Link>
                </form>
            )
    }
}

function validate(values) {
    const error = {};

    if(!values.title) {
        error.title = "Enter the Title";
    }

    if(!values.categories) {
        error.categories = "Enter categories please";
    }

    if(!values.content) {
        error.content = "Enter content please";
    }

    return error;
}

export default reduxForm({
    validate,
    form: 'PostNewForm'
})(
connect(null, {createPosts})(PostNew)
)