import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput,
    ImageBackground,
    SafeAreaView,
    Keyboard,
    Pressable
    
  } from 'react-native';
  import RadioButtonRN from 'radio-buttons-react-native';
  import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../../constants/Colors';
import LinearGradient from "react-native-linear-gradient";
import { Color, FontFamily, Border, FontSize, Padding } from "../../../GlobalStyles";

const Question1 = ({navigation}) => {
    const data = [
        {
          label: 'Excellent'
         },
         {
          label: 'Very Good'
         },
         {
            label: 'Good'
           },
           {
            label: 'Poor'
           }

        ];
        
    
      const handleBackButton = () => {
        navigation.goBack();
      };
  return (
    <View style={{ flex: 1,}}>
      <View style={{width:'100%',marginHorizontal:20,}}>
        <View style={{marginTop:20,}}>
      <TouchableOpacity onPress={handleBackButton}>
        <Ionicons
        name='arrow-back'
        size={25}
        color={Colors.purple} />
      </TouchableOpacity>
      </View>
      <View style={{marginTop:15,}}>
        <Text style={{color:Colors.purple,fontWeight:'bold',fontSize:20,}}>Question 1/11</Text>
        <Text style={{fontSize:18,fontWeight:'600',marginTop:20,color:'black'}}>In general, would you say your health is:</Text>
      </View>



      <View style={{marginTop:10}}>
      <RadioButtonRN
      activeColor={'white'}
    //   deactiveColor={''}
      box={true}
      boxStyle={{height:80,width:'90%'}}
  data={data}
  // selectedBtn={(e) => console.log(e)}
  boxActiveBgColor={'#BF6BBB'}
  textColor={'black'}
/>
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
          onPress={() => navigation.navigate("Question2")}
        >
          <View >
            <Text style={styles.button1}>Next</Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonsPosition: {
      borderRadius:40,
      width: 343,
    //   alignSelf:'center',
    marginTop:20
      // position:'absolute',
    },
    buttons: {
      // top: '165%',
      height: 47,
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
  

export default Question1