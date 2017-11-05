import styled from 'styled-components';

const InputPassword = styled.input.attrs({
  // we can define static props
  type: 'password',

  // or we can define dynamic ones
  margin: props => props.size || '1em',
  padding: props => props.size || '1em'
})`
  color: #ffffff;
  font-size: 1em;
  border: none;
  border-bottom: 4px solid rgba(213, 210, 210, 0.7);
  background-color: transparent;
  outline: 0;

  ::placeholder {
    text-align: center;
    color: #ffffff;
  }
  transition: all 0.5s;
  transition-timing-function: cubic-bezier(0.2, 3, 0.4, 1);
  user-select: none;

  &:hover {
    transform: scale(1.1, 1.1);
  }

  &:active {
    transform: scale(1.05, 1.05);
  }

  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;

export default InputPassword;
