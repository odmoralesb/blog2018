import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TitleContainer, BodyContainer, StyledTextField, SaveButton } from '../styles';



class TagForm extends Component {

  static propTypes = {
    createTag: PropTypes.func.isRequired,
  }

  state = {
    name: '',
    description: '',
  };

  onChange = (value, key) => this.setState({ [key]: value });

  createTag = () => {
    const { createTag } = this.props;
    createTag({ ...this.state });
  }

  validateForm = () => this.state.name !== '';

  render() {
    // console.log(this.state.title);
    return (
      <div>
        <TitleContainer>
          <StyledTextField
            label="Name"
            value={this.state.title}
            onChange={e => this.onChange(e.target.value, 'name')}
            margin="normal"
          />
        </TitleContainer>
        <BodyContainer>
          <StyledTextField
            label="Description"
            value={this.state.body}
            onChange={e => this.onChange(e.target.value, 'description')}
            margin="normal"
            disabled={!this.validateForm()}
          />
        </BodyContainer>
        <div>
          <SaveButton onClick={this.createTag}>Save</SaveButton >
        </div>
      </div>
    );
  }
}

export default TagForm;
