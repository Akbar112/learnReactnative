import React, {Component} from 'react';
import {Text} from 'react-native';

class Judul extends Component{
    render(){
        return (
            <Text style={salon.judul}>{this.props.judul}</Text>
        )
    }
}
const salon = {
    judul: {
        color: '#f00',
        fontSize: 35,
        fontWeight:'bold',
        backgroundColor:'#000'
    }
}
export default Judul;