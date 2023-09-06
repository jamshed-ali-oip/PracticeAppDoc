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

const Question4 = ({navigation}) => {
    
        
    
      const handleBackButton = () => {
        navigation.goBack();
      };


      const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    // {label: 'Yes, Limited a lot', value: 'Yes, Limited a lot'},
    {label: 'Yes', value: 'Yes'},
    {label: 'No', value: 'No'}
  ]);

  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items1, setItems1] = useState([
    // {label: 'Yes, Limited a lot', value: 'Yes, Limited a lot'},
    {label: 'Yes', value: 'Yes'},
    {label: 'No', value: 'No'}
  ]);

  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    // {label: 'Yes, Limited a lot', value: 'Yes, Limited a lot'},
    {label: 'Yes', value: 'Yes'},
    {label: 'No', value: 'No'}
  ]);

  const [open3, setOpen3] = useState(false);
  const [value3, setValue3] = useState(null);
  const [items3, setItems3] = useState([
    // {label: 'Yes, Limited a lot', value: 'Yes, Limited a lot'},
    {label: 'Yes', value: 'Yes'},
    {label: 'No', value: 'No'}
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
        <Text style={{color:Colors.purple,fontWeight:'bold',fontSize:20,}}>Question 4/11</Text>
        <Text style={{fontSize:15,fontWeight:'600',marginTop:20,color:'black',}}>During the past 4 weeks, have you had any of the following problems with your work or other regular daily activities as a result of your physical health?</Text>
      </View>


      <View>

      <Text style={{fontSize:13.5,fontWeight:'600',marginTop:30,color:'black',marginLeft:20}}>a. Cut down the amount of time you spent on work or other activities</Text>
      

      </View>
      <View style={{marginTop:5}}>

<DropDown
 dropDownContainerStyle={{
    
    height: 30,
    
    
  }}
style={{}}
placeholder={'Yes'}
items={items}
open={open}
value={value}
setOpen={setOpen}
setValue={setValue}
setItems={setItems}
onPress={()=>{setOpen1(false);setOpen2(false);setOpen3(false);}}



/>

</View>



<View>

<Text style={{fontSize:13.1,fontWeight:'600',marginTop:40,color:'black',marginLeft:20}}>b. Accomplished less than  you would like</Text>


</View>
<View style={{marginTop:5}}>

<DropDown
style={{}}
placeholder={'Yes'}
items={items1}
open={open1}
value={value1}
setOpen={setOpen1}
setValue={setValue1}
setItems={setItems1}
onPress={()=>{setOpen(false);setOpen2(false);setOpen3(false)}}



/>

</View>



<View>

<Text style={{fontSize:13.5,fontWeight:'600',marginTop:40,color:'black',marginLeft:20}}>c. Were limited in the kind of or other activities</Text>


</View>
<View style={{marginTop:5}}>

<DropDown
style={{}}
placeholder={'Yes'}
items={items2}
open={open2}
value={value2}
setOpen={setOpen2}
setValue={setValue2}
setItems={setItems2}
onPress={()=>{setOpen1(false);setOpen(false);setOpen3(false)}}



/>

</View>


<View>

<Text style={{fontSize:13.5,fontWeight:'600',marginTop:40,color:'black',marginLeft:20}}>d. Had difficulty performing the work or other activies (for example, it took extra effort)</Text>


</View>
<View style={{marginTop:5}}>

<DropDown
style={{}}
placeholder={'Yes'}
items={items3}
open={open3}
value={value3}
setOpen={setOpen3}
setValue={setValue3}
setItems={setItems3}
onPress={()=>{setOpen1(false);setOpen2(false);setOpen(false)}}



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
          onPress={() => navigation.navigate("Question5")}
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
  

export default Question4