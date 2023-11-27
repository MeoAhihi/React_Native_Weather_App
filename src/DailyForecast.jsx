import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
const iconPath = {
  "01d": require("./img/01n.png"),
  "02d": require("./img/02n.png"),
  "03d": require("./img/03n.png"),
  "04d": require("./img/04n.png"),
  "09d": require("./img/09n.png"),
  "10d": require("./img/10n.png"),
  "11d": require("./img/11n.png"),
  "13d": require("./img/13n.png"),
  "50d": require("./img/50n.png"),
  "01n": require("./img/01n.png"),
  "02n": require("./img/02n.png"),
  "03n": require("./img/03n.png"),
  "04n": require("./img/04n.png"),
  "09n": require("./img/09n.png"),
  "10n": require("./img/10n.png"),
  "11n": require("./img/11n.png"),
  "13n": require("./img/13n.png"),
  "50n": require("./img/50n.png"),
};

const DailyForecast = ({ day, icon, highTemp, lowTemp }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.medi]}>{day}</Text>
      <Image source={iconPath[icon]} style={styles.icon} />
      <Text style={[styles.text, styles.semi]}>{highTemp}&deg;</Text>
      <Text style={[styles.text, styles.semi]}>{lowTemp}&deg;</Text>
    </View>
  );
};

export default DailyForecast;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent:"space-evenly"
  },
  icon: {
    width: 32,
    height: 32,
  },
  text: {
    color: "white",
    fontSize: 12,
  },
  semi: {
    fontWeight: "semibold",
  },
  medi: {
    fontWeight: "medium",
  },
});
