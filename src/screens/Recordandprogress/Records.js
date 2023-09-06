import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    ScrollView,
    Image,
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
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import LinearGradient from 'react-native-linear-gradient';

const Records = ({navigation}) => {
  return (
    <View>
     <View style={{marginTop:10,width:'95%',marginHorizontal:10,}}>
       <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back-outline"
              size={24}
              color={Colors.purple}
              style={{}}
            />
          </TouchableOpacity>
          <View style={{marginHorizontal: '33%'}}>
            <Text
              style={{color: Colors.purple, fontWeight: 'bold', fontSize: 20}}>
              Pain Scale
            </Text>
          </View>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',padding:5,borderRadius:5,
        justifyContent:'space-between',backgroundColor:Colors.purple}}>
            <Text style={{color:'white',fontWeight:'bold'}}> Date</Text>
            <Text style={{color:'white',fontWeight:'bold'}}>   Category</Text>
            <Text style={{color:'white',fontWeight:'bold'}}>  Time</Text>
            <Text style={{color:'white',fontWeight:'bold'}}>  Scale</Text>
            <Text style={{color:'white',fontWeight:'bold'}}>Pain</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20,}}>
            <Text style={{fontSize:11}}>12 jan 2023</Text>
            <Text>Head</Text>
            <Text>10:00 am</Text>
            <Text>8</Text>
            <View>
                <Image style={{width:25,height:25}} source={require('../../../assets/no-hurt.png')} />
            </View>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20,}}>
            <Text style={{fontSize:11}}>12 jan 2023</Text>
            <Text>Head</Text>
            <Text>10:00 am</Text>
            <Text>8</Text>
            <View>
                <Image style={{width:25,height:25}} source={require('../../../assets/no-hurt.png')} />
            </View>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20,}}>
            <Text style={{fontSize:11}}>12 jan 2023</Text>
            <Text>Head</Text>
            <Text>10:00 am</Text>
            <Text>8</Text>
            <View>
                <Image style={{width:25,height:25}} source={require('../../../assets/no-hurt.png')} />
            </View>
        </View>
        </View>
    </View>
  )
}

export default Records

const styles = StyleSheet.create({})