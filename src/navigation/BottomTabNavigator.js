import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MemoriesNavigator from "./MemoriesNavigator";
import StackNavigator from '../navigation/StackNavigator'
import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import Feather from '@expo/vector-icons/Feather'

const BottomTab = createBottomTabNavigator()

function BottomTabNavigator() {
    return (
    <BottomTab.Navigator 
      initialRouteName="Home" 
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar}}>
          <BottomTab.Screen
            name='Home'
            component={StackNavigator}
            options={{
                tabBarIcon: ({focused}) => (
                    <Feather 
                    size={30} 
                    name= 'calendar'
                    color={focused ? colors.secondary : colors.tertiary} />
                )   
            }}
            />
        <BottomTab.Screen 
          name='MemoriesNav' 
          component={MemoriesNavigator}
          options={{
            tabBarIcon: ({focused}) => (
                <Feather
                size={30}
                name= 'book-open'
                color= {focused ? colors.secondary : colors.tertiary} />
            )
          }}/>
    </BottomTab.Navigator>
    )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.primary,
        borderTopColor: colors.quaternary,
        borderTopWidth: 2,
        height: 60,
    }
})