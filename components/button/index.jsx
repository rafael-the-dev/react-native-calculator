import { Button, StyleSheet, View } from "react-native"


const ButtonContainer = ({ label, onPress, style }) => (
    <View style={[ styles.container, style ]}>
        <Button 
            color={color ? color : "#CCC" }
            onPress={onPress}
            style>
            { label }
        </Button>
    </View>
);

const styles = StyleSheet.create({
    container: {
        height: 30,
        width: 30
    }
});

export default ButtonContainer;