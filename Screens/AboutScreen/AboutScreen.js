import React from "react";
import { observer } from "mobx-react";
import { Text, View, SafeAreaView } from "react-native";
import {aboutScreenStyles} from "../../Assets/Styles/Styles";

export const AboutScreen = observer(() => {
    return (
        <SafeAreaView style={aboutScreenStyles.aboutSafeArea}>
            <View style={aboutScreenStyles.aboutContainer}>
                <Text style={aboutScreenStyles.aboutHeader}>О приложении</Text>
                <View style={aboutScreenStyles.aboutSeparator} />
                <Text style={aboutScreenStyles.aboutMainText}>
                    Данное приложение создано для ведения учета потребляемых калорий.
                </Text>
                <View style={aboutScreenStyles.aboutSeparator} />
                <Text style={aboutScreenStyles.aboutMainText}>
                    На экране “Дневник” вы можете выбрать прием пищи и дату. После этого,
                    указав количество калорий и время, запись добавится в общее количество
                    калорий.
                </Text>
            </View>
        </SafeAreaView>
    );
});
