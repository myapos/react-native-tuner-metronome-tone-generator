import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const useCustomIcons = () => {
  const Icon = createIconSetFromIcoMoon(
    require("../assets/iconmoon/selection.json"),
    "IcoMoon",
    "icomoon.ttf"
  );

  const [fontsLoaded] = useFonts({
    IcoMoon: require("../assets/iconmoon/fonts/icomoon.ttf"),
  });

  return [fontsLoaded, Icon];
};

export default useCustomIcons;
