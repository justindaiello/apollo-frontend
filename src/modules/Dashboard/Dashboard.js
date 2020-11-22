import React from "react";

import SlugForm from "../../components/SlugForm";
import { StyledDashboardWrapper } from "./Dashboard.styled";

function Dashboard() {
  return (
    <StyledDashboardWrapper>
      <SlugForm />
    </StyledDashboardWrapper>
  );
}

export default Dashboard;
