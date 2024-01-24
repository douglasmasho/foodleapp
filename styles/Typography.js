import { StyleSheet } from "react-native";
import Colors from "./Colors";
import Font from "./Font";
 const Typography = StyleSheet.create({
    header: {
        fontSize: 25,
        // fontWeight: "100",
        textAlign: "center",
        color: Colors.blue,
        fontFamily: "MBold"
    },

    centerText: {
        textAlign: "center"
    },

    boldText: {
        fontFamily: "MBold"
    },

    biggerText: {
        fontSize: 18,
    },

    normalText: {
        fontSize: 16
    },

    blueText: {
        color: Colors.blue
    }
})

export default Typography;
