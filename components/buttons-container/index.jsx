import { StyleSheet, View } from "react-native"

import Button from "../button"

const ButtonsContainer = ({ deleteHandler, numberClickHandler }) => (
    <View style={styles.content}>
        <View style={styles.buttonsContainer}>
            <Button label="7" onPress={numberClickHandler} />
            <Button label="8" onPress={numberClickHandler} />
            <Button label="9" onPress={numberClickHandler} />
            <Button isSpecialChar label="del" onPress={deleteHandler} />
            <Button label="4" onPress={numberClickHandler} />
            <Button label="5" onPress={numberClickHandler} />
            <Button label="6" onPress={numberClickHandler} />
            <Button isSpecialChar label="+" onPress={numberClickHandler} />
            <Button label="1" onPress={numberClickHandler} />
            <Button label="2" onPress={numberClickHandler} />
            <Button label="3" onPress={numberClickHandler} />
            <Button isSpecialChar label="-" onPress={numberClickHandler} />
            <Button label="." onPress={numberClickHandler} />
            <Button label="0" onPress={numberClickHandler} />
            <Button isSpecialChar label="/" onPress={numberClickHandler} />
            <Button isSpecialChar label="x" onPress={numberClickHandler} />
        </View>
        <View style={styles.secondaryButtons}>
            <Button color="#647198" isSpecialChar label="Reset" style={styles.button} />
            <Button color="#D03F2F" isSpecialChar label="=" style={styles.button} />
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