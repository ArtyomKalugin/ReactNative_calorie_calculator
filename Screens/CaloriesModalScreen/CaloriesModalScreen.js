import {observer} from "mobx-react";
import {Text, View, TextInput, ActivityIndicator} from "react-native";
import {BottomButton} from "../../Components/BottomButton";
import React, {useState} from "react";
import {Modalize} from "react-native-modalize";
import {Portal} from "react-native-portalize";
import {caloriesStyles} from "../../Assets/Styles/Styles";
import {useRootStore} from "../../Modules/RootStore/UseRootStore";


export const CaloriesModalScreenStyles = {
    BREAKFAST: 'breakfast',
    LUNCH: 'lunch',
    DINNER: 'dinner',
    ANOTHER: 'another'
};

export const CaloriesModalScreen = observer(({modalRef, style}) => {
    const [newCalories, setNewCalories] = useState("");
    const { recordStore, dateStore } = useRootStore();

    const handleCaloriesEnter = () => {
        modalRef.current?.close();
        makeRecord();
        setNewCalories("")
    };

    function getTitleFromStyle() {
        switch(style) {
            case CaloriesModalScreenStyles.BREAKFAST:
                return "Завтрак";
            case CaloriesModalScreenStyles.LUNCH:
                return "Обед";
            case CaloriesModalScreenStyles.DINNER:
                return "Ужин";
            case CaloriesModalScreenStyles.ANOTHER:
                return "Перекус / Другое";
        }
    }

    function makeRecordFromStyle(date) {
        const record = {
            _date: date,
            breakfastCalories: 0,
            lunchCalories: 0,
            dinnerCalories: 0,
            anotherCalories: 0,
            waterMillilitres: 0
        }

        switch(style) {
            case CaloriesModalScreenStyles.BREAKFAST:
                record.breakfastCalories = Number(newCalories);
                return record;
            case CaloriesModalScreenStyles.LUNCH:
                record.lunchCalories = Number(newCalories);
                return record;
            case CaloriesModalScreenStyles.DINNER:
                record.dinnerCalories = Number(newCalories);
                return record;
            case CaloriesModalScreenStyles.ANOTHER:
                record.anotherCalories = Number(newCalories);
                return record;
        }
    }

    function makeRecord() {
        const date = dateStore.getSelectedDate;
        const record = recordStore.findRecordByDate(date.toLocaleDateString());

        if (record === null) {
            const newRecord = makeRecordFromStyle(date.toLocaleDateString());
            recordStore.createRecord(newRecord);
            recordStore.setSelectedRecord(newRecord, date.toLocaleDateString());
        } else {
            const recordValues = {
                breakfastCalories: record.breakfastCalories,
                lunchCalories: record.lunchCalories,
                dinnerCalories: record.dinnerCalories,
                anotherCalories: record.anotherCalories,
                waterMillilitres: record.waterMillilitres
            }

            switch (style) {
                case CaloriesModalScreenStyles.BREAKFAST:
                    recordValues.breakfastCalories += Number(newCalories);
                    break;
                case CaloriesModalScreenStyles.LUNCH:
                    recordValues.lunchCalories += Number(newCalories);
                    break;
                case CaloriesModalScreenStyles.DINNER:
                    recordValues.dinnerCalories += Number(newCalories);
                    break;
                case CaloriesModalScreenStyles.ANOTHER:
                    recordValues.anotherCalories += Number(newCalories);
                    break;
            }

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
                    <Text style={caloriesStyles.calorieCellLabel}>{getTitleFromStyle()}</Text>
                    <View style={caloriesStyles.modalTextInputContainer}>
                        <TextInput
                            style={caloriesStyles.modalTextInput}
                            onChangeText={setNewCalories}
                            value={newCalories}
                            keyboardType="numeric"
                            maxLength={6}
                            cursorColor={"#22BE54"}
                            placeholder={"Калории"}
                            placeholderTextColor={"#858484"}
                        />
                    </View>
                    <BottomButton title={'Добавить'} onPress={handleCaloriesEnter} />
                </View>
            </Modalize>
        </Portal>
    );
})
