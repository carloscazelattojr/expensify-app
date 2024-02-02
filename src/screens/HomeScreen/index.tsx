import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { items } from '../../mocks/items';
import randomImage from '../../utils/randomImage';
import { EmptyList } from '../../components/EmptyList';

import { useIsFocused, useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import { auth, tripsRef } from '../../config/firebase';
import { useSelector } from 'react-redux';
import { getDocs, query, where } from 'firebase/firestore';



export function HomeScreen() {

    const navigation = useNavigation();
    const [trips, setTrips] = useState([]);
    const { user } = useSelector(state => state.user);

    const isFocused = useIsFocused();

    const fetchTrips = async () => {
        const q = query(tripsRef, where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);
        let data = [];
        querySnapshot.forEach(doc => {
            data.push({ ...doc.data(), id: doc.id });
        });
        setTrips(data);
    }

    const handleNavigation = (screen: string) => {
        navigation.navigate(screen);
    }

    const handleTripExpenses = (item) => {
        navigation.navigate('TripExpense', { ...item });
    }


    const handleLogout = async () => {
        await signOut(auth);
    }

    useEffect(() => {
        fetchTrips();
    }, [isFocused]);
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.title}>Expensify</Text>
                <TouchableOpacity style={styles.buttontLogout} onPress={handleLogout}>
                    <Text style={styles.textLogout}>Logout</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.imageContainer}>
                <Image source={require('../../asset/banner.png')} style={styles.image} />
            </View>

            <View style={styles.tripContainer}>
                <View style={styles.tripRecentGroup}>
                    <Text style={styles.tripRecentText}>Recent Trips</Text>
                    <TouchableOpacity style={styles.tripRecentButton}
                        onPress={() => { handleNavigation('AddTrip') }}>
                        <Text style={styles.tripRecentButtonText}>Add Trip</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={trips}
                    numColumns={2}
                    keyExtractor={item => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={<EmptyList message={"You haven't recorded any trips yet"} />}
                    columnWrapperStyle={{
                        justifyContent: 'space-between'
                    }}
                    contentContainerStyle={{
                        paddingBottom: 50,
                        flexGrow: 1
                    }}
                    style={styles.flatlist}
                    renderItem={({ item }) => {
                        let img = randomImage();
                        return (
                            <TouchableOpacity style={styles.flatCardButton} onPress={() => handleTripExpenses(item)}>
                                <View>
                                    <Image source={img} style={styles.flatImage} />
                                    <Text style={styles.flatText1}>{item.place}</Text>
                                    <Text style={styles.flatText2}>{item.country}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />

            </View>
        </View>
    );
}