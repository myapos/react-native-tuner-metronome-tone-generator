import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const Icon = createIconSetFromIcoMoon(
  require("../iconmoon/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

const useCustomIcons = () => {
  const [fontsLoaded] = useFonts({
    IcoMoon: require("../iconmoon/fonts/icomoon.ttf"),
  });

  return [fontsLoaded, Icon];
};

export default useCustomIcons;
