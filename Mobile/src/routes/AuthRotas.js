import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Tela1 from "../screens/Tela1";
import Home from "../screens/Home";
const Stack = createNativeStackNavigator()

export default function AutRotas(){
    return (
        <Stack.Navigator>
            <Stack.Screen
            name= 'Home'
            component={Home}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name= 'Meus Anuncios'
            component={Tela1}
            options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}