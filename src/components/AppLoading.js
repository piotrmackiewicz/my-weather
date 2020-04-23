import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

const FullHeightContainer = styled(Grid)`
  height: 100vh;
`;

const CenteredContentColumn = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppLoading = () => (
  <FullHeightContainer container>
    <CenteredContentColumn item xs={12}>
      <CircularProgress />
    </CenteredContentColumn>
  </FullHeightContainer>
);

export default AppLoading;
