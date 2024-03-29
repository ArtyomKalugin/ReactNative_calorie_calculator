import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import {caloriesStyles} from "../Assets/Styles/Styles";
import {observer} from "mobx-react";

const MainScreenWaterCellComponent = observer(({title, value, imageSource, onPress}) => {
    return (
        <View style={caloriesStyles.mainScreenCalorieCellContainer}>
            <View style={caloriesStyles.calorieCellRectangle}>
                <Image source={imageSource} style={caloriesStyles.calorieCellImage}/>
                <Text style={caloriesStyles.calorieCellLabel}>{title}</Text>
                <View style={caloriesStyles.waterCellMillilitresContainer}>
                    <Text style={caloriesStyles.calorieCellCaloriesValue}>{value}</Text>
                    <Text style={caloriesStyles.calorieCellCaloriesLabel}>Миллилитры</Text>
                </View>
                <TouchableOpacity style={caloriesStyles.calorieCellButton} onPress={onPress}>
                    <Text style={caloriesStyles.calorieCellPlus}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
});

export default MainScreenWaterCellComponent;
