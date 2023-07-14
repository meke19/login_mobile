import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Importação do tipo de navegação

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'

const Stack = createNativeStackNavigator(); //Atribuição da navegação em uma variável

export default function Routes() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{headerShown: false}} //Retira o header com o nome do componente
            />
            <Stack.Screen
                name='SignIn'
                component={SignIn}
                options={{headerShown: false}} 
            />
        </Stack.Navigator>
    )
}