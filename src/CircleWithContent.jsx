import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const { fontScale, height, width, scale } = Dimensions.get("screen");
const radius = (492 * height) / 760;
const imgForth = {
  1: <Image source={require("./img/oneforth.png")} width={80} height={80} />,
  2: <Image source={require("./img/twoforth.png")} width={80} height={80} />,
  3: <Image source={require("./img/threeforth.png")} width={80} height={80} />,
  4: <Image source={require("./img/fourforth.png")} width={80} height={80} />,
};

const CircleWithContent = ({
  Title,
  Message,
  forth,
  navigation,
  nextScreen,
}) => {
  clickMe = () => {
    navigation.navigate(nextScreen);
  };
  return (
    <View style={styles.container} >
      <Text style={styles.title}>{Title}</Text>
      <Text style={styles.message}>{Message}</Text>
      <Pressable onPress={clickMe}>{imgForth[forth]}</Pressable>
    </View>
  );
};

export default CircleWithContent;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 81,
    backgroundColor: "white",
    width: radius,
    height: radius,
    borderRadius: radius / 2,
    position: "absolute",
    top: height / 2 - 70,
    left: (width - radius) / 2,
  },
  title: {
    fontSize: 28,
    fontWeight: "semibold",
    width: (width * 250) / 360,
    textAlign: "center",
  },
  message: {
    paddingTop: 21,
    paddingBottom: 30,
    color: "#8B95A2",
    fontSize: 16,
    width: (width * 250) / 360,
    textAlign: "center",
  },
  forthButton: {
    height: 80,
    width: 80,
  },
});
