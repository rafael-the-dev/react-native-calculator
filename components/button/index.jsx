import { Button, StyleSheet, View } from "react-native"


const ButtonContainer = ({ color, isSpecialChar, label, onPress, style }) => (
    <View style={[ styles.container, style ]}>
        <Button 
            color={color ? color : "#EAE3DC" }
            onPress={isSpecialChar ? onPress : onPress(label)}
            title={label}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        color: "#000",
        height: 50,
        width: "23%"
    }
});

export default ButtonContainer;