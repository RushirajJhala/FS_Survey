import React, { Component } from "react";
import { reduxForm } from "redux-form";

import SurveyForm from "./SurveryForm";
import SurveyFormReview from "./SurveyFormReview";

class SurveyNew extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { new: true };
  // }

  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview
          onCancle={() => this.setState({ showFormReview: false })}
        />
      );
    }
    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({ form: "surveyForm" })(SurveyNew);
