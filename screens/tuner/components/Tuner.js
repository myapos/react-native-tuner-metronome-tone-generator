import React, { useState } from "react";

import { Text, View, Button, NativeModules } from "react-native";
// "ReactOneCustomMethod" it's the same value returned by getName()
// from ReactOneCustomMethod
// const { RNDtmf } = NativeModules;

const Tuner = ({ navigation }) => {
  const { ReactOneCustomMethod, ToneGenerator } = NativeModules;
  const [id, setId] = useState("Press the button to get The ID");

  function play() {
    console.log("play");
    // ToneGenerator.configureTone("TONE_CDMA_ABBR_ALERT", 20);
    ToneGenerator.startTone(ToneGenerator.DTMF_0, 3000);
  }

  console.log(
    "ReactOneCustomMethod",
    ReactOneCustomMethod,
    " ToneGenerator",
    ToneGenerator
  );
  const getId = () => {
    ReactOneCustomMethod.getPhoneID()
      .then((res) => {
        setId("ID: " + res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Tuner Screen!!</Text>

      <Button onPress={play} title="Play tone" />
      <Button title="Get Id" onPress={getId} />

      <Text>{id}</Text>
    </View>
  );
};

export default Tuner;
