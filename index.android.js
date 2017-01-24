/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    Image,
    PixelRatio,
    TouchableOpacity
} from 'react-native';

export default class SHP extends Component {
    registerPress(){

    }
  render() {
    return (
      <View style={styles.flex}>
          <View style={styles.logo}>
            <Image  source={require('./image/logo.png')} />
            <Text style={styles.logoText}>长安民生预约调度系统</Text>
          </View>
         <TouchableOpacity style={{alignItems:'center'}}><Text style={styles.registerBtn}>注册</Text></TouchableOpacity>
         <TouchableOpacity style={{alignItems:'center'}}><Text style={styles.loginBtn}>登录</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo:{
      flex: 1,
      alignItems:'center',
      marginTop:25*PixelRatio.get(),
  },
  logoText:{
      fontSize:25,
      color:'steelblue',
      marginTop:10
  },
  flex: {
    flex: 1,
  },
    registerBtn:{
        width:260,
        height:40,
        backgroundColor:'darkorange',
        textAlign:'center',
        textAlignVertical:'center',
        borderRadius:8,
        fontSize:20,
        marginBottom:10
    },
    loginBtn:{
        width:260,
        height:40,
        backgroundColor:'blue',
        textAlign:'center',
        textAlignVertical:'center',
        borderRadius:8,
        fontSize:20,
        marginBottom:50,
    }
});

AppRegistry.registerComponent('SHP', () => SHP);
