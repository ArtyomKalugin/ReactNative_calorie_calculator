import {observer} from "mobx-react";
import {DatePicker} from "react-native-wheel-pick";
import {View} from "react-native";
import {calendarStyles} from "../../Assets/Styles/Styles";
import {BottomButton} from "../../Components/BottomButton";

export const CalendarModalScreen = observer(() => {
    return (
        <View>
            <DatePicker
                style={calendarStyles.calendar}
                minimumDate={new Date('2000-01-01')}
                maximumDate={new Date()}
                onDateChange={date => { console.log(date) }}
            />
            <BottomButton title={'Применить'} onPress={() => console.log("ef")} />
        </View>
    );
})
