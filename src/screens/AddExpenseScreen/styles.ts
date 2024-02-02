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
        width: 100,
        height: 100,
    },
    form: {
        marginHorizontal: 8,
        marginVertical: 8,
        color: theme.colors.heading
    },
    fieldText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    textinput: {
        padding: 16,
        backgroundColor: 'white',
        borderRadius: 100,
        marginBottom: 12,
        color: theme.colors.heading
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
    containerCategories: {
        marginHorizontal: 8
    },
    categories: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',

    },
    titleCategory: {
        fontWeight: 'bold',
        marginBottom: 10,
        color: theme.colors.heading
    },

    categoryBtn: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 16,
        marginBottom: 8,
        marginRight: 8
    }

});