import styled from 'styled-components';

const Button = styled.button`
  display: block;
  border: none;
  border-radius: 5px;
  background: ${({ theme, blank }) => (blank ? 'transparent' : theme.darkBlue)};
  color: ${({ theme, blank }) => (blank ? theme.black : theme.white)};
  transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
  padding: ${({ theme, blank }) => (blank ? 0 : '1rem 3rem')};
  cursor: pointer;

  &:hover,
  &:active {
    background: ${({ theme, blank }) =>
      blank ? 'transparent' : theme.lightBlue};
    color: ${({ theme, blank }) => blank && theme.lightBlue};
    outline: ${({ theme, blank }) => blank && `2px solid ${theme.darkblue}`};
  }
`;

export default Button;
