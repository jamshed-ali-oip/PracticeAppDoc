import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native'
import React, {useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../../constants/Colors'
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color, Padding } from "../../../GlobalStyles";
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ForgotPassword = ({navigation}) => {
  // const navigation = useNavigation();
  const [emailError, setEmailError] = useState('');
  const [email, setEmail] = useState('');

  const validateEmail = () => {
    // Simple email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError('');
    } else {
      setEmailError('');
    }
  };


  const onforgot = async() => {

    validateEmail()

    await fetch('http://3.87.229.85:8080/appuser/forgot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email:email,
      })
    })
    .then(response => response.json())
    .then(responseJson => {
      // console.log(responseJson)
        if(responseJson?.success === 1) {
          console.log('hammmmmaddd')
          
          console.log(responseJson?.success,'responseJson?.sucess')
          AsyncStorage.setItem('emailforgot',email)
          navigation.navigate('OTP')
          
          console.log('hahahaha')
          // navigation.navigate('Demographics')
        }
        else {
            alert(responseJson.error)
            console.log(responseJson?.error)
        }
        
    })
    .catch(error => {
        // alert('failed')
        
        return error;
        
    })
  }


  return (
    <View style={{flex:1,backgroundColor:Colors.white}}>
      <View style={{width:'95%',marginHorizontal:10,}}>
        <View style={{marginTop:25,}}>
          <TouchableOpacity onPress={() => navigation.goBack() }>
        <Ionicons
        name='arrow-back'
        size={25}
        color={Colors.purple}
         />
         </TouchableOpacity>
         </View>
         <View style={{marginHorizontal:10,}}>
          <Text style={{fontSize:26,fontWeight:'bold',marginTop:20,color:Colors.black}}>Forgot Password</Text>
          <Text style={{fontSize:16,fontWeight:'bold',fontFamily:FontFamily.AllisonRegular}}>Kindly enter your email so we can send you a verfication</Text>
         </View>
         <View style={{marginTop:40,marginHorizontal:10,}}>
         <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor='#000'
        value={email}
        onChangeText={(value) => setEmail(value)}
        // onBlur={validateEmail}
        keyboardType="email-address"
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
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
        onPress={onforgot}
      >
        <View >
          <Text style={styles.button1}>Start The Journey</Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
      </View>
    
    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
  input: {
    width: 320,
    height: 50,
    borderColor:Colors.light,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius:7,
    color:'black'
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  buttonsPosition: {
    borderRadius:40,
    width: 343,
    alignSelf:'center',
    position: "absolute",
    bottom:10,
  },
  buttons: {
    top: '165%',
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
})