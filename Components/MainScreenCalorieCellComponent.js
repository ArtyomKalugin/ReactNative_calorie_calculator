import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import {caloriesStyles} from "../Assets/Styles/Styles";
import {observer} from "mobx-react";

const MainScreenCalorieCellComponent = observer(({title, value, imageSource, onPress}) => {
    return (
        <View style={caloriesStyles.mainScreenCalorieCellContainer}>
            <View style={caloriesStyles.calorieCellRectangle}>
                <Image source={imageSource} style={caloriesStyles.calorieCellImage}/>
                <Text style={caloriesStyles.calorieCellLabel}>{title}</Text>
                <View style={caloriesStyles.calorieCellCaloriesContainer}>
                    <Text style={caloriesStyles.calorieCellCaloriesValue}>{value}</Text>
                    <Text style={caloriesStyles.calorieCellCaloriesLabel}>Калории</Text>
                </View>
                <TouchableOpacity style={caloriesStyles.calorieCellButton} onPress={onPress}>
                    <Text style={caloriesStyles.calorieCellPlus}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
});

export default MainScreenCalorieCellComponent;
