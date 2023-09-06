import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Keyboard,Modal } from 'react-native';
import React, { useState,useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color, Padding } from "../../../GlobalStyles";
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../../constants/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CreateNewPassword = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);


  const [email,setEmail] = useState('')
  const [otp,setOtp] = useState('')
  const [error, setError] = useState(null)

  const [token,setToken] = React.useState('')



  // const getuser = async () => {
  //   let emailll = await AsyncStorage.getItem('emailforgot')
  //   console.log(emailll,'email')
  //   let otpp = await AsyncStorage.getItem('otp')
  //   console.log(otpp,'otp')
  //   setEmail(emailll)
  //   setOtp(otpp)

    

  // }


  




// const onreset = async() => {

//       if (password1 != password2 ) {
//         alert('Password should be same')
//       }

//       else {

//       await fetch('http://3.87.229.85:8080/appuser/reset', {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//         body: JSON.stringify({
//           email:email,
//           otp:otp,
//           password:password1
          
//         })
//       })
//       .then(response => response.json())
//       .then(responseJson => {
//         // console.log('heloooo')
//         console.log(responseJson)
//           if(responseJson?.success === 1) {
//             console.log(responseJson?.success,'responseJson?.sucess')
        
//           navigation.navigate('Login')
//           }
//           else {
//               // alert(responseJson.error)
//               console.log(responseJson?.error)
//           }
          
//       })
//       .catch(error => {
//           // alert('failed')
          
//           return error;
          
//       })
//     }
//     }



















  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
    setPasswordError(false);
  };

  const handleCreatePassword = () => {
    Keyboard.dismiss();

    if (password1 === password2 && password1 !== '' && password2 !== '') {
      // Passwords match and both fields are filled, navigate to the desired screen
      navigation.navigate("Login");
      setModalVisible(true);
    } else {
      // Passwords don't match or some fields are empty, show error
      setPasswordError(true);
    }
  };





  const gettoken = async () => {
    let token1 = await AsyncStorage.getItem('token')
    console.log(token1,'token')
    console.log('hello')
    setToken(token1)
    

    

  }


  useEffect(() => {
    gettoken()
  
  }, []);

  const changepass = async () => {

    
    await fetch('https://ntamtech.com/appuser/app-user', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: `Bearer ${token}`,

      },
      body: JSON.stringify({
        old_password: password,
    password: password1
      })
    })
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson)
        if(responseJson?.success === 1) {
          console.log(responseJson?.success,'responseJson?.sucess')
          // AsyncStorage.setItem('email',email)
          navigation.replace('Tab2')

        }
        else {
          setError(responseJson?.error)
        }
        
    })
    .catch(error => {
        
        console.log(error,'hello')
        
        // return error;
        
    })
  }



  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="height" keyboardVerticalOffset={10}>
      <View style={{ flex: 1 }}>
        <View style={{ width: '95%', marginHorizontal: 10 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name='chevron-back-outline' size={25} color={Colors.purple} style={{ marginTop: 40, width: '95%', marginHorizontal: 5 }} />
          </TouchableOpacity>
          <View style={{ width: '95%', marginHorizontal: 10, marginTop: 40 }}>
            <View style={{ justifyContent: 'center' }}>
              <Text style={{ fontSize: 24, color: Colors.black, fontWeight: 'bold', fontFamily: FontFamily.AllisonRegular, letterSpacing: 1 }}>
                Create New Password
              </Text>
              <Text style={{ fontSize: 14, marginTop: 10, fontFamily: 'Poppins-Regular',color:'black',marginBottom:30, }}>
                Make a new password that's different from your old password
              </Text>
            </View>
          </View>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              secureTextEntry={!showPassword}
              placeholder="Enter password"
              placeholderTextColor='black'
              value={password}
              onChangeText={value => setPassword(value)}
            />
            <TouchableOpacity style={styles.toggleButton} onPress={togglePasswordVisibility}>
              <Feather name={showPassword ? 'eye-off' : 'eye'} size={24} color={Colors.purple} />
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              secureTextEntry={!showPassword1}
              placeholder="Enter new password"
              placeholderTextColor='black'
              value={password1}
              onChangeText={value => setPassword1(value)}
            />
            <TouchableOpacity style={styles.toggleButton} onPress={togglePasswordVisibility1}>
              <Feather name={showPassword1 ? 'eye-off' : 'eye'} size={24} color={Colors.purple} />
            </TouchableOpacity>
          </View>
          {/* <View style={styles.container}>
            <TextInput
              style={styles.input}
              secureTextEntry={!showPassword2}
              placeholder="Re-enter new password"
              placeholderTextColor='black'
              value={password2}
              onChangeText={setPassword2}
            />
            <TouchableOpacity style={styles.toggleButton} onPress={togglePasswordVisibility2}>
              <Feather name={showPassword2 ? 'eye-off' : 'eye'} size={24} color={Colors.purple} />
            </TouchableOpacity>
          </View>
          {passwordError && (
            <Text style={{ color: 'red', marginTop: 10 }}>Passwords do not match</Text>
          )}
          <View style={{marginTop:20,}}>
            <Text style={{color:'black',fontWeight:'bold',textAlign:'center'}}>
            Forgot Password
            </Text>
          </View> */}
          <View style={{marginTop:20,}}>
            <Text style={{color:'red',fontWeight:'bold',textAlign:'center'}}>
            {error}
            </Text>
          </View>
        </View>
      </View>
      <LinearGradient
        style={[styles.buttons, styles.buttonsPosition]}
        locations={[0, 1]}
        colors={["#bf6bbb", "#716eaa"]}
        useAngle={true}
        angle={180}
      >
        <TouchableOpacity onPress={changepass}
          style={[styles.pressable, styles.parentFlexBox]}  >
          <View>
            <Text style={styles.button1}>Create New Password</Text>
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
        <Text style={{color:'white',fontWeight:'bold',fontSize:12,textAlign:'center'}}>You have successfully created an account</Text>
       
      </View>
        </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginBottom: 10,
    width: '90%',
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 10,
  },
  input: {
    width: '90%',
    height: 40,
    fontSize: 16,
    color:'black'
  },
  toggleButton: {
    padding: 5,
  },
  buttonsPosition: {
    borderRadius: 40,
    width: 343,
    alignSelf: 'center',
    position: "absolute",
    bottom: 10,
  },
  buttons: {
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
  }
});

export default CreateNewPassword;
