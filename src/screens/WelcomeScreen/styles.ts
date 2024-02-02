import { Platform, StatusBar, StyleSheet } from 'react-native';
import theme from '../../theme';

const statusBar = StatusBar.currentHeight ? StatusBar.currentHeight : 30;
const ios = Platform.OS === 'ios';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: ios ? statusBar : null,
        justifyContent: 'space-around',
        backgroundColor: 'white',
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,

    },
    image: {
        height: 250,
        width: 250,
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40,
        marginTop: 30,
        marginBottom: 30,
    },
    main: {
        marginHorizontal: 20,
        marginBottom: 80
    },
    button: {
        padding: 15,
        borderRadius: 999,
        overflow: 'hidden',
        marginBottom: 20,
        backgroundColor: theme.colors.button,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,

    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
});