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
import {isEnabled} from "react-native/Libraries/Performance/Systrace";


export const MainScreen = observer(() => {
    const calendarModalRef = useRef(null);
    const onCalendarPressed = () => {
        calendarModalRef.current.open();
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
                        onPress={() => {
                            // TODO: прописать логику для кнопки
                            console.log("Cell pressed");
                        }}/>
                    <MainScreenCalorieCellComponent
                        title="Обед"
                        value="0"
                        imageSource={require("../../Assets/Icons/lunchIcon.png")}
                        onPress={() => {
                            // Обработчик нажатия для ячейки
                            console.log("Cell pressed");
                        }}/>
                    <MainScreenCalorieCellComponent
                        title="Ужин"
                        value="0"
                        imageSource={require("../../Assets/Icons/dinnerIcon.png")}
                        onPress={() => {
                            // Обработчик нажатия для ячейки
                            console.log("Cell pressed");
                        }}/>
                    <MainScreenCalorieCellComponent
                        title="Перекус / Другое"
                        value="100"
                        imageSource={require("../../Assets/Icons/lateMealIcon.png")}
                        onPress={() => {
                            // Обработчик нажатия для ячейки
                            console.log("Cell pressed");
                        }}/>
                    <MainScreenWaterCellComponent
                        title="Вода"
                        value="200"
                        format="Миллилитры"
                        imageSource={require("../../Assets/Icons/waterBottleIcon.png")}
                        onPress={() => {
                            // Обработчик нажатия для ячейки
                            console.log("Cell pressed");
                        }}/>
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
        </View>
    );
})
