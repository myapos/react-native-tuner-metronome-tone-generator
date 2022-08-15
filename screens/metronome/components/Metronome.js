import React from "react";
import { Text, View, Button } from "react-native";

const Metronome = ({ navigation, route }) => {
  console.log("route", route);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Metronome Screen</Text>
    </View>
  );
};

export default Metronome;
