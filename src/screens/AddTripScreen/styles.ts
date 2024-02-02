import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
    container: {

        alignItems: 'stretch',
        height: '100%',
        marginHorizontal: 16,
    },
    content: {
        position: 'relative',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',

    },
    containerButton: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: theme.colors.heading
    },
    containerImage: {
        flexDirection: 'row',
        justifyContent: 'center',

    },
    image: {
        width: 200,
        height: 200,
    },
    form: {
        marginHorizontal: 8,
        marginVertical: 8,
        color: theme.colors.heading
    },
    fieldText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: theme.colors.heading
    },
    textinput: {
        padding: 16,
        backgroundColor: 'white',
        borderRadius: 100,
        marginBottom: 12,
    },
    footer: {},
    footerButton: {
        backgroundColor: theme.colors.button,
        marginVertical: 15,
        borderRadius: 999,
        height: 60,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        marginHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center'

    },
    footerButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
});