/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Picker} from 'react-native';

import AppTest from './components/AppNavigator';
import Dashboard from './components/dashboard';
import Login from './components/login';



import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json


export default class App extends Component {

    render() {
          return (
          <AppTest/>

          );
        }
  }










