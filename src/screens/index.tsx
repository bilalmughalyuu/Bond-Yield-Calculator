import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CalculatorScreen } from "./CalculatorScreen";
import { CashFlowScreen } from "./CashFlowScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return <Stack.Navigator
        initialRouteName="Calculator"
        screenOptions={{
            headerStyle: { backgroundColor: '#121212' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
        }}
    >
        <Stack.Screen
            name="Calculator"
            component={CalculatorScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="CashFlow"
            component={CashFlowScreen}
            options={{ title: 'Schedule' }}
        />
    </Stack.Navigator>
    }

export default Navigation