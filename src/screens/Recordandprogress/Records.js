import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import React, { useState, useEffect } from 'react';
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
import { useDispatch } from 'react-redux';
import { get_Records_Body } from '../../redux/actions/user.action';
import moment from 'moment';

const Records = ({ navigation }) => {

  const [records,setrecords]=useState()
  // Get the current date
var currentDate = new Date();

// Subtract 7 days
currentDate.setDate(currentDate.getDate() - 7);

// Format the result as a string (e.g., "YYYY-MM-DD")
var formattedDate = currentDate.toISOString().slice(0, 10);
const mydate=moment(new Date).format('YYY-MM-DD')
const dispatch=useDispatch()
const listing=async()=>{
  const body={
    date1:formattedDate,
    date2:mydate
  }
 const data=await dispatch(get_Records_Body(body))
 console.log("data::::",data?.data?.data)
 setrecords(data?.data?.data)
}

useEffect(()=>{
  listing()
},[])
  const data = [
    {
      date: "12 jan 2023",
      cat: "Head",
      time: "10:00 am",
      scale: "8",
      pain: require('../../../assets/no-hurt.png')
    },
    {
      date: "12 jan 2023",
      cat: "Head",
      time: "10:00 am",
      scale: "8",
      pain: require('../../../assets/no-hurt.png')
    }, {
      date: "12 jan 2023",
      cat: "Head",
      time: "10:00 am",
      scale: "8",
      pain: require('../../../assets/no-hurt.png')
    }, {
      date: "12 jan 2023",
      cat: "Head",
      time: "10:00 am",
      scale: "8",
      pain: require('../../../assets/no-hurt.png')
    },
  ]
  return (
    <View>
      <View style={{ marginTop: 10, width: '95%', marginHorizontal: 10, }}>
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
          <View style={{ marginHorizontal: '33%' }}>
            <Text
              style={{ color: Colors.purple, fontWeight: 'bold', fontSize: 20 }}>
              Pain Scale
            </Text>
          </View>
        </View>
        <View style={{
          flexDirection: 'row', alignItems: 'center', padding: 5, borderRadius: 5,
          justifyContent: 'space-between', backgroundColor: Colors.purple
        }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}> Date</Text>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>   Category</Text>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>  Time</Text>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>  Scale</Text>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Pain</Text>
        </View>
        {records?.map((i) => {
          return (
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20, }}>
              <Text style={{ fontSize: 11 }}>{moment(i?.createdAt).format('DD-MM-YYYY')}</Text>
              <Text>{i?.category}</Text>
              <Text>{moment(i?.createdAt).format('HH:MM A')}</Text>
              <Text>{i?.scale}</Text>
              <View>
                <Image style={{ width: 25, height: 25 }} source={require('../../../assets/no-hurt.png')} />
              </View>
            </View>
          )
        })}
        {/* <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20,}}>
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
        </View> */}
      </View>
    </View>
  )
}

export default Records

const styles = StyleSheet.create({})