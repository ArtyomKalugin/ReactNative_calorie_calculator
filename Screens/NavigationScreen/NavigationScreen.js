import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { observer } from "mobx-react";
import {MainScreen} from "../MainScreen/MainScreen";
import {AboutScreen} from "../AboutScreen/AboutScreen";
import {Image, Text} from "react-native";
import {tabBarStyles} from "../../Assets/Styles/Styles";
import {useRootStore} from "../../Modules/RootStore/UseRootStore";
import {useEffect} from "react";

const Tab = createBottomTabNavigator();
export const NavigationScreen = observer(() => {
    const {dateStore} = useRootStore();

    useEffect(() => {
        dateStore.selectDateAction(new Date());
    }, []);

    return (
        <Tab.Navigator>
            <Tab.Screen
                name={'Дневник'}
                component={MainScreen}
                options={
                    {
                        tabBarIcon: ({focused}) => (
                            <Image
                                style={focused ? tabBarStyles.tabBarSelectedIcon : tabBarStyles.tabBarDisabledIcon}
                                source={require('../../Assets/Icons/dictTabIcon.png')
                                }
                            />
                        ),
                        tabBarLabel: ({focused}) => (
                            <Text style={focused ? tabBarStyles.tabBarSelectedLabel : tabBarStyles.tabBarDisabledLabel}>
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
                                style={focused ? tabBarStyles.tabBarSelectedIcon : tabBarStyles.tabBarDisabledIcon}
                                source={require('../../Assets/Icons/aboutTabIcon.png')
                                }
                            />
                        ),
                        tabBarLabel: ({focused}) => (
                            <Text style={focused ? tabBarStyles.tabBarSelectedLabel : tabBarStyles.tabBarDisabledLabel}>
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
