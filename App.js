import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import Tuner from "./screens/tuner/components/Tuner";
import Metronome from "./screens/metronome/components/Metronome";
import ToneGenerator from "./screens/toneGenerator/components/ToneGenerator";

import configFontAwesomeIcons from "./config/configFontAwesomeIcons";

const Tab = createBottomTabNavigator();

configFontAwesomeIcons();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Tuner") {
                iconName = focused
                  ? "information-circle"
                  : "information-circle-outline";
              } else if (route.name === "Metronome") {
                iconName = focused ? "list" : "list-outline";
              } else if (route.name === "ToneGenerator") {
                iconName = focused ? "musical-notes" : "musical-notes-outline";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
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
