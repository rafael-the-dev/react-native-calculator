import { StyleSheet, View } from "react-native"

import Button from "../button"

const ButtonsContainer = ({ divideHandler, deleteHandler, equalClickHandler, multiplyHandler, numberClickHandler, resetHandler, subtractHandler, sumHandler }) => (
    <View style={styles.content}>
        <View style={styles.buttonsContainer}>
            <Button label="7" onPress={numberClickHandler} />
            <Button label="8" onPress={numberClickHandler} />
            <Button label="9" onPress={numberClickHandler} />
            <Button isSpecialChar label="del" onPress={deleteHandler} />
            <Button label="4" onPress={numberClickHandler} />
            <Button label="5" onPress={numberClickHandler} />
            <Button label="6" onPress={numberClickHandler} />
            <Button isSpecialChar label="+" onPress={sumHandler} />
            <Button label="1" onPress={numberClickHandler} />
            <Button label="2" onPress={numberClickHandler} />
            <Button label="3" onPress={numberClickHandler} />
            <Button isSpecialChar label="-" onPress={subtractHandler} />
            <Button label="." onPress={numberClickHandler} />
            <Button label="0" onPress={numberClickHandler} />
            <Button isSpecialChar label="/" onPress={divideHandler} />
            <Button isSpecialChar label="x" onPress={multiplyHandler} />
        </View>
        <View style={styles.secondaryButtons}>
            <Button isSpecialChar label="Reset" onPress={resetHandler} style={[ styles.button, styles.resetButton ]} />
            <Button isSpecialChar label="=" onPress={equalClickHandler} style={[ styles.button, styles.equalButton ]} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    content: {
        backgroundColor: "#242D44",
        marginTop: 30,
        padding: 15,
        paddingBottom: 4
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
        width: "48%"
    },
    resetButton: {
        backgroundColor: "#647198",
    },
    equalButton: {
        backgroundColor: "#D03F2F"
    }
});

export default ButtonsContainer;