import {Text, View, TouchableOpacity} from "react-native";
import {mainScreenStyles} from "../Assets/Styles/Styles";
import {BottomButton} from "./BottomButton";

export const MainScreenCalendarComponent = ({onCalendarPressed}) => {
    return (
        <View style={mainScreenStyles.mainScreenCalendar}>
            <TouchableOpacity onPress={onCalendarPressed}>
                <Text style={mainScreenStyles.mainScreenCalendarText}>Сегодня</Text>
            </TouchableOpacity>
        </View>
    )
}
