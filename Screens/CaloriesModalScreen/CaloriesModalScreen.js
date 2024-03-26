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
                return "Завтрак"
            case CaloriesModalScreenStyles.LUNCH:
                return "Обед"
            case CaloriesModalScreenStyles.DINNER:
                return "Ужин"
            case CaloriesModalScreenStyles.ANOTHER:
                return "Перекус / Другое"
        }
    }

    function makeRecord() {
        const date = dateStore.getSelectedDate;
        recordStore.findRecordByDate(date.string);
    }

    return (
        <Portal>
            <Modalize
                ref={modalRef}
                modalTopOffset={500}
                childrenStyle={{marginTop: 20}}
                disableScrollIfPossible={true}
            >
                {recordStore.isLoading
                    ? (<ActivityIndicator />)
                    : (
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
                    )}
            </Modalize>
        </Portal>
    );
})
