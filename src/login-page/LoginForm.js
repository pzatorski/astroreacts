import React from 'react';
import styled from 'styled-components';

import InlineError from '../components/InlineError';
import Text from '../components/Text';
import Input from '../components/Input';
import Button from '../components/Button';

class LoginForm extends React.Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  };

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
    }
  };

  validate = data => {
    const errors = {};
    if (!data.email) errors.email = 'Email is required';
    if (!/^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/.test(data.email))
      errors.email = 'Invalid email';
    if (!data.password) errors.password = 'Password is required';
    return errors;
  };

  render() {
    const { data, errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <Centered>
          <StyledText size="m" bold color="#FE7483">
            Log in
          </StyledText>
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
          <InputContainer marginBottom="2.5rem">
            <StyledInputPassword
              name="password"
              type="password"
              placeholder="password"
              value={data.password}
              onChange={this.onChange}
            />
            {errors.password && <InlineError text={errors.password} />}
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

export default LoginForm;
