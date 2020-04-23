import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import "./App.scss";
import AppLoading from "./components/AppLoading";
import LocationAccessDialog from "./components/LocationAccessDialog";
import TimeFormatter from "./utils/TimeFormatter";
import CurrentWeather from "./components/CurrentWeather/index";
import SevenDaysChart from "./components/SevenDaysChart";

function App() {
  const [fetching, setFetching] = useState(true);
  const [coords, setCoords] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [chartData, setChartData] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (response) => {
        setCoords({
          latitude: response.coords.latitude,
          longitude: response.coords.longitude,
        });
      },
      (err) => {
        setShowDialog(true);
        setFetching(false);
      }
    );
  }, []);

  useEffect(() => {
    if (coords && coords.latitude && coords.longitude) {
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.latitude}&lon=${coords.longitude}&appid=607a117b718e4cef7f3e7a0634cfc6c5&units=metric`
      )
        .then((res) => res.json())
        .then((result) => {
          const { current, daily } = result;
          setCurrentWeather({
            sunrise: TimeFormatter.unixToHumanReadable(
              current.sunrise,
              "YYYY-MM-DD HH:mm:ss"
            ),
            sunset: TimeFormatter.unixToHumanReadable(
              current.sunset,
              "YYYY-MM-DD HH:mm:ss"
            ),
            temperature: current.temp,
            sensedTemperature: current.feels_like,
            pressure: current.pressure,
            humidity: current.humidity,
            windSpeed: current.wind_speed,
            snow: current.snow,
            rain: current.rain,
            main: current.weather[0].main,
            description: current.weather[0].description,
          });
          const cData = daily.map((d) => ({
            day: TimeFormatter.unixToHumanReadable(d.dt, "YYYY-MM-DD"),
            "Day temperature": d.temp.day,
            "Night temperature": d.temp.night,
            "Day temperature sensed": d.feels_like.day,
            "Night temperature sensed": d.feels_like.night,
          }));
          setChartData(cData);
        });
    }
  }, [coords]);

  useEffect(() => {
    if (currentWeather) {
      setFetching(false);
    }
  }, [currentWeather]);

  const renderContent = () => {
    if (fetching) {
      return <AppLoading />;
    }

    if (showDialog) {
      return <LocationAccessDialog show={showDialog} />;
    }

    const {
      sunrise,
      sunset,
      temperature,
      sensedTemperature,
      main,
      description,
    } = currentWeather;

    return (
      <Box p={2}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <CurrentWeather
              sunrise={sunrise}
              sunset={sunset}
              temperature={temperature}
              sensedTemperature={sensedTemperature}
              main={main}
              description={description}
            />
          </Grid>
          <Grid item xs={10}>
            {chartData && <SevenDaysChart data={chartData} />}
          </Grid>
        </Grid>
      </Box>
    );
  };

  return <div className="App">{renderContent()}</div>;
}

export default App;
