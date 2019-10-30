import React from 'react';
import {
    TouchableHighlight,
    StyleSheet, View, Text, Dimensions
} from 'react-native';

class FeelingButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            definition: false,
            buttonText: null,
        }
    }
    componentDidMount() {
        this.setState({ buttonText: this.props.emotion })
    }
    handleLongPress(def, emotion) {
        if (this.state.definition === true && def) {
            this.state.definition = false;
            this.setState({ buttonText: emotion })
            console.log(emotion)
        } else if (this.state.definition === false && def) {
            this.state.definition = true;
            this.setState({ buttonText: emotion+ ": " + def })
            console.log(def)
        }
    }

    render() {
        return (
            <View style={styles.button}>
                <TouchableHighlight style={styles.highlight}
                    onLongPress={() => { this.handleLongPress(this.props.def, this.props.emotion) }}
                    onPress={() => {
                        this.props.onPress();
                        this.setState({ definition: false, buttonText: this.props.emotion })
                    }
                    }>
                    <Text style={styles.text}>{this.state.buttonText}</Text>
                </TouchableHighlight>
            </View>

        )
    }
}

export default FeelingButton;





const styles = StyleSheet.create({
    button: {
        backgroundColor: 'rgba(30, 187, 208, 0.4)',
        marginTop: 4,
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'left',
        padding: 12,
        fontFamily: 'roboto-regular'
    },
    highlight: {
        width: Dimensions.get("window").width
    }
});


