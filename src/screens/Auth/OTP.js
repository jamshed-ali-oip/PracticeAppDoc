import React, { useState, useEffect } from 'react';
import {SafeAreaView,View, Text, StyleSheet,TouchableOpacity,Button} from 'react-native';
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

const CELL_COUNT = 6

const OTP = ({navigation}) => {
    const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const [timer, setTimer] = useState(10);
  const [isActive, setIsActive] = useState(false);

  const [email,setEmail] = useState('')

  const startTimer = () => {
    setIsActive(true);
  };

  const getuser = async () => {
    let emailll = await AsyncStorage.getItem('emailforgot')
    console.log(emailll)
    setEmail(emailll)
    

  }

  useEffect(() => {
    getuser()
   
    let intervalId;


    if (isActive) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 0) {
            setIsActive(false);
            return 10; // Reset the timer to 10 seconds
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive]);

  console.log('emailll=======',email)




  const onotp = async() => {



    

    await fetch('http://3.87.229.85:8080/appuser/verifyotp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email:email,
        
        otp:value
      })
    })
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson)
        if(responseJson?.success === 1) {
          console.log(responseJson?.success,'responseJson?.sucess')
          AsyncStorage.setItem('otp',value)
          navigation.navigate("CreateNewPassword")
        }
        else {
            // alert(responseJson.error)
            console.log(responseJson?.error)
        }
        
    })
    .catch(error => {
        // alert('failed')
        
        return error;
        
    })
  }


  const regenerate = async() => {

    setIsActive(true);


    

    await fetch('http://3.87.229.85:8080/appuser/regenerate-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email:email
      })
    })
    .then(response => response.json())
    .then(responseJson => {
     
        if(responseJson?.success === 1) {
          console.log(responseJson?.success,'=====================')
          console.log(responseJson,'aaaaaa')
          
        }
        else {
            alert('Error')
        }
        
    })
    .catch(error => {
        // alert('failed')
        
        return error;
        
    })
  }

// console.log(value,'valueeeee')


  return (
    <View style={{backgroundColor:Colors.white,flex:1,}}>
       <TouchableOpacity onPress={() => navigation.goBack()}>
      <Ionicons name='chevron-back-outline' size={25} color={Colors.purple} style={{marginTop:40,width:'95%',marginHorizontal:5,}} />
      </TouchableOpacity>
      <View style={{width:'95%',marginHorizontal:10,marginTop: 40}}>
       <View style={{justifyContent: 'center'}}>
            <Text
              style={{ fontSize: 28, color: Colors.black,fontWeight:'bold',fontFamily:FontFamily.AllisonRegular,letterSpacing:1,}}>
              Let's Verify You
            </Text>
            <Text style={{fontSize: 16, marginTop: 10,fontFamily:'Poppins-Regular'}}>
              We've sent a 6 digit Verification code to 
            </Text>
            <Text style={{fontSize: 16, color: Colors.black,fontFamily:'Poppins-Regular'}}>
              {email}
            </Text>
          </View>
     <SafeAreaView style={styles.root}>
      {/* <Text style={styles.title}>Verification</Text> */}
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </SafeAreaView>

    <View style={{alignItems:'center',marginTop:30,}}>
      <TouchableOpacity onPress={regenerate} disabled={isActive}>
        <Text style={{color:'black'}}>Din't get the code ?<Text style={{color:Colors.black,fontWeight:'bold'}}> Reset in ...{timer}</Text> </Text> 
      </TouchableOpacity>
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
        onPress={onotp}
      >
        <View >
          <Text style={styles.button1}>Confirm</Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  
    </View>
  )
}

export default OTP

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