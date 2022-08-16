// @ts-nocheck
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import useCustomIcons from "./hooks/useCustomIcons";

import Tuner from "./screens/tuner/components/Tuner";
import Metronome from "./screens/metronome/components/Metronome";
import ToneGenerator from "./screens/toneGenerator/components/ToneGenerator";

import configFontAwesomeIcons from "./config/configFontAwesomeIcons";

const Tab = createBottomTabNavigator();

configFontAwesomeIcons();

export default function App() {
  const [fontsLoaded, Icon] = useCustomIcons();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = "";

              const iconOptions = {
                size,
                color,
              };

              if (route.name === "Tuner") {
                iconName = "fork";
              } else if (route.name === "Metronome") {
                iconName = "metronome";
              } else if (route.name === "ToneGenerator") {
                iconName = "notes";
              }

              return <Icon name={iconName} {...iconOptions} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Tuner" component={Tuner} />
          <Tab.Screen name="Metronome" component={Metronome} />
          <Tab.Screen name="ToneGenerator" component={ToneGenerator} />
        </Tab.Navigator>
      </NavigationContainer>
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
