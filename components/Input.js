import { View, TextInput } from "react-native";
import {InputStyles} from "../styles/styles";

//for different kjeyboard types check: https://reactnative.dev/docs/textinput#keyboardtype
const Input = ({Icon, type, placeholder, secureEntry, keyboardType}) => {
    return (
        <View style={InputStyles.inputContainer}>
            <View style={InputStyles.inputWrapper}>
               {Icon}
               <TextInput style={InputStyles.input} placeholder={placeholder} secureTextEntry={secureEntry} keyboardType={keyboardType} placeholderTextColor="black"/>
            </View>
        </View>
    )
}

export default Input
