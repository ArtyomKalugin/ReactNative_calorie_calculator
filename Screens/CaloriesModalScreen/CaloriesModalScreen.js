import {observer} from "mobx-react";
import {Text, View, TextInput} from "react-native";
import {BottomButton} from "../../Components/BottomButton";
import {useRootStore} from "../../Modules/RootStore/UseRootStore";
import React, {useState} from "react";
import {Modalize} from "react-native-modalize";
import {Portal} from "react-native-portalize";
import {caloriesStyles} from "../../Assets/Styles/Styles";

export const CaloriesModalScreenStyles = {
    BREAKFAST: 'breakfast',
    LUNCH: 'lunch',
    DINNER: 'dinner',
    ANOTHER: 'another'
};

export const CaloriesModalScreen = observer(({modalRef, style}) => {
    const [newCalories, setNewCalories] = useState("");

    const handleCaloriesEnter = () => {
        modalRef.current?.close();
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
