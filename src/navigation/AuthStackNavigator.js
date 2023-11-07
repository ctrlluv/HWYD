import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Signup from "../screens/Signup"

const AuthStack = createNativeStackNavigator()

function AuthStackNavigator() {
    return (     
            <AuthStack.Navigator  
              initialRouteName="Signup"
              screenOptions={() => ({
                headerShown: false,
              })}>
                <AuthStack.Screen name="Login"  component={Login} />
                <AuthStack.Screen name="Signup" component={Signup} />
            </AuthStack.Navigator>
        
    )
}
export default AuthStackNavigator