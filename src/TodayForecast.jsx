import { StyleSheet, ScrollView } from "react-native";
import React from "react";
import HourlyForcast from "./HourlyForcast";

const TodayForecast = ({ data }) => {
  return (
    <ScrollView horizontal={true} style={styles.container}>
      <HourlyForcast
        active={true}
        time={new Date(data[0].dt * 1000).getHours() + ":00"}
        icon={data[0].weather[0].icon}
        temperature={Math.round(data[0].main.temp - 273)}
      />
      {data.map((hourData) => (
        <HourlyForcast
          active={false}
          time={new Date(hourData.dt * 1000).getHours() + ":00"}
          icon={hourData.weather[0].icon}
          temperature={Math.round(hourData.main.temp - 273)}
        />
      ))}
    </ScrollView>
  );
};

export default TodayForecast;

const styles = StyleSheet.create({
  container: {
    height: 200,
  },
});
