import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { CampaignQuestionForm } from './campaign_question_form'
import { CampaignFormSectionHeading } from './campaign_form_section_heading'

const styles = {
  questionButton: {
    marginTop: 24
  }
}
export class CampaignSurveyForm extends Component {
  render() {
    const { surveys, onAddSurveyAnswer, onEditSurvey, onAddSurvey, customFields, sampleContact} = this.props
    return (
      <div>
        <CampaignFormSectionHeading
          title='What do you want to learn?'
          subtitle='You can add questions and your texters can indicate responses from your contacts. For example, you might want to collect RSVPs to an event or find out whether to follow up about a different volunteer activity.'
        />

        { surveys.map ((survey) => (
          <CampaignQuestionForm
            survey={survey}
            onAddSurveyAnswer={onAddSurveyAnswer}
            onEditSurvey={onEditSurvey}
            customFields={customFields}
            sampleContact={sampleContact}
          />
        ))}
        <RaisedButton
          style={styles.questionButton}
          label="Add question"
          onTouchTap={onAddSurvey}
        />
      </div>
    )
  }
}
