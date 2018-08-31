import React, {Component} from 'react';
import {Text} from 'react-native';

class Judul extends Component{
    render(){
        return (
            <Text style={salon.judul}>BIODATA</Text>
        )
    }
}
const salon = {
    judul: {
        color: '#f00',
        fontSize: 50,
        fontWeight:'bold',
        backgroundColor:'#000'
    }
}
export default Judul;