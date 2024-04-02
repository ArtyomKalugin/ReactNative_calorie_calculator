import {observer} from "mobx-react";
import {DatePicker} from "react-native-wheel-pick";
import {View} from "react-native";
import {calendarStyles} from "../../Assets/Styles/Styles";
import {BottomButton} from "../../Components/BottomButton";
import {useRootStore} from "../../Modules/RootStore/UseRootStore";
import {useState} from "react";
import {Modalize} from "react-native-modalize";
import {Portal} from "react-native-portalize";
import {DateStore} from "../../Modules/DateModule/Store/DateStore";

export const CalendarModalScreen = observer(({modalRef}) => {
    const [newDate, setNewDate] = useState(new Date());
    const { dateStore, recordStore } = useRootStore();

    const handleDateChanging = () => {
        dateStore.selectDateAction(newDate);
        const date = dateStore.getSelectedDate;
        const record = recordStore.findRecordByDate(date.toLocaleDateString());
        recordStore.setSelectedRecord(record, date.toLocaleDateString());
        modalRef.current?.close();
    };

    function getCurrentDate() {
        return dateStore.getSelectedDate;
    }

    return (
        <Portal>
            <Modalize
                ref={modalRef}
                modalTopOffset={500}
                childrenStyle={{marginTop: 20}}
                disableScrollIfPossible={true}
            >
                <View>
                    <DatePicker
                        style={calendarStyles.calendar}
                        date={getCurrentDate()}
                        minimumDate={new Date('2000-01-01')}
                        maximumDate={new Date()}
                        onDateChange={date => setNewDate(date)}
                    />
                    <BottomButton title={'Применить'} onPress={handleDateChanging} />
                </View>
            </Modalize>
        </Portal>
    );
})
