import {Text, View, TouchableOpacity} from "react-native";
import {mainScreenStyles} from "../Assets/Styles/Styles";
import {useRootStore} from "../Modules/RootStore/UseRootStore";
import {observer} from "mobx-react";

export const MainScreenCalendarComponent = observer(({onCalendarPressed}) => {
    const { dateStore } = useRootStore();

    function createText() {
        const selectedDate = dateStore.getSelectedDate
        const selectedYear = selectedDate.getFullYear();

        const currentDate = new Date();
        const currentYear = currentDate.getFullYear()

        const options = currentYear !== selectedYear
            ? {year: 'numeric', month: 'long', day: 'numeric'}
            : {month: 'long', day: 'numeric'};

        return selectedDate.toLocaleString('ru-RU', options);
    }

    return (
        <View style={mainScreenStyles.mainScreenCalendar}>
            <TouchableOpacity onPress={onCalendarPressed}>
                <Text style={mainScreenStyles.mainScreenCalendarText}>{createText()}</Text>
            </TouchableOpacity>
        </View>
    )
})
