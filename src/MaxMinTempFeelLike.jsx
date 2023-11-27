import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MaxMinTempFeelLike = ({ maxTemp, minTemp, feelLike }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {minTemp}&deg;/{maxTemp}&deg; | Feels like
        <Text style={styles.highlight}> {feelLike}&deg;</Text>
      </Text>
    </View>
  );
};

export default MaxMinTempFeelLike;

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
