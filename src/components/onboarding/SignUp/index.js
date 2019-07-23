import React, { Component } from 'react'
import { View, Image, ImageBackground, TextInput, Text, StyleSheet } from "react-native";
import { Button, Card } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'
import { Actions } from 'react-native-router-flux'
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default class SignUp extends Component {
  render() {
    return (
      <ImageBackground source={ require("../../../../assets/img/coronation-shade.png") } style={{ flex: 1,
        flexDirection: 'column',
        //justifyContent: "center",
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
        
        <View style={{ flexDirection: 'row', width: 590, marginTop: hp('4.1%'), justifyContent: 'space-between' }}>
          <Button onPress={ () => { Actions.pop() }} 
            type='clear'
            icon={
              <Icon name='ios-arrow-round-back' color='#003057' size={44}
               />
            }
            buttonStyle={{ marginLeft: wp('1.2%') }}
            title=''
          />
          <Image source={ require('../../../../assets/img/coronation-logo.png') } style={{ alignSelf: 'flex-end', marginRight: '5.0%', width: 63, height: 57 }} />
        </View>
        <Text
          style={{
            alignSelf: "flex-start",
            marginLeft: "7.7%",
            marginTop: hp('18.1%'),
            fontSize: 24,
            fontFamily: "Fedra Sans Book",
            color: "#003057"
          }}
        >
          Sign Up
        </Text>
        <Text style={{ marginTop: hp('1.8%'), fontSize: 14, color: '#75787B', marginLeft: wp('7%'), alignSelf: "flex-start" }}>Please select the account type</Text>

        <View style={{ flexDirection: 'row', width: wp('85.2%'), marginTop: hp('5.9%'), justifyContent: 'space-between' }}>
          <Card containerStyle={[styles.newCard, {marginLeft: wp('0.5%')}]}>
            <View>
              <Image source={ require('../../../../assets/img/individual.png') } style={{ width: wp('11.7%'), height: wp('11.7%') }} />
              <Text style={{ textAlign: "center", marginTop: hp('2.7%') }}>Individual</Text>
            </View>
          </Card>

          <Card containerStyle={styles.newCard}>
            <Image source={ require('../../../../assets/img/joint.png') } style={{ width: wp('11.7%'), height: wp('11.7%') }} />
            <Text style={{ textAlign: "center", marginTop: hp('2.7%') }}>Joint</Text>
          </Card>

        </View>

        <Text style={{ marginTop: hp('3.5%'), alignSelf: 'auto', width: wp('77.8%'), fontSize: 14, color: '#75787B', marginLeft: wp('10.5%'), alignSelf: "flex-start" }}>Individual Account is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed varius odio. Curabitur ut ex id nulla ornare tempus nec sed nulla.</Text>

        <View style={{ marginTop: hp('13.6%') }}>
        <Button 
          title="Continue"
          titleStyle={{ fontFamily: "Fedra Sans Book" }}
          buttonStyle= {{ backgroundColor: '#407EC9', alignItems: "center", height: hp('6.6%'), width: wp('85.2%'), borderRadius: 8 }}
          // onPress
        />
        </View>

      </ImageBackground>
    )
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
  },
  newCard: {
    justifyContent: "space-evenly",
    alignItems: "center",
    width: wp('39.1%'),
    height: hp('17.1%'),
    borderRadius: 11,
    elevation: 4
  }
});