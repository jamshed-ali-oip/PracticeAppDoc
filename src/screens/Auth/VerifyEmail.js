import React, { useState, useEffect } from 'react';
import {SafeAreaView,View, Text, StyleSheet,TouchableOpacity,Button,Modal} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../../constants/Colors';
import LinearGradient from 'react-native-linear-gradient';
import { FontFamily, Border, FontSize, Color, Padding } from "../../../GlobalStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';



const VerifyEmail = ({navigation}) => {
 
  const [modalVisible, setModalVisible] = useState(false);
  const [email,setEmail] = useState('')
  // const [otp,setOtp] = useState('')
  const [token,setToken] = useState('')


  const getuser = async () => {
    let emails = await AsyncStorage.getItem('email')
    let tokenn = await AsyncStorage.getItem('token')
    console.log(tokenn,'hahahahahhahaha')
    setToken(tokenn)
    console.log('emailsssss',emails)
    setEmail(emails)
    
    

    

  }

  useEffect(() => {
    getuser()
  
  }, []);

  const verify = async() => {



    

    await fetch('http://3.87.229.85:8080/appuser/activate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        activation_token:token
        
      })
    })
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson)
        if(responseJson?.success === 1) {
          setModalVisible(true)
          console.log(responseJson?.success,'responseJson?.sucess')

          setTimeout(() => {
            setModalVisible(false)
            navigation.navigate('Tab2')
          }, 1000);
          // setModalVisible(false)
          // navigation.navigate("Tab2")
          
        }
        else {
            // alert('Error')
            console.log(responseJson?.error)
        }
        
    })
    .catch(error => {
        // alert('failed')
        
        return error;
        
    })
  }





  return (
    <View style={{backgroundColor:Colors.white,flex:1,}}>
       <TouchableOpacity onPress={() => navigation.goBack()}>
      <Ionicons name='chevron-back-outline' size={25} color={Colors.purple} style={{marginTop:40,width:'95%',marginHorizontal:5,}} />
      </TouchableOpacity>
      <View style={{width:'95%',marginHorizontal:10,marginTop: 40}}>
       <View style={{justifyContent: 'center'}}>
            <Text
              style={{ fontSize: 28, color: Colors.black,fontWeight:'bold',fontFamily:FontFamily.AllisonRegular,letterSpacing:1,}}>
              Verify Your Email Address
            </Text>
            <Text style={{fontSize: 16, marginTop: 10,fontFamily:'Poppins-Regular'}}>
              To continue using Circle Care, please verify your email address
            </Text>
            <Text style={{fontSize: 16, color: Colors.black,fontFamily:'Poppins-Regular'}}>
              Email: {email}
            </Text>
          </View>
    </View>
    
    <LinearGradient
      style={[styles.buttons, styles.buttonsPosition]}
      locations={[0, 1]}
      colors={["#bf6bbb", "#716eaa"]}
      useAngle={true}
      angle={180}
    >
      <TouchableOpacity
        style={[styles.pressable, styles.parentFlexBox]}
        onPress= {verify}
      >
        <View >
          <Text style={styles.button1}>Verify Email</Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
    <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{backgroundColor:'#8BB561',height:80,width:'90%',justifyContent:'center',alignSelf:'center',position:'absolute',bottom:40,borderRadius:10}}>
         
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <Ionicons
        style={{marginLeft:20}}
        name='checkmark-circle'
        size={65}
        color={'white'} />


<View style={{}}>
        <Text style={{color:'white',fontWeight:'bold',fontSize:12,textAlign:'center'}}>Verification Completed</Text>
       
      </View>
        </View>
        </View>
      </Modal>
    </View>
  )
}

export default VerifyEmail

const styles = StyleSheet.create({
    // root: {flex: 1, padding: 20,backgroundColor:'red'},
    // title: {textAlign: 'center', fontSize: 30},
    codeFieldRoot: {marginTop: 60,width:'90%',marginHorizontal:20,},
    cell: {
      width: 50,
      height: 70,
      lineHeight: 70,
      fontSize: 24,
      borderWidth: 1,
      textAlign: 'center',
      color:Colors.purple,
      borderColor:Colors.gray,
      borderRadius:10,
      // marginHorizontal:10,
      
    },
    focusCell: {
      borderBottomColor:Colors.purple,
    },
    buttonsPosition: {
      borderRadius:40,
      width: 343,
      alignSelf:'center',
      position: "absolute",
      bottom:20,
    },
    buttons: {
      // top: '165%',
      height: 49,
    },
    pressable: {
      borderRadius: Border.br_47xl,
      height: "100%",
      backgroundColor: "transparent",
      width: "100%",
    },
    parentFlexBox: {
      alignItems: "center",
      justifyContent: "center",
    },
    button1: {
      fontSize: FontSize.size_base,
      fontFamily: FontFamily.poppinsSemibold,
      color: Color.labelColorDarkPrimary,
      fontWeight: "bold",
      textAlign: "center",
      lineHeight: 20,
    },
  });