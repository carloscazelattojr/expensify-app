import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { BackButton } from '../../components/BackButton';
import { TextInput } from 'react-native-gesture-handler';
import Snackbar from 'react-native-snackbar';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { Loading } from '../../components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLoading } from '../../redux/slice/user';

export function SignInScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { userLoading } = useSelector(state => state.user);

    const dispatch = useDispatch();

    const handleSubmit = async () => {
        if (email && password) {
            try {
                dispatch(setUserLoading(true));
                await signInWithEmailAndPassword(auth, email, password);
                dispatch(setUserLoading(false));
            } catch (error) {
                dispatch(setUserLoading(false));
                Snackbar.show({
                    text: "E-mail or password invalid",
                    backgroundColor: 'red'
                });
            }
        } else {
            Snackbar.show({
                text: "E-mail or password required!",
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
                    <Text style={styles.title}>Sign In</Text>
                </View>

                <View style={styles.containerImage}>
                    <Image source={require('../../asset/login.png')} style={styles.image} />
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
                    <TouchableOpacity style={styles.forgetPass}>
                        <Text>Forget Password ?</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.footer}>
                {
                    userLoading ? <Loading /> : (
                        <TouchableOpacity style={styles.footerButton} onPress={handleSubmit}>
                            <Text style={styles.footerButtonText}>Sign In</Text>
                        </TouchableOpacity>
                    )
                }
            </View>
        </View>
    );
}