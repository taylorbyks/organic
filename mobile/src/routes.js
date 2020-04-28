import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import Tasks from './pages/Tasks'
import Detail from './pages/Detail'
import ListProfile from './pages/ListProfile'

const AppStack = createStackNavigator()

export default function Routes() {
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}> 
                <AppStack.Screen name="Home" component={Home} /> 
                <AppStack.Screen name="Tasks" component={Tasks} />
                <AppStack.Screen name="Detail" component={Detail} />
                <AppStack.Screen name="ListProfile" component={ListProfile} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}