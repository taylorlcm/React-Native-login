import React, {Component} from 'react';
import {Platform, Text, View, TextInput, Button, ImageBackground, TouchableOpacity, Picker} from 'react-native';
import styles from './styles';
import bgImage from '../images/bg1.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json


const myIcon = (<Icon name="rocket" size={50} color="rgba(255, 255, 255, .9)"/>)





export default class Login extends Component {
state = {
     hand: 'right',
   }


  render() {
    const { input, titleContainer, title, bgContainer, inputContainer, btnText, btnLogin, select } = styles

    return (
        <ImageBackground source={bgImage} style={bgContainer}>
            <View style={titleContainer}>
                <Text style={title}>
                {myIcon} FPMS
                </Text>
            </View>

            <View style={inputContainer}>
                <TextInput
                style={input}
                placeholder={"Username"}
                placeholderTextColor= {'rgba(255, 255, 255, .9)'}
                />
            </View>

            <View style={inputContainer}>
                <TextInput
                style={input}
                placeholder={"Password"}
                secureTextEntry={true}
                placeholderTextColor= {'rgba(255, 255, 255, .9)'}
                />
            </View>

            <View style={inputContainer}>
                <Picker
                 style={select}
                 selectedValue={this.state.hand}
                 onValueChange={(hand) => this.setState({ hand })}
                 >
                 <Picker.Item label="Right Hand" value="right" />
                 <Picker.Item label="Left Hand" value="left" />
               </Picker>
            </View>

            <TouchableOpacity
                style={btnLogin}
                onPress={() =>
                  this.props.navigation.navigate('Dashboard')}
            >
                <Text style={btnText}>Login</Text>
            </TouchableOpacity>

        </ImageBackground>





    );
  }
}


