import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions";

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
    const {
      meta: { touched, error }
    } = field; //this line is a neested destructuring and geting out touched and error from field.meta.touched and field.meta.error
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push("/"); //history was populated in this component props (as well as many other things) by the Router component in the src/index.js file when we attached thsi component to a route
    });
  }

  render() {
    const { handleSubmit } = this.props; //this handleSubmit prop was added by reduxForm when we bind it to the component at the bottom of this file.
    return (
      // when the user submit the form reduxform is going to check that the state of the form is valid, via setting the fields in touched state and then if all good
      // call the onSubmit callback
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label="Title" name="title" component={this.renderField} />

        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />

        <Field
          label="Post content"
          name="content"
          component={this.renderField}
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
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

  if (values.title && values.title.length <= 3) {
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
  form: "PostsNewForm" //this map allows to put several forms in the same component . Make sure that PostsNewForm string is unique
})(
  connect(
    null,
    { createPost }
  )(PostsNew) //this is how we use connect in a reduxForm way
);
