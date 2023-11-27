import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Titlebar = ({ city, country }) => {
  return (
    <View style={styles.titleBar}>
      <Image source={require("./img/ic_menu_24px.png")} />
      <Text style={styles.title}>
        {city}, {country}
      </Text>
      <Image source={require("./img/ic_more_vert_24px.png")} />
    </View>
  );
};

export default Titlebar;

const styles = StyleSheet.create({
  titleBar: {
    // backgroundColor: "beige",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 48,
    paddingHorizontal: 16,
  },
  title: {
    color: "white",
    fontWeight: "medium",
    fontSize: 14,
  },
});
