import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';

import InlineError from '../components/InlineError';
import Text from '../components/Text';
import Input from '../components/Input';
import Button from '../components/Button';

class SignUpForm extends React.Component {
  state = {
    data: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
      topScore: 0
    },
    loading: false,
    errors: {}
  };
  // onChange function is universal event handler
  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data);
      alert('You have been registered successfully');
      this.props.history.push('/login');
    }
  };

  validate = data => {
    const errors = {};
    const phoneValidation = /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/;

    if (!data.username) errors.username = 'Username is required';
    if (data.username.length > 21)
      errors.username = 'Your username is too long';
    if (!data.phoneNumber) errors.phoneNumber = 'Phone number is required';
    if (!data.phoneNumber.match(phoneValidation))
      errors.phoneNumber = 'Invalid phone number';
    if (!data.email) errors.email = 'Email is required';
    if (!/^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/.test(data.email))
      errors.email = 'Invalid email';
    if (localStorage.getItem(data.email))
      errors.email = 'That email is already being used';
    if (!data.password) errors.password = 'Password is required';
    if (!data.confirmPassword) errors.confirmPassword = 'Password is required';
    if (!(data.password === data.confirmPassword))
      errors.confirmPassword = 'Password does not match';
    return errors;
  };

  render() {
    const { data, errors } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <Centered>
          <StyledText size="m" bold color="#FE7483">
            Sign up
          </StyledText>
          <InputContainer>
            <StyledInputUser
              name="username"
              type="text"
              placeholder="username"
              value={data.username}
              onChange={this.onChange}
            />
            {errors.username && <InlineError text={errors.username} />}
          </InputContainer>
          <InputContainer>
            <StyledInputUser
              name="email"
              type="text"
              placeholder="example@exmaple"
              value={data.email}
              onChange={this.onChange}
            />
            {errors.email && <InlineError text={errors.email} />}
          </InputContainer>
          <InputContainer>
            <StyledInputUser
              name="phoneNumber"
              type="text"
              placeholder="phoneNumber"
              value={data.phoneNumber}
              onChange={this.onChange}
            />
            {errors.phoneNumber && <InlineError text={errors.phoneNumber} />}
          </InputContainer>
          <InputContainer>
            <StyledInputPassword
              name="password"
              type="password"
              placeholder="password"
              value={data.password}
              onChange={this.onChange}
            />
            {errors.password && <InlineError text={errors.password} />}
          </InputContainer>
          <InputContainer marginBottom="2rem">
            <StyledInputPassword
              name="confirmPassword"
              type="password"
              placeholder="confirm password"
              value={data.confirmPassword}
              onChange={this.onChange}
            />
            {errors.confirmPassword && (
              <InlineError text={errors.confirmPassword} />
            )}
          </InputContainer>
          <Button text="Sign up" />
        </Centered>
      </form>
    );
  }
}

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInputUser = styled(Input)`
  margin-bottom: 0.25rem;
`;

const StyledInputPassword = styled(Input)`
  margin-bottom: 0.25rem;
`;

const InputContainer = styled.div`
  position: relative;
  margin-bottom: ${({ marginBottom }) => marginBottom || '0rem'};
`;

const StyledText = styled(Text)`
  margin-bottom: 2rem;

  @media only screen and (min-width: 641px) and (max-width: 1024px) {
    margin-bottom: 1.5rem;
  }

  @media only screen and (min-width: 320px) and (max-width: 640px) {
    margin-bottom: 1rem;
  }
`;

export default withRouter(SignUpForm);
