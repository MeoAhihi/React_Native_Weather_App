import { StyleSheet, Text, View } from "react-native";
import React from "react";

const WindSpeed = ({ speed }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Wind
        <Text style={styles.highlight}> {speed} KM</Text>
        /H WSW
      </Text>
    </View>
  );
};

export default WindSpeed;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.5,
  },
  text: {
    color: "#9B9EAD",
    fontSize: 10,
  },
  highlight: {
    color: "white",
    fontSize: 10,
  },
});
