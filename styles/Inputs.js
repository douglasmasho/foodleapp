import { StyleSheet } from "react-native";
import Colors from "./Colors";
import generateBoxShadowStyle from "./utils/generateboxshadow";

const shadow = generateBoxShadowStyle(0,4,"#000",.12,12,3)

const InputStyles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 20,
        height: 55,
    },
    inputWrapper: {
        flex: 1,
        backgroundColor: Colors.inputGray,
        // marginRight: SIZES.small,
        justifyContent: "space-around",
        paddingLeft: 15,
        alignItems: "center",
        borderRadius: 15,
        height: "100%",
        ...shadow,
        borderColor: Colors.blue,
        // borderWidth: 1,
        flexDirection: "row"
    },
    input: {
        width: "90%",
        height: "100%",
        paddingHorizontal: 15,
        fontFamily: "MRegular"
    }
});

export default InputStyles;