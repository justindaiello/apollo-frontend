import styled from 'styled-components';

export const StyledDashboardWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
`;

export const StyledDashboardCard = styled.div`
  background: ${({ theme }) => theme.white};
  max-width: 1080px;
  width: 100%;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.2s;
`;

export const StyledLinkItem = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  max-width: 500px;
  width: 100%;
  border: ${({ theme }) => `2px solid ${theme.darkBlue}`};
  padding: 0.375rem;
  border-radius: 5px;
  position: relative;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  min-height: ${({ isVisible }) => (isVisible ? '40px' : 0)};
  height: ${({ isVisible }) => (isVisible ? '100%' : 0)};

  p:first-of-type {
    max-width: 150px;
  }

  p {
    display: inline-block;
    align-self: center;
    margin: 0;
    overflow: hidden;
    align-self: center;
    text-overflow: ellipsis;
  }

  button {
    justify-self: flex-end;
  }

  span {
    position: absolute;
    color: ${({ theme }) => theme.success};
    left: 0;
    bottom: -25px;
  }

  @media (max-width: 700px) {
    p:first-of-type {
      grid-row: 1;
      justify-self: start;
    }

    p:last-of-type {
      grid-row: 2;
      justify-self: start;
    }

    button {
      grid-row: 1 / 3;
      grid-column: 3;
    }
  }
`;
