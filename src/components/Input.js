import styled from 'styled-components';

const Input = styled.input.attrs({
  margin: props => props.size || '2rem',
  padding: props => props.size || '0.5rem'
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

  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;

export default Input;
