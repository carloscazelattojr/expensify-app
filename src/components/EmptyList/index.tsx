import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';

interface EmptyListProps {
    message: string;
}

export function EmptyList({ message }: EmptyListProps) {
    return (
        <View style={styles.container}>
            <Image source={require('../../asset/empty.png')} style={styles.image} />
            <Text style={styles.text}>{message || 'data not found'}</Text>
        </View>
    );
}