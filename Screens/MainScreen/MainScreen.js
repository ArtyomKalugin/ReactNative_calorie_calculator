import {observer} from "mobx-react";
import {View} from "react-native";
import {styles} from "../../Assets/Styles/Styles";
import {MainScreenCalendarComponent} from "../../Components/MainScreenCalendarComponent";
import MainScreenCalorieCellComponent from "../../Components/MainScreenCalorieCellComponent";
import MainScreenWaterCellComponent from "../../Components/MainScreenWaterCellComponent";

export const MainScreen = observer(({navigation}) => {
    return (
        <View style={styles.mainContainer}>
            <MainScreenCalendarComponent/>
            <View style={styles.mainScreenCalorieCellContainer}>
                <MainScreenCalorieCellComponent
                    title="Завтрак"
                    value="670"
                    imageSource={require("../../Assets/Icons/breakfastIcon.png")} // Замените путем к изображению
                    onPress={() => {
                        // Обработчик нажатия для ячейки
                        console.log("Cell pressed");
                    }}/>
                <MainScreenCalorieCellComponent
                    title="Обед"
                    value="0"
                    imageSource={require("../../Assets/Icons/lunchIcon.png")} // Замените путем к изображению
                    onPress={() => {
                        // Обработчик нажатия для ячейки
                        console.log("Cell pressed");
                    }}/>
                <MainScreenCalorieCellComponent
                    title="Ужин"
                    value="0"
                    imageSource={require("../../Assets/Icons/dinnerIcon.png")} // Замените путем к изображению
                    onPress={() => {
                        // Обработчик нажатия для ячейки
                        console.log("Cell pressed");
                    }}/>
                <MainScreenCalorieCellComponent
                    title="Перекус / Другое"
                    value="100"
                    imageSource={require("../../Assets/Icons/latemealIcon.png")} // Замените путем к изображению
                    onPress={() => {
                        // Обработчик нажатия для ячейки
                        console.log("Cell pressed");
                    }}/>
                <MainScreenWaterCellComponent
                    title="Вода"
                    value="200"
                    format="Миллилитры"
                    imageSource={require("../../Assets/Icons/bottleIcon.png")} // Замените путем к изображению
                    onPress={() => {
                        // Обработчик нажатия для ячейки
                        console.log("Cell pressed");
                    }}/>
            </View>
        </View>
    );
})
