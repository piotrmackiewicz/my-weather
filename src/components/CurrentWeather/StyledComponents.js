import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { PRIMARY_COLOR } from "../../constants/colors";

const CurrentWeatherImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ContentWrapper = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCard = styled(Card)`
  border-color: ${PRIMARY_COLOR} !important;
  height: 100%;
`;

const StyledHeader = styled.h3`
  margin-bottom: 5px;
`;

const ClockWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

export {
  CurrentWeatherImage,
  ContentWrapper,
  StyledCard,
  StyledHeader,
  ClockWrapper,
};
