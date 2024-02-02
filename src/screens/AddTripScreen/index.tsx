import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { BackButton } from '../../components/BackButton';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Loading } from '../../components/Loading';
import Snackbar from 'react-native-snackbar';
import { useSelector } from 'react-redux';
import { tripsRef } from '../../config/firebase';
import { addDoc } from 'firebase/firestore';

export function AddTripScreen() {

    const [place, setPlace] = useState('');
    const [country, setCountry] = useState('');

    const [loading, setLoading] = useState(false);
    const { user } = useSelector(state => state.user)

    const navigation = useNavigation();

    const handleAddTrip = async () => {
        if (place && country) {
            setLoading(true);
            const doc = await addDoc(tripsRef, {
                place,
                country,
                userId: user.uid
            });
            setLoading(false);

            if (doc && doc.id) {
                navigation.goBack();
            }
        } else {
            setLoading(false);
            Snackbar.show({
                text: "Place and Country are required!",
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
                    <Text style={styles.title}>Add Trip</Text>
                </View>

                <View style={styles.containerImage}>
                    <Image source={require('../../asset/4.png')} style={styles.image} />
                </View>

                <View style={styles.form}>
                    <Text style={styles.fieldText}>Where On Earth ?</Text>
                    <TextInput
                        style={styles.textinput}
                        value={place}
                        onChangeText={(text) => setPlace(text)}
                    />

                    <Text style={styles.fieldText}>Which Country</Text>
                    <TextInput
                        style={styles.textinput}
                        value={country}
                        onChangeText={(text) => setCountry(text)}
                    />
                </View>

            </View>

            <View style={styles.footer}>
                {
                    loading ? <Loading /> : (
                        <TouchableOpacity style={styles.footerButton} onPress={handleAddTrip}>
                            <Text style={styles.footerButtonText}>Add Trip</Text>
                        </TouchableOpacity>
                    )
                }
            </View>
        </View>
    );
}