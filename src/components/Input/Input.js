import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 40px;
  display: block;
  padding: 0.375rem;
  border: ${({ theme }) => `2px solid ${theme.darkBlue}`};
  color: black;
  transition: border-color 0.15s ease-in-out;
  border-radius: 5px;

  &:focus {
    border-color: ${({ theme }) => theme.lightBlue};
    outline: 0;
  }
`;

export default Input;
