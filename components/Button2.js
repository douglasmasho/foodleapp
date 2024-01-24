import { TouchableOpacity, Text, View } from "react-native";
import {Buttons} from "../styles/styles";

const Button2 = ({color, Icon, handlePress, text, onPress}) => {

    return (
        <TouchableOpacity  style={Buttons} onPress={onPress}>
            <View style={[Buttons.buttonNormal,{alignSelf: "flex-start"}]}>
               <Text style={[Buttons.buttonText]}>{text}</Text>
            </View> 
        </TouchableOpacity>
    )
}

export default Button2
