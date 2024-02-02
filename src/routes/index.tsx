import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { AddTripScreen } from '../screens/AddTripScreen';
import { AddExpenseScreen } from '../screens/AddExpenseScreen';
import { TripExpenseScreen } from '../screens/TripExpenseScreen';
import { WelcomeScreen } from '../screens/WelcomeScreen';
import { SignInScreen } from '../screens/SignInScreen';
import { SignUpScreen } from '../screens/SingUpScreen';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';
import { setUser } from '../redux/slice/user';

const { Screen, Navigator } = createStackNavigator();

export function AppRoutes() {
    const { user } = useSelector(state => state.user);

    const dispatch = useDispatch();

    onAuthStateChanged(auth, u => {
        console.log('got user: ', u);
        dispatch(setUser(u));
    })

    if (user) {
        return (
            <NavigationContainer >
                <Navigator initialRouteName='Welcome'>
                    <Screen options={{ headerShown: false }} name='Home' component={HomeScreen} />
                    <Screen options={{ headerShown: false }} name='AddTrip' component={AddTripScreen} />
                    <Screen options={{ headerShown: false }} name='AddExpense' component={AddExpenseScreen} />
                    <Screen options={{ headerShown: false }} name='TripExpense' component={TripExpenseScreen} />
                </Navigator>
            </NavigationContainer>

        );

    } else {

        return (
            <NavigationContainer >
                <Navigator initialRouteName='Welcome'>

                    <Screen options={{ headerShown: false }} name='Welcome' component={WelcomeScreen} />
                    <Screen options={{ headerShown: false, presentation: 'modal' }} name='SignIn' component={SignInScreen} />
                    <Screen options={{ headerShown: false, presentation: 'modal' }} name='SignUp' component={SignUpScreen} />

                </Navigator>
            </NavigationContainer>

        );
    }
}