import React, { Component } from "react";
import { View, Image, ImageBackground, TextInput, Text, StyleSheet } from "react-native";
import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  render() {
    return (
      <ImageBackground source={ require("../../../assets/img/coronation-shade.png") } style={{ flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF", width: wp('100%'), height: hp('50%') }} imageStyle={{ width: wp('90%'), height: wp('67%'), top: hp('53.89%'), left: wp('2%'), opacity: 0.9 }}>
       {/* <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFFFFF"
        }}
      > */}
        
        <View style={{ flexDirection: 'row', width: 590, justifyContent: 'space-between' }}>
          <Image source={ require('../../../assets/img/chat.png') } style={{ alignSelf: 'flex-start', top: -210, marginLeft: '2.7%', width: 39.5, height: 40 }} />
          <Image source={ require('../../../assets/img/coronation-logo.png') } style={{ alignSelf: 'flex-end', marginRight: '5.0%', top: -220, width: 63, height: 57 }} />
        </View>
        <Text
          style={{
            alignSelf: "flex-start",
            marginLeft: "7.7%",
            fontSize: 24,
            fontFamily: "fedraSansBook",
            color: "#003057"
          }}
        >
          Login
        </Text>
        <TextInput
          style={[styles.inputStyle, { marginTop: 55 }]}
          placeholder="Email / Customer ID"
          value={this.state.email}
        />
        <TextInput
          style={[styles.inputStyle, { marginTop: 26 }]}
          placeholder="Password"
          value={this.state.password}
        />
        <View style={{ marginTop: 50 }}>
        <Button 
          title="Login"
          //titleStyle={{ alignSelf: "center" }}
          buttonStyle= {{ backgroundColor: '#407EC9', alignItems: "center", height: hp('6.6%'), width: 555, borderRadius: 8 }}
          onPress={ () => { Actions.signup() } }
        />
        </View>

      {/* <View style={{ flex: 0.8, justifyContent: "flex-end"}}> */}
        <View style={{ flexDirection: 'row', width: 555, top: '36%', justifyContent: 'space-between' }}>
          <Text style={styles.bottomText}>forgot password</Text>
          <Text style={styles.bottomText}>Create account</Text>
        </View>
       {/* </View> */}

       {/* </View> */}
       {/* </View> */}
      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    width: wp("85.2%"),
    height: hp('6.6%'),
    borderStyle: "solid",
    paddingLeft: wp('4.2%'),
    borderBottomWidth: 0.8,
    backgroundColor: "#F2F5F7",
    borderRadius: 5
  }, 
  bottomText: {
    color: "#9A6A4F"
  }
});
