import { TouchableOpacity, Text } from "react-native";
import {Buttons} from "../styles/styles";
import { LinearGradient } from 'expo-linear-gradient';
import Colors from "../styles/Colors";

const Button = ({color, Icon, handlePress, text, onPress}) => {

    return (
        <TouchableOpacity handlePress={handlePress} style={Buttons.buttonFullWidth} onPress={onPress}>
            <LinearGradient
        // Button Linear Gradient
        colors={[Colors.blue, Colors.darkBlue]}
        start={{x:1,y: 1}}
        end={{x:0, y:0}}
        style={Buttons.background}>
            {Icon}
            <Text style={Buttons.buttonText}>{text}</Text>
        </LinearGradient>
            
        </TouchableOpacity>
    )
}

export default Button
