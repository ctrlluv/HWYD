
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Memories from "../screens/Memories";

const Stack = createNativeStackNavigator()

function MemoriesNavigator() {
    return (
        
            <Stack.Navigator  
              screenOptions={() => ({
                headerShown: false,
              })}>
                <Stack.Screen 
                  name='Memories' 
                  component={Memories} />
            </Stack.Navigator>
        
    )
}
export default MemoriesNavigator