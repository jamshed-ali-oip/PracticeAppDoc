import {Image, StyleSheet, Text, View} from 'react-native';
import React,{useEffect,useState} from 'react';
import { Color } from '../../../GlobalStyles';
import { useDispatch, useSelector } from 'react-redux';
import { QUESTIONAR } from '../../redux/const/const';

const Done = ({navigation,route}) => {
    const mydata=route?.params?.data
    console.log("dasdasdasdadasdada",mydata?.data)
    const [KK,setKK]=useState({})
    const myQ=useSelector((state)=>state?.auth?.questionar)
    console.log("mynsadlkhashdlkjaslj_________________Q",myQ)
    const arr=[...myQ,mydata]
    const dispatch=useDispatch()
   
    
    useEffect(()=>{
        setKK(myQ,mydata?.data)
        dispatch({
            type: QUESTIONAR,
            payload:arr
          });
          setTimeout(() => {
            navigation?.navigate("Tab2")
          }, 500);
    },[])
  return (
    <View
    style={{
        backgroundColor:"white",
        flex:1,
        justifyContent:"center"
    }}
    >
        
      <Image
        style={{
          height: 100,
          width: 200,
          resizeMode: 'contain',
          alignSelf:"center"
        }}
        source={require('../../../assets/done.gif')}
      />
      <Text
        style={{
            fontSize: 20,
            // fontWeight: "bold",
            textAlign: "center",
            margin: 10,
            fontStyle:"italic",
            width:"90%",
            color:Color.darkslategray_200
        }}
        >
            You have Successfully completed Servey!
        </Text>
    </View>
  );
};

export default Done;

const styles = StyleSheet.create({});
