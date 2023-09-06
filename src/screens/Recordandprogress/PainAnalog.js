import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    ScrollView,
    Pressable,
    Image,
    Dimensions,
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import Feather from 'react-native-vector-icons/Feather';
  import Colors from '../../constants/Colors';
  import {
    Color,
    FontFamily,
    Border,
    FontSize,
    Padding,
  } from '../../../GlobalStyles';
  import DatePicker from 'react-native-date-picker';
  import moment from 'moment';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import LinearGradient from 'react-native-linear-gradient';

const PainAnalog = ({navigation}) => {
  return (
    <View>
        <View style={{width:'95%',marginHorizontal:10}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent:'space-between',
            marginTop:10,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back-outline"
              size={24}
              color={Colors.purple}
              style={{}}
            />
          </TouchableOpacity>
          <View style={{}}>
            <Text
              style={{color: Colors.purple, fontWeight: 'bold', fontSize: 18}}>
              Pain Analog
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Records')}>
          <View style={{backgroundColor:Colors.purple,padding:10,borderRadius:10,}}>
            <Text style={{color:Colors.white,fontWeight:'bold',}}> Records</Text>
          </View>
          </TouchableOpacity>
        </View>
        <View style={{alignItems:'center',marginTop:20,}}>
            <Image style={{width:400,height:400,resizeMode:'contain'}} source={require('../../../assets/group-1000005758.png')} />
        </View>
        </View>
        <View style={{width: '90%', alignSelf: 'center', }}>
                <LinearGradient
                  style={[styles.buttons, styles.buttonsPosition]}
                  locations={[0, 1]}
                  colors={['#bf6bbb', '#716eaa']}
                  useAngle={true}
                  angle={180}>
                  <TouchableOpacity
                  onPress={() => navigation.navigate('PainScale')}
                    style={[styles.pressable, styles.parentFlexBox]}>
                    <View>
                      <Text style={styles.button1}>Continue</Text>
                    </View>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
    </View>
  )
}

export default PainAnalog

const styles = StyleSheet.create({
    buttonsPosition: {
        borderRadius: 40,
        // width: 343,
        width: '100%',
        alignSelf: 'center',
        position:'absolute',
      },
      buttons: {
        // top: '165%',
        height: 45,
        marginTop:'30%'
      },
      pressable: {
        borderRadius: Border.br_47xl,
        height: '100%',
        backgroundColor: 'transparent',
        width: '100%',
      },
      parentFlexBox: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      button1: {
        fontSize: FontSize.size_base,
        fontFamily: FontFamily.poppinsSemibold,
        color: Color.labelColorDarkPrimary,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 20,
      },
})