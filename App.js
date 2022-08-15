import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Tuner from "./screens/tuner/components/Tuner";
import Metronome from "./screens/metronome/components/Metronome";
import ToneGenerator from "./screens/toneGenerator/components/ToneGenerator";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        {/* <Stack.Navigator>
          <Stack.Screen name="Tuner" component={Tuner} />
          <Stack.Screen name="Metronome" component={Metronome} />
        </Stack.Navigator> */}

        <Tab.Navigator>
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
