import { Dimensions, StyleSheet, View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Titlebar from "./Titlebar";
import Today from "./Today";
import CurrentWeather from "./CurrentWeather";
import CurrentTemp from "./CurrentTemp";
import MaxMinTempFeelLike from "./MaxMinTempFeelLike";
import WindSpeed from "./WindSpeed";
import HR from "./HR";
import SmallInfo from "./SmallInfo";
import TodayForecast from "./TodayForecast";
import FiveDayForcast from "./FiveDayForcast";
import axios from "axios";
const { fontScale, height, width, scale } = Dimensions.get("screen");
const sample = require("./sample.json");
const Home = () => {
  const [weatherData, setWeatherData] = useState(sample); //if error
  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=0cc7ec2ce369566bc372b60871cf25ac&lat=10.7777&lon=106.7777&limit=1"
      )
      .then((res) => {
        setWeatherData(res.data);
        console.log("first");
      })
      .catch((err) => {
        console.log("axios err:\n\n", err);
      });
  }, []);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#484B5B", "#2C2D35"]}
        style={styles.background}
      />
      <Titlebar
        city={weatherData.city.name}
        country={weatherData.city.country}
      />
      <Today />
      <View style={{ flexDirection: "row" }}>
        <CurrentWeather icon={weatherData.list[0].weather[0].icon} />
        <CurrentTemp
          temperature={Math.round(weatherData.list[0].main.temp - 273)}
          condition={weatherData.list[0].weather[0].description}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <MaxMinTempFeelLike
          maxTemp={Math.round(weatherData.list[0].main.temp_max - 273)}
          minTemp={Math.round(weatherData.list[0].main.temp_min - 273)}
          feelLike={Math.round(weatherData.list[0].main.feels_like - 273)}
        />
        <Text style={{ color: "#9B9EAD", paddingVertical: 16 }}>|</Text>
        <WindSpeed speed={Math.round(weatherData.list[0].wind.speed * 3.6)} />
      </View>
      <HR />
      <View style={{ flexDirection: "row" }}>
        <SmallInfo
          title={"cloud"}
          data={weatherData.list[0].clouds.all + "%"}
        />
        <SmallInfo
          title={"humidity"}
          data={weatherData.list[0].main.humidity + "%"}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <SmallInfo
          title={"pressure"}
          data={weatherData.list[0].main.pressure + "hPa"}
        />
        <SmallInfo
          title={"visibility"}
          data={weatherData.list[0].visibility + "m"}
        />
      </View>
      <View style={{ height: 120 }}>
        <TodayForecast data={weatherData.list} />
      </View>
      <FiveDayForcast data={weatherData.list} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: height,
    paddingTop: 32,
    backgroundColor: "beige",
  },
  img: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    height: height / 2,
    width: width,
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width,
    height: height,
  },
  circle: {
    position: "absolute",
    left: 110,
    bottom: 0,
  },
});
