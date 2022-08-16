import React from "react";
import { Text, View, Button } from "react-native";
import useCustomIcons from "../../../config/customIcons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Metronome = ({ navigation, route }) => {
  console.log("route", route);

  const [fontsLoaded, Icon] = useCustomIcons();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Metronome Screen</Text>
      <Text>Favorite beverage: </Text>
      <FontAwesomeIcon icon="square-check" />

      <Icon name="notes" size={50} color="blue" />
      <Icon name="fork" size={50} color="blue" />
      <Icon name="metronome" size={50} color="blue" />
    </View>
  );
};

export default Metronome;
