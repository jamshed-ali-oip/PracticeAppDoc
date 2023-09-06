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

const Question9 = ({navigation}) => {
    
        
    
      const handleBackButton = () => {
        navigation.goBack();
      };


      const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'All of the time', value: 'All of the time'},
    {label: 'Most of the time', value: 'Most of the time'},
    {label: 'A good bit of the time', value: 'A good bit of the time'},
    {label: 'Some of the time', value: 'Some of the time'},
    {label: 'A little of the time', value: 'A little of the time'},
    {label: 'None of the time', value: 'None of the time'},
  ]);

  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items1, setItems1] = useState([
    {label: 'All of the time', value: 'All of the time'},
    {label: 'Most of the time', value: 'Most of the time'},
    {label: 'A good bit of the time', value: 'A good bit of the time'},
    {label: 'Some of the time', value: 'Some of the time'},
    {label: 'A little of the time', value: 'A little of the time'},
    {label: 'None of the time', value: 'None of the time'},
  ]);

  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    {label: 'All of the time', value: 'All of the time'},
    {label: 'Most of the time', value: 'Most of the time'},
    {label: 'A good bit of the time', value: 'A good bit of the time'},
    {label: 'Some of the time', value: 'Some of the time'},
    {label: 'A little of the time', value: 'A little of the time'},
    {label: 'None of the time', value: 'None of the time'},
  ]);

  const [open3, setOpen3] = useState(false);
  const [value3, setValue3] = useState(null);
  const [items3, setItems3] = useState([
    {label: 'All of the time', value: 'All of the time'},
    {label: 'Most of the time', value: 'Most of the time'},
    {label: 'A good bit of the time', value: 'A good bit of the time'},
    {label: 'Some of the time', value: 'Some of the time'},
    {label: 'A little of the time', value: 'A little of the time'},
    {label: 'None of the time', value: 'None of the time'},
  ]);

  const [open4, setOpen4] = useState(false);
  const [value4, setValue4] = useState(null);
  const [items4, setItems4] = useState([
    {label: 'All of the time', value: 'All of the time'},
    {label: 'Most of the time', value: 'Most of the time'},
    {label: 'A good bit of the time', value: 'A good bit of the time'},
    {label: 'Some of the time', value: 'Some of the time'},
    {label: 'A little of the time', value: 'A little of the time'},
    {label: 'None of the time', value: 'None of the time'},
  ]);

  const [open5, setOpen5] = useState(false);
  const [value5, setValue5] = useState(null);
  const [items5, setItems5] = useState([
    {label: 'All of the time', value: 'All of the time'},
    {label: 'Most of the time', value: 'Most of the time'},
    {label: 'A good bit of the time', value: 'A good bit of the time'},
    {label: 'Some of the time', value: 'Some of the time'},
    {label: 'A little of the time', value: 'A little of the time'},
    {label: 'None of the time', value: 'None of the time'},
  ]);

  const [open6, setOpen6] = useState(false);
  const [value6, setValue6] = useState(null);
  const [items6, setItems6] = useState([
    {label: 'All of the time', value: 'All of the time'},
    {label: 'Most of the time', value: 'Most of the time'},
    {label: 'A good bit of the time', value: 'A good bit of the time'},
    {label: 'Some of the time', value: 'Some of the time'},
    {label: 'A little of the time', value: 'A little of the time'},
    {label: 'None of the time', value: 'None of the time'},
  ]);

  const [open7, setOpen7] = useState(false);
  const [value7, setValue7] = useState(null);
  const [items7, setItems7] = useState([
    {label: 'All of the time', value: 'All of the time'},
    {label: 'Most of the time', value: 'Most of the time'},
    {label: 'A good bit of the time', value: 'A good bit of the time'},
    {label: 'Some of the time', value: 'Some of the time'},
    {label: 'A little of the time', value: 'A little of the time'},
    {label: 'None of the time', value: 'None of the time'},
  ]);


  const [open8, setOpen8] = useState(false);
  const [value8, setValue8] = useState(null);
  const [items8, setItems8] = useState([
    {label: 'All of the time', value: 'All of the time'},
    {label: 'Most of the time', value: 'Most of the time'},
    {label: 'A good bit of the time', value: 'A good bit of the time'},
    {label: 'Some of the time', value: 'Some of the time'},
    {label: 'A little of the time', value: 'A little of the time'},
    {label: 'None of the time', value: 'None of the time'},
  ]);







  return (
      <ScrollView>
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
      <View style={{width:'99%'}}>
      <View style={{marginTop:15,marginLeft:20}}>
        <Text style={{color:Colors.purple,fontWeight:'bold',fontSize:20,}}>Question 9/11</Text>
        <Text style={{fontSize:15,fontWeight:'600',marginTop:20,color:'black',}}>How much of the time during the past 4 weeks ...</Text>
      </View>


      <View>

      <Text style={{fontSize:13.5,fontWeight:'600',marginTop:30,color:'black',marginLeft:20}}>a. Did you feel full of pep?</Text>
      

      </View>
      <View style={{marginTop:5}}>

<DropDown
style={{}}
placeholder={'All of the time'}
items={items}
open={open}
value={value}
setOpen={setOpen}
setValue={setValue}
setItems={setItems}
onPress={()=>{setOpen1(false);setOpen2(false);setOpen3(false);setOpen4(false);setOpen5(false);setOpen6(false);setOpen7(false);setOpen8(false)}}



/>

</View>



<View>

<Text style={{fontSize:13.1,fontWeight:'600',marginTop:40,color:'black',marginLeft:20}}>b. Have you been a very nervous person?</Text>


</View>
<View style={{marginTop:5}}>

<DropDown
style={{}}
placeholder={'All of the time'}
items={items1}
open={open1}
value={value1}
setOpen={setOpen1}
setValue={setValue1}
setItems={setItems1}
onPress={()=>{setOpen(false);setOpen2(false);setOpen3(false);setOpen4(false);setOpen5(false);setOpen6(false);setOpen7(false);setOpen8(false)}}



/>

</View>



<View>

<Text style={{fontSize:13.5,fontWeight:'600',marginTop:40,color:'black',marginLeft:20}}>c. Have you felt so down in the dumps that nothing could cheer you up?</Text>


</View>
<View style={{marginTop:5}}>

<DropDown
style={{}}
placeholder={'All of the time'}
items={items2}
open={open2}
value={value2}
setOpen={setOpen2}
setValue={setValue2}
setItems={setItems2}
onPress={()=>{setOpen1(false);setOpen(false);setOpen3(false);setOpen4(false);setOpen5(false);setOpen6(false);setOpen7(false);setOpen8(false)}}



/>

</View>


<View>

<Text style={{fontSize:13.5,fontWeight:'600',marginTop:40,color:'black',marginLeft:20}}>d. Have you felt calm and peaceful?</Text>


</View>
<View style={{marginTop:5}}>

<DropDown
style={{}}
placeholder={'All of the time'}
items={items3}
open={open3}
value={value3}
setOpen={setOpen3}
setValue={setValue3}
setItems={setItems3}
onPress={()=>{setOpen1(false);setOpen2(false);setOpen(false);setOpen4(false);setOpen5(false);setOpen6(false);setOpen7(false);setOpen8(false)}}



/>

</View>



<View>

<Text style={{fontSize:13.5,fontWeight:'600',marginTop:40,color:'black',marginLeft:20}}>e. Did you have a lot of energy</Text>


</View>
<View style={{marginTop:5}}>

<DropDown
style={{}}
placeholder={'All of the time'}
items={items4}
open={open4}
value={value4}
setOpen={setOpen4}
setValue={setValue4}
setItems={setItems4}
onPress={()=>{setOpen1(false);setOpen2(false);setOpen3(false);setOpen(false);setOpen5(false);setOpen6(false);setOpen7(false);setOpen8(false)}}



/>

</View>



<View>

<Text style={{fontSize:13.5,fontWeight:'600',marginTop:40,color:'black',marginLeft:20}}>f. Have you felt downhearted and blue?</Text>


</View>
<View style={{marginTop:5}}>

<DropDown
style={{}}
placeholder={'All of the time'}
items={items5}
open={open5}
value={value5}
setOpen={setOpen5}
setValue={setValue5}
setItems={setItems5}
onPress={()=>{setOpen1(false);setOpen2(false);setOpen3(false);setOpen4(false);setOpen(false);setOpen6(false);setOpen7(false);setOpen8(false)}}



/>

</View>



<View>

<Text style={{fontSize:13.5,fontWeight:'600',marginTop:40,color:'black',marginLeft:20}}>g. Did you feel worn out?</Text>


</View>
<View style={{marginTop:5}}>

<DropDown
style={{}}
placeholder={'All of the time'}
items={items6}
open={open6}
value={value6}
setOpen={setOpen6}
setValue={setValue6}
setItems={setItems6}
onPress={()=>{setOpen1(false);setOpen2(false);setOpen3(false);setOpen4(false);setOpen5(false);setOpen(false);setOpen7(false);setOpen8(false)}}



/>

</View>



<View>

<Text style={{fontSize:13.5,fontWeight:'600',marginTop:40,color:'black',marginLeft:20}}>h. Have you been a happy person?</Text>


</View>
<View style={{marginTop:5}}>

<DropDown
style={{}}
placeholder={'All of the time'}
items={items7}
open={open7}
value={value7}
setOpen={setOpen7}
setValue={setValue7}
setItems={setItems7}
onPress={()=>{setOpen1(false);setOpen2(false);setOpen3(false);setOpen4(false);setOpen5(false);setOpen6(false);setOpen(false);setOpen8(false)}}



/>

</View>



<View>

<Text style={{fontSize:13.5,fontWeight:'600',marginTop:40,color:'black',marginLeft:20}}>i. Did you feel tired?</Text>


</View>
<View style={{marginTop:5}}>

<DropDown
style={{}}
placeholder={'All of the time'}
items={items8}
open={open8}
value={value8}
setOpen={setOpen8}
setValue={setValue8}
setItems={setItems8}
onPress={()=>{setOpen1(false);setOpen2(false);setOpen3(false);setOpen4(false);setOpen5(false);setOpen6(false);setOpen7(false);setOpen(false)}}



/>

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
          onPress={() => navigation.navigate("Question10")}
        >
          <View >
            <Text style={styles.button1}>Next</Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
      <View style={{marginTop:20}}>
          </View>
    </View>
    </View>
    </ScrollView>
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
  

export default Question9