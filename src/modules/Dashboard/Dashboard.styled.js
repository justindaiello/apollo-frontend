import styled from "styled-components";

export const StyledDashboardWrapper = styled.div`
  background: ${({ theme }) => theme.darkBlue};
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
`;
