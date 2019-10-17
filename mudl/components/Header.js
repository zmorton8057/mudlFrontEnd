import React from 'react';
import {
    TouchableHighlight,
    StyleSheet, View, Text
} from 'react-native';


const HeaderHome = props => {
    return (
        <View>
            
            <Text style={styles.headerText}>müdl</Text>
            
        </View>

    )
}



const styles = StyleSheet.create({
    
    headerText: {
        color: '#1ebbd7',
        fontSize: 50,
        marginLeft: 30,
        marginTop: 30,
        marginBottom: 10,
           
    }
});





export default HeaderHome;