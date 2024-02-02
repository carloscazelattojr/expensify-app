import React, { useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { BackButton } from '../../components/BackButton';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLoading } from '../../redux/slice/user';
import { Loading } from '../../components/Loading';

export function SignUpScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { userLoading } = useSelector(state => state.user);
    const dispatch = useDispatch();


    const handleSubmit = async () => {
        if (email && password) {
            try {
                dispatch(setUserLoading(true));
                await createUserWithEmailAndPassword(auth, email, password);
                dispatch(setUserLoading(false));
            } catch (error) {
                dispatch(setUserLoading(false));
                Snackbar.show({
                    text: "Error",
                    backgroundColor: 'red'
                });
            }

        } else {
            Snackbar.show({
                text: "E-mail, password and repassword required!",
                backgroundColor: 'red'
            });
        }
    }

    return (
        <View style={styles.container}>
            <View>

                <View style={styles.content}>
                    <View style={styles.containerButton}>
                        <BackButton />
                    </View>
                    <Text style={styles.title}>Sign Up</Text>
                </View>

                <View style={styles.containerImage}>
                    <Image source={require('../../asset/signup.png')} style={styles.image} />
                </View>

                <View style={styles.form}>
                    <Text style={styles.fieldText}>E-mail</Text>
                    <TextInput
                        style={styles.textinput}
                        value={email}
                        keyboardType='email-address'
                        onChangeText={(text) => setEmail(text)}
                    />

                    <Text style={styles.fieldText}>Password</Text>
                    <TextInput
                        style={styles.textinput}
                        value={password}
                        secureTextEntry
                        keyboardType='default'
                        onChangeText={(text) => setPassword(text)}
                    />


                </View>

            </View>

            <View style={styles.footer}>
                {
                    userLoading ? <Loading /> : (
                        <TouchableOpacity style={styles.footerButton} onPress={handleSubmit}>
                            <Text style={styles.footerButtonText}>Sign Up</Text>
                        </TouchableOpacity>
                    )
                }
            </View>
        </View>
    );
}