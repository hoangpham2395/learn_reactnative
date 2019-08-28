import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    containerLogin: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    indicator: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    input: {
        alignSelf: 'stretch',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'steelblue',
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'steelblue',
    },
    mT20: {
        marginTop: 20,
    },
    full: {
        alignSelf: 'stretch',
    },
    itemTitle: {
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    itemImage: {
        width: 100,
        height: 100,
        marginBottom: 5
    },
    itemButton: {
        margin: 10,
    },
    textInput: {
        height: 40,
        borderColor: 'steelblue',
        borderWidth: 1,
        marginTop: 5,
        marginBottom: 5,
    },
    label: {
        fontWeight: 'bold',
    },
    viewButton: {
        width: '50%',
        marginTop: 20,
        marginBottom: 20,
    },
});

export default styles;