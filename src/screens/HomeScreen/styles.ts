import { Platform, StatusBar, StyleSheet } from 'react-native';
import theme from '../../theme';

const statusBar = StatusBar.currentHeight ? StatusBar.currentHeight : 30;
const ios = Platform.OS === 'ios';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: ios ? statusBar : null,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: theme.colors.heading,
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
        backgroundColor: '#4299E1',
        borderRadius: 20,
        margin: 16,
    },
    image: {
        width: 250,
        height: 250,
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
