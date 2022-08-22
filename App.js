import { useCallback, useMemo, useRef, useState } from "react"
import { StyleSheet, Text, View } from 'react-native';

import Content from './components/buttons-container';

const App = () => {
    const [ text, setText ] = useState("");
    const [ showResult, setShowResult ] = useState(false);
    const result = useRef(0);
    const seletedFunction = useRef(null);

    const numberClickHandler = useCallback(number => () => {
        setShowResult(isShown => {
            setText(currentText => `${currentText}${number}`);

            if(isShown) {
                result.current = 0;
            }

            return false;
        })
    }, []);

    const deleteHandler = useCallback(() => setText(""), []);
    const resetHandler = useCallback(() => {
        result.current = 0;
        setText("");
        setShowResult(false);
    }, []);

    const sum = useCallback((a, b) => a + b, []);
    const multiply = useCallback((a, b) => a * b, []);
    const subtract = useCallback((a, b) => a - b, []);
    const divide = useCallback((a, b) => a / b, []);

    const selectFunctionHandler = useCallback(func => () => {
        seletedFunction.current = func;
        setText(currentNumber => {
            result.current = result.current ? result.current : currentNumber;
            setShowResult(false);
            return "";
        });
    }, []);

    const equalClickHandler = useCallback(() => {
        setText(currentNumber => {
            const number = parseFloat(currentNumber);
            const currentResult = parseFloat(result.current)
            result.current = seletedFunction.current?.(currentResult, number);
            setShowResult(true);
            return "";
        });
    }, [ ])
    
    const content = useMemo(() => (
        <Content 
            deleteHandler={deleteHandler}
            divideHandler={selectFunctionHandler(divide)}
            equalClickHandler={equalClickHandler}
            multiplyHandler={selectFunctionHandler(multiply)}
            numberClickHandler={numberClickHandler} 
            resetHandler={resetHandler}
            sumHandler={selectFunctionHandler(sum)}
            subtractHandler={selectFunctionHandler(subtract)}
        />
    ), [ divide, deleteHandler, equalClickHandler, multiply, numberClickHandler, resetHandler, sum, subtract, selectFunctionHandler ]);

    return (
        <View style={styles.container}>
            <View style={[ styles.header, !Boolean(text) && styles.emptyHeader ]}>
                <Text style={styles.text}>{ text }</Text>
                { showResult && <Text style={styles.text}>{ result.current }</Text>}
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
    emptyHeader: {
        paddingVertical: 27
    },
    text: {
        color: "#FFF",
        fontSize: "2rem",
        fontWeight: "bold",
        textAlign: "right"
    }
});

export default App;