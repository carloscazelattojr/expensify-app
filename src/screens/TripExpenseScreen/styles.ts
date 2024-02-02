import { Platform, StatusBar, StyleSheet } from 'react-native';
import theme from '../../theme';

const statusBar = StatusBar.currentHeight ? StatusBar.currentHeight : 30;
const ios = Platform.OS === 'ios';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: ios ? statusBar : null,
    },
    content: {
        paddingLeft: 4,
        paddingRight: 4,
    },

    contentBack: {
        position: 'relative',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',

    },
    containerButtonBack: {
        position: 'absolute',
        top: 0,
        left: 0,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
    },
    place: {
        fontSize: 30,
        fontWeight: 'bold',
        color: theme.colors.heading,
        textAlign: 'center',
    },
    country: {
        fontSize: 15,
        color: theme.colors.heading,
        textAlign: 'center',
    },
    buttontLogout: {
        padding: 8,
        paddingHorizontal: 12,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#cbd5e0',
        borderRadius: 999,
    },
    textLogout: {
        color: theme.colors.heading
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,

    },
    image: {
        width: 200,
        height: 200,
    },
    tripContainer: {
        marginTop: 0,
        marginBottom: 16,
        paddingHorizontal: 16,
    },
    tripRecentGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    tripRecentText: {
        color: theme.colors.heading,
        fontWeight: 'bold'
    },
    tripRecentButton: {
        padding: 8,
        paddingHorizontal: 12,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#cbd5e0',
        borderRadius: 999,
    },
    tripRecentButtonText: {
        color: theme.colors.heading,
    },
    flatCardButton: {
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    flatlist: {
        marginTop: 20,
        marginHorizontal: 4,
        height: 430
    },
    flatImage: {
        width: 150,
        height: 150,
        marginBottom: 4
    },
    flatText1: {
        color: theme.colors.heading,
        fontWeight: 'bold',
    },
    flatText2: {
        color: theme.colors.heading,
        fontSize: 12,

    }

});
