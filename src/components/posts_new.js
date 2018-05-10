import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

    /**
     * this method is call by the Field component, and it will provide the field argument
     * @param {*} field . Provided by redux-form to connect the html input with the Field events
     * 
     * doing { ...field.input } is the same (shortcut) to do something like this manually:
     * onChange={field.input.onChange}
     * onFocus={field.input.onFocus}
     * onBlur={field.input.onBlur}
     * 
     * so field can handler the events on the input
     */
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    { ...field.input }
                />
            </div>
        );
    }

    render() {
        return (
            <form>
                <Field 
                    label="Title"
                    name="title" 
                    component={ this.renderField }
                />

                <Field 
                    label="Categories"
                    name="categories" 
                    component={ this.renderField }
                />

                <Field 
                    label="Post content"
                    name="content" 
                    component={ this.renderField }
                />
            </form>
        );
    }
}

/**
 * This function is to validate the form. 
 * 
 * @param {*} values . Contains all the values of the form
 */
function validate(values) {
    const errors = {};

    //validae the inputs from 'values'
    if (!values.title) {
        errors.title = "Enter a title!";
    }

    if (values.title.lenght <= 3) {
        errors.title = "Enter a title longer than 3 characters!";
    }

    if (!values.categories) {
        errors.categories = "Enter categories!";
    }

    if (!values.content) {
        errors.content = "Enter content!";
    }

    //return the errors. If empty then redux-form understand that the form is fine to submit, however if there is any property there then redux-form asumes form is invalid
    return errors;

}

export default reduxForm({
    validate,
    form: 'PostsNewForm' //this map allows to put several forms in the same component . Make sure that PostsNewForm string is unique
})(PostsNew);