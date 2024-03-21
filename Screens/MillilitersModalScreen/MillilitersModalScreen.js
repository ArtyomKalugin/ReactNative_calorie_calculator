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

    const handleMillilitersEnter = () => {
        modalRef.current?.close();
        setNewMilliliters("")
    };

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
