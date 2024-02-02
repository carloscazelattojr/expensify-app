import React from 'react';
import { Text } from 'react-native';

import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import theme from '../../theme';
import { useNavigation } from '@react-navigation/native';

export function BackButton() {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.container}>
            <ChevronLeftIcon size="30" color={theme.colors.button} />
        </TouchableOpacity>
    );
}