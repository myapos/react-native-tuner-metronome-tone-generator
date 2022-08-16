import useCustomIcons from "../hooks/useCustomIcons";

const tabBarIcon = ({ route, focused, color, size }) => {
  const [_, Icon] = useCustomIcons();

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
};

export default tabBarIcon;
