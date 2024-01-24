import { TouchableOpacity, Text } from "react-native";
import {Buttons} from "../styles/styles";

const Button = ({color, Icon, handlePress, text, onPress={}}) => {

    return (
        <TouchableOpacity  style={Buttons.buttonFullWidth} onPress={onPress}>
            {Icon}
            <Text style={Buttons.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button
