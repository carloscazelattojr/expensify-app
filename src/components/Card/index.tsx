import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';
import theme from '../../theme';
import { CardProps } from '../../models/TripItemProps';



export function Card({ item }: CardProps) {
    return (
        <View style={[styles.container, { backgroundColor: theme.colors.bg[item.category] }]}>
            <View style={styles.cards}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.category}>{item.category}</Text>
            </View>
            <View>
                <Text style={{ color: theme.colors.heading }}>$ {item.amount}</Text>
            </View>
        </View>
    );
}