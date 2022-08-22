import { useCallback, useMemo, useState } from "react"
import { StyleSheet, Text, View } from 'react-native';

import Content from './components/buttons-container';

const App = () => {
    const [ text, setText ] = useState("");
    const [ result, setResult ] = useState(0);

    const numberClickHandler = useCallback(number => () => {
        setText(currentText => `${currentText}${number}`);
    }, []);

    const deleteHandler = useCallback(() => setText(""), []);

    
    const content = useMemo(() => (
        <Content 
            deleteHandler={deleteHandler}
            numberClickHandler={numberClickHandler} 
        />
    ), [ deleteHandler, numberClickHandler ]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>{ text }</Text>
            </View>
            { content }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3A4663',
        justifyContent: 'center',
        paddingHorizontal: "5%",
        paddingBottom: 20
    },
    header: {
        backgroundColor: "#181F33",
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    text: {
        color: "#FFF",
        fontSize: "2rem",
        fontWeight: "bold",
        textAlign: "right"
    }
});

export default App;