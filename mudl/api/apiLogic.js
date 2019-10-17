import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import api from '../api/api.js'


class apiLogic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moods: []
        };
      }
    
      componentDidMount() {
          
      }
    
      render() {
        return (
          <View>
            {this.state.moods.map()}
          </View>
        );
      }
    


}

export default apiLogic