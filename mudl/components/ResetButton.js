import React from 'react';
import {
    TouchableHighlight,
    StyleSheet, View, Text, Dimensions
} from 'react-native';

class ResetButton extends React.Component {
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
                <TouchableHighlight style={styles.highlight}>
                    <Text style={styles.text}>Go to main emotion screen</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default ResetButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0e606b',
        borderBottomColor: 'white',
        borderBottomWidth: 3,
        opacity: 5
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'left',
        padding: 12
    },
    highlight: {
        width: Dimensions.get("window").width
    }
});


