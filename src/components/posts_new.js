import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    render() {
        return (
            <form>
                <Field 
                    name="title"
                />
            </form>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm' //this map allows to put several forms in the same component . Make sure that PostsNewForm string is unique
})(PostsNew);