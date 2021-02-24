import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from './navigators/rootStackNavigator'

const App = () => {
    return (
        <NavigationContainer>
            <RootStackNavigator/>
        </NavigationContainer>
    )
}

export default App;
