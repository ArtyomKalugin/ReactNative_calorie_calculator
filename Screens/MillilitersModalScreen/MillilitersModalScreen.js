import {observer} from "mobx-react";
import {Text, View, TextInput} from "react-native";
import {BottomButton} from "../../Components/BottomButton";
import {useRootStore} from "../../Modules/RootStore/UseRootStore";
import React, {useState} from "react";
import {Modalize} from "react-native-modalize";
import {Portal} from "react-native-portalize";
import {caloriesStyles} from "../../Assets/Styles/Styles";

export const MillilitersModalScreen = observer(({modalRef}) => {
    const [newMilliliters, setNewMilliliters] = useState("");
    const { recordStore, dateStore } = useRootStore();

    const handleMillilitersEnter = () => {
        modalRef.current?.close();
        makeRecord();
        setNewMilliliters("")
    };

    function makeRecord() {
        const date = dateStore.getSelectedDate;
        const record = recordStore.findRecordByDate(date.toLocaleDateString());

        if (record === null) {
            const newRecord = {
                _date: date.toLocaleDateString(),
                breakfastCalories: 0,
                lunchCalories: 0,
                dinnerCalories: 0,
                anotherCalories: 0,
                waterMillilitres: Number(newMilliliters)
            }
            recordStore.createRecord(newRecord);
            recordStore.setSelectedRecord(newRecord, date.toLocaleDateString());
        } else {
            const recordValues = {
                breakfastCalories: Number(record.breakfastCalories),
                lunchCalories: Number(record.lunchCalories),
                dinnerCalories: Number(record.dinnerCalories),
                anotherCalories: Number(record.anotherCalories),
                waterMillilitres: Number(record.waterMillilitres)
            }

            recordValues.waterMillilitres += Number(newMilliliters);
            recordStore.updateRecord(record, recordValues);
            recordStore.setSelectedRecord(recordValues, date.toLocaleDateString());
        }
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
                    <Text style={caloriesStyles.calorieCellLabel}>Вода</Text>
                    <View style={caloriesStyles.modalTextInputContainer}>
                        <TextInput
                            style={caloriesStyles.modalTextInput}
                            onChangeText={setNewMilliliters}
                            value={newMilliliters}
                            keyboardType="numeric"
                            maxLength={6}
                            cursorColor={"#22BE54"}
                            placeholder={"Миллилитры"}
                            placeholderTextColor={"#858484"}
                        />
                    </View>
                    <BottomButton title={'Добавить'} onPress={handleMillilitersEnter} />
                </View>
            </Modalize>
        </Portal>
    );
})
