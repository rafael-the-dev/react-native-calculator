import { StyleSheet, View } from "react-native"

import Button from "../button"

const ButtonsContainer = () => (
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
            <Button color="#647198" label="Reset" style={styles.button} />
            <Button color="#D03F2F" label="=" style={styles.button} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    content: {
        backgroundColor: "#242D44",
        marginTop: 30,
        padding: 15,
        paddingBottom: 0
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

export default ButtonsContainer;