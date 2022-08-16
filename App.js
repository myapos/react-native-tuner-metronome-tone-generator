import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import useCustomIcons from "./hooks/useCustomIcons";

import Tuner from "./screens/tuner/components/Tuner";
import Metronome from "./screens/metronome/components/Metronome";
import ToneGenerator from "./screens/toneGenerator/components/ToneGenerator";

import configFontAwesomeIcons from "./config/configFontAwesomeIcons";
import { Provider } from "react-redux";
import tabBarIcon from "./utils/tabBarIcon";
import { store } from "./store/store";

const Tab = createBottomTabNavigator();

configFontAwesomeIcons();

export default function App() {
  const [fontsLoaded] = useCustomIcons();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) =>
                tabBarIcon({ route, focused, color, size }),
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tab.Screen name="Tuner" component={Tuner} />
            <Tab.Screen name="Metronome" component={Metronome} />
            <Tab.Screen name="ToneGenerator" component={ToneGenerator} />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
