import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import GetStartedScreen from "./src/GetStartedScreen";
import Home from "./src/Home";
import WorldWeather from "./src/WorldWeather";
import RealTimeMap from "./src/RealTimeMap";
import DetailHourlyForecast from "./src/DetailHourlyForecast";
import DetailAccountForecastScreen from "./src/DetailAccountForecastScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={GetStartedScreen} />
        <Stack.Screen name="Screen2" component={DetailAccountForecastScreen} />
        <Stack.Screen name="Screen3" component={RealTimeMap} />
        <Stack.Screen name="Screen4" component={WorldWeather} />
        <Stack.Screen name="Screen5" component={DetailHourlyForecast} />
        <Stack.Screen name="Screen6" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
