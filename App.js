import { StyleSheet, Text, View } from 'react-native';

import Button from './components/button';

const App = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>

            </View>
            <View style={styles.content}>
                <View style={styles.buttonsContainer}>
                    <Button label="7" />
                    <Button label="8" />
                    <Button label="9" />
                    <Button label="del" />
                    <Button label="4" />
                    <Button label="5" />
                    <Button label="6" />
                    <Button label="+" />
                    <Button label="1" />
                    <Button label="2" />
                    <Button label="3" />
                    <Button label="-" />
                    <Button label="." />
                    <Button label="0" />
                    <Button label="/" />
                    <Button label="x" />
                </View>
                <View style={styles.secondaryButtons}>
                    <Button label="Reset" style={styles.button} />
                    <Button label="=" style={styles.button} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: "5%",
        paddingBottom: 20
    },
    header: {
        backgroundColor: "red",
        paddingVertical: 20
    },
    content: {
        backgroundColor: "cyan",
        flexGrow: 1
    },
    buttonsContainer: {
        alignItems: "flex-start",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    secondaryButtons: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    button: {
        width: "49%"
    }
});

export default App;