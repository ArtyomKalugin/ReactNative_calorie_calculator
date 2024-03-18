import {observer} from "mobx-react";
import {DatePicker} from "react-native-wheel-pick";
import {View} from "react-native";
import {calendarStyles} from "../../Assets/Styles/Styles";
import {BottomButton} from "../../Components/BottomButton";
import {useRootStore} from "../../Modules/RootStore/UseRootStore";
import {useState} from "react";

export const CalendarModalScreen = observer(() => {
    const [newDate, setNewDate] = useState(new Date());
    const { dateStore } = useRootStore();

    const handleDateChanging = () => {
        dateStore.selectDateAction(newDate);
    };

    return (
        <View>
            <DatePicker
                style={calendarStyles.calendar}
                minimumDate={new Date('2000-01-01')}
                maximumDate={new Date()}
                onDateChange={date => setNewDate(date)}
            />
            <BottomButton title={'Применить'} onPress={handleDateChanging} />
        </View>
    );
})
