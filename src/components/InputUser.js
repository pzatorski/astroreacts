import styled from 'styled-components';

const InputUser = styled.input.attrs({
  // we can define static props
  type: 'login',

  // or we can define dynamic ones
  margin: props => props.size || '1em',
  padding: props => props.size || '1em'
})`
  color: #355c7d;
  font-size: 1em;
  border: none;
  border-radius: 5px;
  background-color: rgba(213, 210, 210, 0.7);

  ::placeholder {
    text-align: center;
    color: #ffffff;
  }

  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;
export default InputUser;
