import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const SmallInfo = ({ title, data }) => {
  var imgPath;
  switch (title) {
    case "cloud":
      imgPath = require("./img/04d.png");
      break;
    case "humidity":
      imgPath = require("./img/09d.png");
      break;
    case "pressure":
      imgPath = require("./img/pressure.png");
      break;
    default: //visibility
      imgPath = require("./img/visibility.png");
      break;
  }
  return (
    <View style={styles.container}>
      <Image source={imgPath} style={styles.icon} />
      <Text style={styles.text}>
        {title}:<Text style={styles.highlight}> {data}</Text>
      </Text>
    </View>
  );
};

export default SmallInfo;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 32,
    margin: 6,
  },
  icon: {
    width: 20,
    height: 20,
  },
  text: {
    color: "#9B9EAD",
    fontSize: 10,
    marginLeft: 8,
  },
  highlight: {
    color: "white",
    fontSize: 10,
  },
});
