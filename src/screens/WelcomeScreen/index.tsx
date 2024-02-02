import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import theme from '../../theme';

export function WelcomeScreen() {

    const navigation = useNavigation();

    const handleScreen = (screen: string) => {
        navigation.navigate(screen);
    }

    return (
        <View style={styles.container}>
            <View >
                <View style={styles.content}>
                    <Image source={require('../../asset/welcome.png')} style={styles.image} />
                </View>
                <View style={styles.main}>
                    <Text style={styles.title}>Expensefy</Text>
                    <TouchableOpacity style={styles.button} onPress={() => handleScreen('SignIn')} >
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: theme.colors.green }]} onPress={() => handleScreen('SignUp')} >
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}