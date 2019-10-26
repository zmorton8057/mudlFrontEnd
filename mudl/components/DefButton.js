import React from 'react';
import {
    TouchableHighlight,
    StyleSheet, View, Text
} from 'react-native';

this.state = {
    definition: false,
    buttonText: 'See Definition'
}

const handlePress = (info) => {
    if (this.state.definition === true) {
        this.state.definition = false;
        this.state.buttonText = 'Definition'

    } else if (this.state.definition === false) {
        this.state.definition = true;
        this.state.buttonText=info
    }
}

const FeelingButton = props => {
    return (
        <View style={styles.button}>
            <TouchableHighlight
                onPress={() => { handlePress(props.definition) }}>
                <Text style={styles.text}>{this.state.buttonText}</Text>
            </TouchableHighlight>
        </View>

    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1ebbd0',
        padding: 12,
        opacity: 5,
        width: 200
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'left'
    }
});


export default FeelingButton;