import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    tabBarSelectedIcon: {
        height: 25,
        width: 25,
        tintColor: '#22BE54'
    },
    tabBarDisabledIcon: {
        height: 25,
        width: 25,
        tintColor: '#858484'
    },
    tabBarSelectedLabel: {
        fontSize: 12,
        color: '#22BE54'
    },
    tabBarDisabledLabel: {
        fontSize: 12,
        color: '#858484'
    },
    aboutContainer: {
        backgroundColor: "white",
        padding: 20,
        flex: 1
    },
    mainContainer: {
        backgroundColor: "#F5F5F5",
        flex: 1,
    },
    safeArea: {
        flex: 1
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        lineHeight: 23,
        letterSpacing: -0.24,
        textAlign: "left",
        color: "#2C2C2C",
        marginBottom: 10,
    },
    mainText: {
        fontSize: 16,
        fontWeight: "normal",
        lineHeight: 19,
        letterSpacing: -0.24,
        textAlign: "left",
        color: "#2C2C2C",
        marginBottom: 20,
    },
    mainScreenCalendarText: {
        fontSize: 20,
        fontWeight: "700",
        letterSpacing: -0.24,
        lineHeight: 19,
        color: 'white',
        textAlign: 'center',
        marginBottom: 26,
    },
    separator: {
        height: 1,
        marginVertical: 5,
    },
    mainScreenCalendar: {
        backgroundColor: '#22BE54',
        borderBottomLeftRadius: 26,
        borderBottomRightRadius: 26,
        height: 105,
        width: 'auto',
        justifyContent: "flex-end",
    },
    mainScreenCalorieCellContainer: {
        marginTop: 28,
        flexDirection: "column",
        flex: 1,
    }
})
