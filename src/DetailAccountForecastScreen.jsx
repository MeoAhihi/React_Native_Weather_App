import { Dimensions, Image, StyleSheet, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import CircleWithContent from "./CircleWithContent";

const { fontScale, height, width, scale } = Dimensions.get("screen");

const DetailAccountForecastScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#484B5B", "#2C2D35"]}
        style={styles.background}
      />

      <View style={styles.img}>
        <Image source={require("./img/CloudyNight.png")} />
      </View>
      <CircleWithContent Title={"Detail Hourly Forecast"} Message={"Get in - depth weather infomation"} forth={1} navigation={navigation} nextScreen={"Screen3"}/>
    </View>
  );
};

export default DetailAccountForecastScreen;

const styles = StyleSheet.create({
  container: {
    height: height,
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
