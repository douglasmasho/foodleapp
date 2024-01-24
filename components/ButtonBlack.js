import { TouchableOpacity, Text, View } from "react-native";
import {Buttons} from "../styles/styles";
import { LinearGradient } from 'expo-linear-gradient';
import Colors from "../styles/Colors";

const Button = ({color, Icon, handlePress, text}) => {

    return (
        <TouchableOpacity handlePress={handlePress} style={Buttons.buttonFullWidth}>
            <View style={[Buttons.background, Buttons.black]}>
            {Icon}
            <Text style={Buttons.buttonText}>{text}</Text>
        </View>
            
        </TouchableOpacity>
    )
}

export default Button
