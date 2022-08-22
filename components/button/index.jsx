import { StyleSheet, TouchableOpacity, Text } from "react-native"


const ButtonContainer = ({ isSpecialChar, label, onPress, style }) => (
    <TouchableOpacity 
        onPress={isSpecialChar ? onPress : onPress(label)}
        style={[ styles.container, style ]}>
        <Text style={styles.label}>{ label }</Text>
    </TouchableOpacity>
);


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#EAE3DC",
        color: "#434A59",
        height: 50,
        justifyContent: "center",
        marginBottom: 10,
        width: "22%"
    },
    label: {
        fontSize: "1.2rem",
        fontWeight: "bold"
    }
});

export default ButtonContainer;
