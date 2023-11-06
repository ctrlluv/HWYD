
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Calendar from "../screens/Calendar";
import Diary from "../screens/Diary";

const Stack = createNativeStackNavigator()

function StackNavigator() {
    return (     
            <Stack.Navigator  
              initialRouteName="Calendar"
              screenOptions={() => ({
                headerShown: false,
              })}>
                <Stack.Screen name="Calendar"  component={Calendar} />
                <Stack.Screen name="Diary" component={Diary} />
            </Stack.Navigator>
        
    )
}
export default StackNavigator