import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CurrentTemp = ({ temperature, condition }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.temperature}>{temperature}&deg;</Text>
      <Text style={styles.condition}>{condition}</Text>
    </View>
  );
};

export default CurrentTemp;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.5,
  },
  temperature: {
    fontWeight: "900",
    color: "#767885",
    fontSize: 48,
  },
  condition: {
    fontSize: 10,
    color: "white",
  },
});
