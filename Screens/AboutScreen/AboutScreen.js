import React from "react";
import { observer } from "mobx-react";
import { Text, View, StyleSheet } from "react-native";

export const AboutScreen = observer(() => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>О приложении</Text>
            <Text style={styles.mainText}>
                Данное приложение создано для ведения учета потребляемых калорий.
            </Text>
            <View style={styles.separator} />
            <Text style={styles.mainText}>
                На экране “Дневник” вы можете выбрать прием пищи и дату. После этого,
                указав количество калорий и время, запись добавится в общее количество
                калорий.
            </Text>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2C2C2C",
        padding: 20,
    },
    header: {
        fontFamily: "Roboto",
        fontSize: 20,
        fontWeight: "600",
        lineHeight: 23,
        letterSpacing: -0.23999999463558197,
        textAlign: "left",
        color: "#FFFFFF",
        marginBottom: 10,
    },
    mainText: {
        fontFamily: "Roboto",
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 19,
        letterSpacing: -0.23999999463558197,
        textAlign: "left",
        color: "#FFFFFF",
        marginBottom: 20,
    },
    separator: {
        height: 1,
        backgroundColor: "#2C2C2C",
        marginVertical: 10,
    },
});
