import {Text, TouchableOpacity, View} from "react-native";
import {buttonStyles} from "../Assets/Styles/Styles";

export const BottomButton = ({title, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyles.buttonContainer}>
            <Text style={buttonStyles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}
