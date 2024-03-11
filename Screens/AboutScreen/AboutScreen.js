import React from "react";
import { observer } from "mobx-react";
import { Text, View, SafeAreaView } from "react-native";
import {styles} from "../../Assets/Styles/Styles";

export const AboutScreen = observer(() => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.aboutContainer}>
                <Text style={styles.header}>О приложении</Text>
                <View style={styles.separator} />
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
        </SafeAreaView>
    );
});
