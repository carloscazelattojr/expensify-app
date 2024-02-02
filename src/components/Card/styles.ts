import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 22,
        padding: 15,
        marginBottom: 10,
        borderRadius: 20,
        borderWidth: 1,
    },
    cards: {},
    title: {
        color: theme.colors.heading,
        fontWeight: 'bold',
    },
    category: {
        color: theme.colors.heading,
    }
});