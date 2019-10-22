import React from 'react';
import {
    TouchableHighlight,
    StyleSheet, View, Text
} from 'react-native';

const FeelingButton = props => {
    return (
        <View style={styles.button}>
            <TouchableHighlight
                
                onPress={props.onPress}>
                <Text style={styles.text}>{props.emotion}</Text>
            </TouchableHighlight>
        </View>

    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1ebbd0',
        padding: 12,
        borderBottomColor: 'white',
        borderBottomWidth: 3,
        opacity: 5
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'left'
    }
});


export default FeelingButton;