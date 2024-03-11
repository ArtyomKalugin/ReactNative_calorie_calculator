import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const MainScreenWaterCellComponent = ({ title, value, imageSource, onPress }) => {
    return (
        <View style={styles.container} onPress={onPress}>
            <View style={styles.rectangle}>
                <Image source={imageSource} style={styles.image} />
                <Text style={styles.label}>{title}</Text>
                <View style={styles.textContainer}>
                    <View style={styles.caloriesContainer}>
                        <Text style={styles.caloriesValue}>{value}</Text>
                        <Text style={styles.caloriesLabel}>Миллилитры</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={styles.plus}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "auto",
        height: 55,
        marginHorizontal: 10,
        marginBottom: 19,
    },
    rectangle: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        paddingHorizontal: 9,
    },
    label: {
        fontFamily: "Roboto",
        fontWeight: "600",
        fontSize: 18,
        lineHeight: 21,
        letterSpacing: -0.24,
        color: "#2C2C2C",
        marginLeft: 14,
    },
    textContainer: {
        flex: 1,
    },
    caloriesContainer: {
        flexDirection: "column",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: 14,
    },
    caloriesValue: {
        fontFamily: "Inter",
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 19,
        color: "#2C2C2C",
    },
    caloriesLabel: {
        fontFamily: "Inter",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 15,
        color: "#858484",
    },
    image: {
        width: 29,
        height: 29,
        marginLeft: 10,
    },
    button: {
        backgroundColor: "#F5F5F5",
        borderRadius: 50,
        width: 32,
        height: 32,
        justifyContent: "center",
        alignItems: "center",
    },
    plus: {
        color: "#22BE54",
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default MainScreenWaterCellComponent;
