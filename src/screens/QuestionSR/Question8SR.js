import React,{useState} from 'react'
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
import DropDown from '../../components/DropDown';

const Question8SR = ({navigation}) => {
    
        
    
      const handleBackButton = () => {
        navigation.goBack();
      };


      const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'I have not had a change in my weight.', value: 'I have not had a change in my weight.'},
    {label: 'I feel as if I’ve had a slight weight loss.', value: 'I feel as if I’ve had a slight weight loss.'},
    {label: 'I have lost 2 pounds or more.', value: 'I have lost 2 pounds or more.'},
    {label: 'I have lost 5 pounds or more.', value: 'I have lost 5 pounds or more.'},
    // {label: 'Very good', value: 'Very good'},
  ]);


  






  return (
    //   <ScrollView>
    <View style={{ flex: 1,}}>
      <View style={{width:'98%'}}>
        <View style={{marginTop:20,marginLeft:20}}>
      <TouchableOpacity onPress={handleBackButton}>
        <Ionicons
        name='arrow-back'
        size={25}
        color={Colors.purple} />
      </TouchableOpacity>
      </View>
      <View style={{marginTop:15,marginLeft:20,width:'90%'}}>
      <Text style={{color:Colors.purple,fontWeight:'bold',fontSize:20,}}>Quick Inventory of Depressive Symptomatology (QIDS-SR)</Text>
        <Text style={{color:Colors.purple,fontWeight:'bold',fontSize:20,marginTop:20}}>Question 8/16</Text>
        <Text style={{fontSize:15.5,fontWeight:'600',marginTop:20,color:'black',}}>Please choose the one response to each item that best describes you for the past seven days.</Text>
      </View>


      <View style={{marginTop:15,marginLeft:20,width:'90%'}}>
      
        <Text style={{fontSize:15.5,fontWeight:'600',marginTop:20,color:'black',}}>Decreased Weight (Within the last two weeks):</Text>
      </View>

      
      <View style={{marginTop:5}}>

<DropDown
 dropDownContainerStyle={{
    
    height: 30,
    
    
  }}
style={{}}
placeholder={'Choose here'}
items={items}
open={open}
value={value}
setOpen={setOpen}
setValue={setValue}
setItems={setItems}
onPress={()=>{console.log('hi')}}



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
          onPress={() => navigation.navigate("Question9SR")}
        >
          <View >
            <Text style={styles.button1}>Next</Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
     
    </View>
    </View>
    // {/* </ScrollView> */}
  )
}

const styles = StyleSheet.create({
    buttonsPosition: {
      borderRadius:40,
      width: 343,
      alignSelf:'center',
    marginTop:50
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
  

export default Question8SR