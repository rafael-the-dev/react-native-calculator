import { Button, StyleSheet, View } from "react-native"


const ButtonContainer = ({ color, label, onPress, style }) => (
    <View style={[ styles.container, style ]}>
        <Button 
            color={color ? color : "#CCC" }
            onPress={onPress}
            title={label}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: "23%"
    }
});

export default ButtonContainer;