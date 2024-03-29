import {observer} from "mobx-react";
import {View} from "react-native";
import {mainScreenStyles} from "../../Assets/Styles/Styles";
import {MainScreenCalendarComponent} from "../../Components/MainScreenCalendarComponent";
import MainScreenCalorieCellComponent from "../../Components/MainScreenCalorieCellComponent";
import MainScreenWaterCellComponent from "../../Components/MainScreenWaterCellComponent";
import {useEffect, useRef, useState} from "react";
import {CalendarModalScreen} from "../CalendarModalScreen/CalendarModalScreen";
import {
    CaloriesModalScreen,
    CaloriesModalScreenStyles as CaloriesModalScreenStyle
} from "../CaloriesModalScreen/CaloriesModalScreen";
import {MillilitersModalScreen} from "../MillilitersModalScreen/MillilitersModalScreen";
import {useRootStore} from "../../Modules/RootStore/UseRootStore";


export const MainScreen = observer(() => {
    useEffect(() => {
        const date = dateStore.getSelectedDate;
        const selectedRecord = recordStore.findRecordByDate(date.toLocaleDateString());
        recordStore.setSelectedRecord(selectedRecord, date.toLocaleDateString());
    }, []);

    const [newCaloriesStyle, setNewCaloriesStyle] = useState(CaloriesModalScreenStyle.BREAKFAST);
    const { recordStore, dateStore } = useRootStore();

    const calendarModalRef = useRef(null);
    const caloriesModalRef = useRef(null);
    const millilitersModalRef = useRef(null);

    const onCalendarPressed = () => {
        calendarModalRef.current.open();
    }

    const onCaloriesPressed = (style) => {
        setNewCaloriesStyle(style)
        caloriesModalRef.current.open();
    }

    const onMillilitersPressed = () => {
        millilitersModalRef.current.open();
    }

    function getCurrentRecord() {
        const selectedRecord = recordStore.getSelectedRecord;

        if (selectedRecord === null) {
            return {
                breakfastCalories: 0,
                lunchCalories: 0,
                dinnerCalories: 0,
                anotherCalories: 0,
                waterMillilitres: 0
            }
        }

        return selectedRecord;
    }

    return (
        <View>
            <View style={mainScreenStyles.mainContainer}>
                <MainScreenCalendarComponent onCalendarPressed={onCalendarPressed}/>
                <View style={mainScreenStyles.mainScreenCalorieCellsContainer}>
                    <MainScreenCalorieCellComponent
                        title="Завтрак"
                        value={getCurrentRecord().breakfastCalories.toString()}
                        imageSource={require("../../Assets/Icons/breakfastIcon.png")}
                        onPress={() => onCaloriesPressed(CaloriesModalScreenStyle.BREAKFAST)}/>
                    <MainScreenCalorieCellComponent
                        title="Обед"
                        value={getCurrentRecord().lunchCalories.toString()}
                        imageSource={require("../../Assets/Icons/lunchIcon.png")}
                        onPress={() => onCaloriesPressed(CaloriesModalScreenStyle.LUNCH)}/>
                    <MainScreenCalorieCellComponent
                        title="Ужин"
                        value={getCurrentRecord().dinnerCalories.toString()}
                        imageSource={require("../../Assets/Icons/dinnerIcon.png")}
                        onPress={() => onCaloriesPressed(CaloriesModalScreenStyle.DINNER)}/>
                    <MainScreenCalorieCellComponent
                        title="Перекус / Другое"
                        value={getCurrentRecord().anotherCalories.toString()}
                        imageSource={require("../../Assets/Icons/lateMealIcon.png")}
                        onPress={() => onCaloriesPressed(CaloriesModalScreenStyle.ANOTHER)}/>
                    <MainScreenWaterCellComponent
                        title="Вода"
                        value={getCurrentRecord().waterMillilitres.toString()}
                        format="Миллилитры"
                        imageSource={require("../../Assets/Icons/waterBottleIcon.png")}
                        onPress={onMillilitersPressed}/>
                </View>
            </View>

            <CalendarModalScreen modalRef={calendarModalRef} />
            <CaloriesModalScreen modalRef={caloriesModalRef} style={newCaloriesStyle} />
            <MillilitersModalScreen modalRef={millilitersModalRef} />
        </View>
    );
})
