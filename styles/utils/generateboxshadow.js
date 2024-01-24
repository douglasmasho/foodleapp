import { Platform } from "react-native";

const generateBoxShadowStyle = (
    xOffset,
    yOffset,
    shadowColor,
    shadowOpacity,
    shadowRadius,
    elevation,
  ) => {
    if (Platform.OS === 'ios') {
      return {
        shadowColor: shadowColor,
        shadowOffset: {width: xOffset, height: yOffset},
        shadowOpacity,
        shadowRadius,
      };
    } else if (Platform.OS === 'android') {
      return {
        elevation,
        shadowColor: shadowColor,
      };
    }
  };


  export default generateBoxShadowStyle;