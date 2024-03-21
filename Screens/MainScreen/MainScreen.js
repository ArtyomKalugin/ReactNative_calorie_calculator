import {observer} from "mobx-react";
import {View} from "react-native";
import {mainScreenStyles} from "../../Assets/Styles/Styles";
import {MainScreenCalendarComponent} from "../../Components/MainScreenCalendarComponent";
import MainScreenCalorieCellComponent from "../../Components/MainScreenCalorieCellComponent";
import MainScreenWaterCellComponent from "../../Components/MainScreenWaterCellComponent";
import {useRef, useState} from "react";
import {CalendarModalScreen} from "../CalendarModalScreen/CalendarModalScreen";
import {
    CaloriesModalScreen,
    CaloriesModalScreenStyles as CaloriesModalScreenStyle
} from "../CaloriesModalScreen/CaloriesModalScreen";
import {MillilitersModalScreen} from "../MillilitersModalScreen/MillilitersModalScreen";


export const MainScreen = observer(() => {
    const [newCaloriesStyle, setNewCaloriesStyle] = useState(CaloriesModalScreenStyle.BREAKFAST);

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

    return (
        <View>
            <View style={mainScreenStyles.mainContainer}>
                <MainScreenCalendarComponent onCalendarPressed={onCalendarPressed}/>
                <View style={mainScreenStyles.mainScreenCalorieCellsContainer}>
                    <MainScreenCalorieCellComponent
                        title="Завтрак"
                        value="670"
                        imageSource={require("../../Assets/Icons/breakfastIcon.png")}
                        onPress={() => onCaloriesPressed(CaloriesModalScreenStyle.BREAKFAST)}/>
                    <MainScreenCalorieCellComponent
                        title="Обед"
                        value="0"
                        imageSource={require("../../Assets/Icons/lunchIcon.png")}
                        onPress={() => onCaloriesPressed(CaloriesModalScreenStyle.LUNCH)}/>
                    <MainScreenCalorieCellComponent
                        title="Ужин"
                        value="0"
                        imageSource={require("../../Assets/Icons/dinnerIcon.png")}
                        onPress={() => onCaloriesPressed(CaloriesModalScreenStyle.DINNER)}/>
                    <MainScreenCalorieCellComponent
                        title="Перекус / Другое"
                        value="100"
                        imageSource={require("../../Assets/Icons/lateMealIcon.png")}
                        onPress={() => onCaloriesPressed(CaloriesModalScreenStyle.ANOTHER)}/>
                    <MainScreenWaterCellComponent
                        title="Вода"
                        value="200"
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
