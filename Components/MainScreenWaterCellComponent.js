import React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";
import {styles} from "../Assets/Styles/Styles";

const MainScreenWaterCellComponent = ({title, value, imageSource, onPress}) => {
    return (
        <View style={styles.mainScreenCalorieCellContainer}>
            <View style={styles.calorieCellRectangle}>
                <Image source={imageSource} style={styles.calorieCellImage}/>
                <Text style={styles.calorieCellLabel}>{title}</Text>
                <View style={styles.waterCellMillilitresContainer}>
                    <Text style={styles.calorieCellCaloriesValue}>{value}</Text>
                    <Text style={styles.calorieCellCaloriesLabel}>Миллилитры</Text>
                </View>
                <TouchableOpacity style={styles.calorieCellButton} onPress={onPress}>
                    <Text style={styles.calorieCellPlus}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default MainScreenWaterCellComponent;
