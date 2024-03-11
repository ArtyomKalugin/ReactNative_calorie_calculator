import {observer} from "mobx-react";
import {View} from "react-native";
import {styles} from "../../Assets/Styles/Styles";
import {MainScreenCalendarComponent} from "../../Components/MainScreenCalendarComponent";

export const MainScreen = observer(({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <MainScreenCalendarComponent />
        </View>
    );
})
