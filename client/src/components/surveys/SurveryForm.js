import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import _ from "lodash";
import { Link } from "react-router-dom";

import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";

import formFields from "./fromFields";

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
    // return (
    //   <div>
    //     <Field
    //       label="Survery Title"
    //       type="text"
    //       name="title"
    //       component={SurveyField}
    //     />
    //     <Field
    //       label="Subject Line"
    //       type="text"
    //       name="subject"
    //       component={SurveyField}
    //     />
    //     <Field
    //       label="Email Body"
    //       type="text"
    //       name="body"
    //       component={SurveyField}
    //     />
    //     <Field
    //       label="Recipients List"
    //       type="text"
    //       name="emails"
    //       component={SurveyField}
    //     />
    //   </div>
    // );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat  white-text">
            Cancel
          </Link>
          <button className="teal btn-flat right white-text" type="submit">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });

  //   if (!values.title) {
  //     errors.title = "you must provide a title";
  //   }
  //   if (!values.subject) {
  //     errors.subject = "you must provide a subject";
  //   }
  //   if (!values.body) {
  //     errors.body = "you must provide a body";
  //   }

  return errors;
}

export default reduxForm({
  validate: validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
