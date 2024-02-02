import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

import { EmptyList } from '../../components/EmptyList';
import { tripExpensesItems } from '../../mocks/tipExpensesItems';

import { useIsFocused, useNavigation } from '@react-navigation/native';
import { BackButton } from '../../components/BackButton';
import { Card } from '../../components/Card';
import { getDocs, query, where } from 'firebase/firestore';
import user from '../../redux/slice/user';
import { expensesRef } from '../../config/firebase';


export function TripExpenseScreen(props) {

    const { id, place, country } = props.route.params;
    const navigation = useNavigation();
    const [expenses, setExpenses] = useState([]);

    const isFocused = useIsFocused();

    const fetchExpenses = async () => {
        const q = query(expensesRef, where("tripId", "==", id));
        const querySnapshot = await getDocs(q);
        let data = [];
        querySnapshot.forEach(doc => {
            data.push({ ...doc.data(), id: doc.id });
        });
        setExpenses(data);
    }

    const handleNavigation = (screen: string) => {
        navigation.navigate(screen, { id });
    }

    useEffect(() => {
        fetchExpenses();
    }, [isFocused]);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.contentBack}>
                    <View style={styles.containerButtonBack}>
                        <BackButton />
                    </View>
                    <View>
                        <Text style={styles.place}>{place}</Text>
                        <Text style={styles.country}>{country}</Text>
                    </View>
                </View>

                <View style={styles.imageContainer}>
                    <Image source={require('../../asset/7.png')} style={styles.image} />
                </View>

                <View style={styles.tripContainer}>
                    <View style={styles.tripRecentGroup}>
                        <Text style={styles.tripRecentText}>Expenses</Text>
                        <TouchableOpacity style={styles.tripRecentButton}
                            onPress={() => { handleNavigation('AddExpense') }}>
                            <Text style={styles.tripRecentButtonText}>Add Expense</Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        data={expenses}
                        keyExtractor={item => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={<EmptyList message={"You haven't recorded any expenses yet"} />}

                        contentContainerStyle={{
                            paddingBottom: 20,
                            flexGrow: 1
                        }}
                        style={styles.flatlist}
                        renderItem={({ item }) => {
                            return (
                                <Card item={item} />
                            )
                        }}
                    />

                </View>
            </View>
        </View>
    );
}