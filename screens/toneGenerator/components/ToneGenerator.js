import { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";

const ToneGenerator = ({ navigation }) => {
  function play() {
    console.log("play");
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>ToneGenerator Screen</Text>
      <Button onPress={play} title="Play tone" />
    </View>
  );
};

export default ToneGenerator;
