import styled from "styled-components";

const Button = styled.button`
  display: block;
  border: none;
  border-radius: 10px;
  background: ${({ theme }) => theme.darkBlue};
  color: ${({ theme }) => theme.white};
  transition: background 0.2s ease-in-out;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover,
  &:active {
    background: ${({ theme }) => theme.lightBlue};
  }
`;

export default Button;
