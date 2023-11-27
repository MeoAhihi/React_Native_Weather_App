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

const HourlyForcast = ({ active, time, icon, temperature }) => {
  const styles = StyleSheet.create({
    capsule: {
      width: 48,
      height: 100,
      backgroundColor: active ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)",
      borderRadius: 24,
      borderWidth: active ? 1 : 0,
      borderColor: "white",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      rowGap: 8,
      margin: 8,
    },
    time: {
      color: "white",
      fontSize: 8,
    },
    img: {
      width: 32,
      height: 32,
    },
    temperature: {
      color: "white",
      fontSize: 12,
      fontWeight: "bold",
    },
  });
  return (
    <View style={styles.capsule}>
      <Text style={styles.time}>{time}</Text>
      <Image source={iconPath[icon]} style={styles.img} />
      <Text style={styles.temperature}>{temperature}&deg;</Text>
    </View>
  );
};

export default HourlyForcast;
