import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

const { fontScale, height, width, scale } = Dimensions.get("screen");
const GetStartedScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate("Screen2");
  }, 1000);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(242,244,247,1)", "rgba(188,200,214,1)"]}
        style={styles.background}
      />
      <Image source={require("./img/GetStart.png")} width={200} />
      <Text style={styles.highlightText}>Weather</Text>
      <Text style={styles.dimText}>Forecast</Text>
    </View>
  );
};

export default GetStartedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  highlightText: {
    fontSize: 40,
    fontWeight: "semibold",
  },
  dimText: {
    color: "#8B95A2",
    fontSize: 24,
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width,
    height: height,
  },
});
