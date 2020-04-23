import React from "react";
import CloudsImage from "../../assets/clouds.jpg";
import ClearImage from "../../assets/clear.jpg";
import DrizzleImage from "../../assets/drizzle.jpg";
import RainImage from "../../assets/rain.jpg";
import SnowImage from "../../assets/snow.jpg";
import ThunderstormImage from "../../assets/thunderstorm.jpg";
import Clock from "react-clock";
import {
  CurrentWeatherImage,
  ContentWrapper,
  StyledCard,
  StyledHeader,
  ClockWrapper,
} from "./StyledComponents";

function CurrentWeather({
  main,
  description,
  temperature,
  sensedTemperature,
  sunrise,
  sunset,
}) {
  const renderWeatherImage = () => {
    let imageSrc = "";
    switch (main) {
      case "Thunderstorm":
        imageSrc = ThunderstormImage;
        break;
      case "Drizzle":
        imageSrc = DrizzleImage;
        break;
      case "Rain":
        imageSrc = RainImage;
        break;
      case "Snow":
        imageSrc = SnowImage;
        break;
      case "Clear":
        imageSrc = ClearImage;
        break;
      default:
        imageSrc = CloudsImage;
        break;
    }

    return <CurrentWeatherImage src={imageSrc} alt="Current weather icon" />;
  };

  return (
    <StyledCard variant="outlined">
      <ContentWrapper>
        {renderWeatherImage()}
        <StyledHeader>{main}</StyledHeader>
        <span>
          {Math.round(temperature)}°C (feels like{" "}
          {Math.round(sensedTemperature)}
          °C)
        </span>
        <ClockWrapper>
          <div id="sunriseClock">
            <h4>Sunrise</h4>
            <Clock size={100} value={new Date(sunrise)} />
            <span>{sunrise.split(" ")[1]}</span>
          </div>
          <div id="sunsetClock">
            <h4>Sunset</h4>
            <Clock size={100} value={new Date(sunset)} />
            <span>{sunset.split(" ")[1]}</span>
          </div>
        </ClockWrapper>
      </ContentWrapper>
    </StyledCard>
  );
}

export default CurrentWeather;
