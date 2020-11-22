import styled from "styled-components";

export const StyledDashboardWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
`;

export const StyledDashBoardCard = styled.div`
  background: ${({ theme }) => theme.white};
  max-width: 1080px;
  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLinkDisplay = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  max-width: 500px;
  width: 100%;
  justify-items: center;

  textarea {
    border: none;
    resize: none;
    max-width: 500px;
    width: 100%;
    text-align-last: center;
  }
`;
