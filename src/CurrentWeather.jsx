import { StyleSheet, Text, View, Image } from "react-native";
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
const CurrentWeather = ({icon}) => {
  return (
    <View style={styles.container}>
      <Image source={iconPath[icon]} style={styles.img} />
    </View>
  );
};

export default CurrentWeather;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.5,
  },
  img: { width: 120, height: 120 },
});
