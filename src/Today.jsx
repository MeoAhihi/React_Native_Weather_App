import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Today = () => {
  const time = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  month = ["Jan"];
  return (
    <View style={styles.container}>
      <Text style={styles.capsule}>
        {time.toLocaleDateString("en-US", {
          weekday: "long",
          day: "numeric",
          month: "short",
        })}
      </Text>
    </View>
  );
};

export default Today;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 12,
  },
  capsule: {
    backgroundColor: "#32333E",
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignSelf: "flex-start",
    borderRadius: 20,
    color: "#9B9EAD",
    fontSize: 10,
  },
});
