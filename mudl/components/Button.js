import React from 'react';
import {
    TouchableHighlight,
    StyleSheet, View, Text
} from 'react-native';

const FeelingButton = props => {
    return (
        <View>
            <TouchableHighlight
                style={styles.button}
                onPress={props.onPress}>
                <Text style={styles.text}>{props.emotion}</Text>
            </TouchableHighlight>
        </View>

    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1ebbd7',
        padding: 10,
        borderRadius: 10,
        margin: 10,
        width: 300
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }
});


export default FeelingButton;