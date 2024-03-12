import {StyleSheet} from "react-native";


export const mainScreenStyles = StyleSheet.create({
    mainScreenCalendarText: {
        fontSize: 20,
        fontWeight: "700",
        letterSpacing: -0.24,
        lineHeight: 19,
        color: 'white',
        textAlign: 'center',
        marginBottom: 16,
    },
    mainContainer: {
        backgroundColor: "#F5F5F5",
        flex: 1,
    },
    mainScreenCalendar: {
        backgroundColor: '#22BE54',
        borderBottomLeftRadius: 26,
        borderBottomRightRadius: 26,
        height: 105,
        width: 'auto',
        justifyContent: "flex-end",
    },
    mainScreenCalorieCellsContainer: {
        marginTop: 28,
        flexDirection: "column",
        flex: 1,
    },
})


export const aboutScreenStyles = StyleSheet.create({
    aboutContainer: {
        backgroundColor: "white",
        padding: 20,
        flex: 1
    },
    aboutSafeArea: {
        flex: 1
    },
    aboutHeader: {
        fontSize: 20,
        fontWeight: "bold",
        lineHeight: 23,
        letterSpacing: -0.24,
        textAlign: "left",
        color: "#2C2C2C",
        marginBottom: 10,
    },
    aboutMainText: {
        fontSize: 16,
        fontWeight: "normal",
        lineHeight: 19,
        letterSpacing: -0.24,
        textAlign: "left",
        color: "#2C2C2C",
        marginBottom: 20,
    },
    aboutSeparator: {
        height: 1,
        marginVertical: 5,
    },
})


export const caloriesStyles = StyleSheet.create({
    mainScreenCalorieCellContainer: {
        width: "auto",
        height: 66,
        marginHorizontal: 10,
        marginBottom: 19,
    },
    calorieCellRectangle: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        paddingHorizontal: 9,
    },
    calorieCellLabel: {
        fontFamily: "Roboto",
        fontWeight: "600",
        fontSize: 18,
        lineHeight: 21,
        letterSpacing: -0.24,
        color: "#2C2C2C",
        marginLeft: 14,
    },
    calorieCellCaloriesContainer: {
        flexDirection: "column",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: 27,
    },
    calorieCellCaloriesValue: {
        fontFamily: "Inter",
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 19,
        color: "#2C2C2C",
    },
    calorieCellCaloriesLabel: {
        fontFamily: "Inter",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 15,
        color: "#858484",
    },
    calorieCellImage: {
        width: 29,
        height: 29,
        marginLeft: 10,
    },
    calorieCellButton: {
        backgroundColor: "#F5F5F5",
        borderRadius: 50,
        width: 32,
        height: 32,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
        marginLeft: 6
    },
    calorieCellPlus: {
        color: "#22BE54",
        fontSize: 20,
        fontWeight: "bold",
    },
    waterCellMillilitresContainer: {
        flexDirection: "column",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: 14,
    },
})


export const tabBarStyles = StyleSheet.create({
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
})
