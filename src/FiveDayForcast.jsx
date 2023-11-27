import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

import { LinearGradient } from "expo-linear-gradient";
import DailyForecast from "./DailyForecast";

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const { fontScale, height, width, scale } = Dimensions.get("screen");
const FiveDayForcast = ({ data }) => {
  const sample = [data[8], data[16], data[24], data[32]];
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#2F313A", "#232329"]}
        style={styles.background}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <View width={width * 0.34} />
        <Text style={{ color: "rgba(255,255,255,0.5)" }}>High</Text>
        <Text style={{ color: "rgba(255,255,255,0.5)" }}>Low</Text>
      </View>
      <DailyForecast
        day={"Today"}
        icon={data[0].weather[0].icon}
        highTemp={Math.round(data[0].main.temp_max - 273)}
        lowTemp={Math.round(data[0].main.temp_min - 273)}
      />
      {sample.map((element) => (
        <DailyForecast
          day={weekday[new Date(data[0].dt * 1000).getDay()]}
          icon={element.weather[0].icon}
          highTemp={Math.round(element.main.temp_max - 273)}
          lowTemp={Math.round(element.main.temp_min - 273)}
        />
      ))}
    </View>
  );
};

export default FiveDayForcast;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    rowGap: 16,
  },
  background: {
    position: "absolute",
    top: 0,
    left: 16,
    width: width - 32,
    height: 300,
    borderRadius: 16,
  },
});
