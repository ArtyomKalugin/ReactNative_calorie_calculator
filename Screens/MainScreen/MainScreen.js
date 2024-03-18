import {observer} from "mobx-react";
import {View} from "react-native";
import {mainScreenStyles} from "../../Assets/Styles/Styles";
import {MainScreenCalendarComponent} from "../../Components/MainScreenCalendarComponent";
import MainScreenCalorieCellComponent from "../../Components/MainScreenCalorieCellComponent";
import MainScreenWaterCellComponent from "../../Components/MainScreenWaterCellComponent";
import {useRef} from "react";
import {Portal} from "react-native-portalize";
import {Modalize} from "react-native-modalize";
import {CalendarModalScreen} from "../CalendarModalScreen/CalendarModalScreen";
import {useRootStore} from "../../Modules/RootStore/UseRootStore";


export const MainScreen = observer(() => {
    const calendarModalRef = useRef(null);
    const caloriesModalRef = useRef(null);
    const millilitersModalRef = useRef(null);
    const { dateStore } = useRootStore();

    const onCalendarPressed = () => {
        calendarModalRef.current.open();
    }

    const onCaloriesPressed = () => {
        caloriesModalRef.current.open();
    }

    const onMillilitersPressed = () => {
        millilitersModalRef.current.open();
    }

    const handleDateChanging = (newDate) => {
        dateStore.selectDateAction(newDate);
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
                        onPress={onCaloriesPressed}/>
                    <MainScreenCalorieCellComponent
                        title="Обед"
                        value="0"
                        imageSource={require("../../Assets/Icons/lunchIcon.png")}
                        onPress={onCaloriesPressed}/>
                    <MainScreenCalorieCellComponent
                        title="Ужин"
                        value="0"
                        imageSource={require("../../Assets/Icons/dinnerIcon.png")}
                        onPress={onCaloriesPressed}/>
                    <MainScreenCalorieCellComponent
                        title="Перекус / Другое"
                        value="100"
                        imageSource={require("../../Assets/Icons/lateMealIcon.png")}
                        onPress={onCaloriesPressed}/>
                    <MainScreenWaterCellComponent
                        title="Вода"
                        value="200"
                        format="Миллилитры"
                        imageSource={require("../../Assets/Icons/waterBottleIcon.png")}
                        onPress={onMillilitersPressed}/>
                </View>
            </View>

            <Portal>
                <Modalize
                    ref={calendarModalRef}
                    modalTopOffset={500}
                    childrenStyle={{marginTop: 20}}
                    disableScrollIfPossible={true}
                >
                    <CalendarModalScreen />
                </Modalize>
            </Portal>

            <Portal>
                <Modalize
                    ref={caloriesModalRef}
                    modalTopOffset={500}
                    childrenStyle={{marginTop: 20}}
                    disableScrollIfPossible={true}
                >
                </Modalize>
            </Portal>

            <Portal>
                <Modalize
                    ref={millilitersModalRef}
                    modalTopOffset={500}
                    childrenStyle={{marginTop: 20}}
                    disableScrollIfPossible={true}
                >
                </Modalize>
            </Portal>
        </View>
    );
})
