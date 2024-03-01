import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { observer } from "mobx-react";
import {MainScreen} from "../MainScreen/MainScreen";
import {AboutScreen} from "../AboutScreen/AboutScreen";

const Tab = createBottomTabNavigator();
export const NavigationScreen = observer(() => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={'Дневник'} component={MainScreen} />
            <Tab.Screen name={'О приложении'} component={AboutScreen} />
        </Tab.Navigator>
    );
})
