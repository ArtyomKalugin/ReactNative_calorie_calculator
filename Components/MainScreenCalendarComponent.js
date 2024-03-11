import { Text, View, SafeAreaView } from "react-native";
import {styles} from "../Assets/Styles/Styles";

export const MainScreenCalendarComponent = () => {
    return (
        <View style={styles.mainScreenCalendar}>
            <Text style={styles.mainScreenCalendarText}>Сегодня</Text>
        </View>
    )
}
