import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { observer } from "mobx-react";
import {MainScreen} from "../MainScreen/MainScreen";
import {AboutScreen} from "../AboutScreen/AboutScreen";
import {Image, Text} from "react-native";
import {styles} from "../../Assets/Styles/Styles";

const Tab = createBottomTabNavigator();
export const NavigationScreen = observer(() => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name={'Дневник'}
                component={MainScreen}
                options={
                    {
                        tabBarIcon: ({focused}) => (
                            <Image
                                style={focused ? styles.tabBarSelectedIcon : styles.tabBarDisabledIcon}
                                source={require('../../Assets/Icons/dictTabIcon.png')
                                }
                            />
                        ),
                        tabBarLabel: ({focused}) => (
                            <Text style={focused ? styles.tabBarSelectedLabel : styles.tabBarDisabledLabel}>
                                Дневник
                            </Text>
                        ),
                        headerShown: false
                    }
                }
            />
            <Tab.Screen
                name={'О приложении'}
                component={AboutScreen}
                options={
                    {
                        tabBarIcon: ({focused}) => (
                            <Image
                                style={focused ? styles.tabBarSelectedIcon : styles.tabBarDisabledIcon}
                                source={require('../../Assets/Icons/aboutTabIcon.png')
                                }
                            />
                        ),
                        tabBarLabel: ({focused}) => (
                            <Text style={focused ? styles.tabBarSelectedLabel : styles.tabBarDisabledLabel}>
                                О приложении
                            </Text>
                        ),
                        headerShown: false
                    }
                }
            />
        </Tab.Navigator>
    );
})
