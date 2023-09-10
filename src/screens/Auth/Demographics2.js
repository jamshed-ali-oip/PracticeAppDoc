import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../../constants/Colors';
import LinearGradient from "react-native-linear-gradient";
import { Color, FontFamily, Border, FontSize, Padding } from "../../../GlobalStyles";
import CheckBox from '@react-native-community/checkbox';
import DropDown from '../../components/DropDown';
import { useDispatch } from 'react-redux';
// import { thirdform } from '../../redux';
import { ScrollView } from 'react-native-gesture-handler';
import { FORMTHREE } from '../../redux/const/const';


const Demographics2 = ({ navigation }) => {
  const dispatch = useDispatch()
  const [toggleCheckBox, setToggleCheckBox] = useState(false)


  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'None', value: 'None' },
    { label: 'Bladder Cancer', value: 'Bladder Cancer' },
    { label: 'Breast Cancer', value: 'Breast Cancer' },
    { label: 'Kidney Cancer', value: 'Kidney Cancer' },
    { label: 'Thyroid Cancer', value: 'Thyroid Cancer' },
    { label: 'Cervical Cancer', value: 'Cervical Cancer' },
    { label: 'Colorectal Cancer', value: 'Colorectal Cancer' },
    { label: 'Gynecological Cancer', value: 'Gynecological Cancer' },
    { label: 'Head and neck cancers', value: 'Head and neck cancers' },
    { label: 'Liver cancer', value: 'Liver cancer' },
    { label: 'Lung Cancer', value: 'Lung Cancer' },
    { label: 'Lymphoma', value: 'Lymphoma' },
    { label: 'Mesothelioma', value: 'Mesothelioma' },
    { label: 'Myeloma', value: 'Myeloma' },
    { label: 'Ovarian cancer', value: 'Ovarian cancer' },
    { label: 'Prostate cancer', value: 'Prostate cancer' },
    { label: 'Skin cancer', value: 'Skin cancer' },
    { label: 'Uterine cancer', value: 'Uterine cancer' },
    { label: 'Vaginal and vulvar cancers', value: 'Vaginal and vulvar cancers' },

  ]);




  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items1, setItems1] = useState([
    { label: 'None', value: 'None' },
    { label: 'Stage I', value: 'Stage I' },
    { label: 'Stage II', value: 'Stage II' },
    { label: 'Stage III', value: 'Stage III' },
    { label: 'Stage IV', value: 'Stage IV' },

  ]);

  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    { label: 'Radiotherapy', value: 'Radiotherapy' },
    { label: 'Chemotherapy', value: 'Chemotherapy' },
    { label: 'Hormonal treatment', value: 'Hormonal treatment' },
    { label: 'No treatments', value: 'No treatments' },
    { label: 'Others', value: 'Others' },
  ]);




  const [open3, setOpen3] = useState(false);
  const [value3, setValue3] = useState(null);
  const [items3, setItems3] = useState([
    { label: 'Hypertension', value: 'Hypertension' },
    { label: 'Diabetes', value: 'Diabetes' },
    { label: 'Heart conditions', value: 'Heart conditions' },
    { label: 'HIV', value: 'HIV' },
    { label: 'HBV', value: 'HBV' },
    { label: 'HCV', value: 'HCV' },
    { label: 'Bipolar Disorder', value: 'Bipolar Disorder' },
    { label: 'Depression', value: 'Depression' },
    { label: 'Schizophrenia', value: 'Schizophrenia' },
    { label: 'Respiratory diseases', value: 'Respiratory diseases' },
    { label: 'Cerebrovascular disease', value: 'Cerebrovascular disease' },
    { label: 'Kidney disease', value: 'Kidney disease' },
    { label: 'Liver disease', value: 'Liver disease' },
    { label: 'Lung diseases', value: 'Lung diseases' },
    { label: 'Disabilities', value: 'Disabilities' },
    { label: 'Obesity', value: 'Obesity' },
    { label: 'Blood diseases', value: 'Blood diseases' },
    { label: 'Pregnancy or recent pregnancy', value: 'Pregnancy or recent pregnancy' },
    { label: 'Smoking (current and former)', value: 'Smoking (current and former)' },
    { label: 'Solid organ or blood stem cell transplantation', value: 'Solid organ or blood stem cell transplantation' },
    { label: 'Use of corticosteroids or other immunosuppressive medications', value: 'Use of corticosteroids or other immunosuppressive medications' },


  ]);

  const [open4, setOpen4] = useState(false);
  const [value4, setValue4] = useState(null);
  const [items4, setItems4] = useState([
    { label: 'Depression', value: 'Depression' },
    { label: 'Anxiety', value: 'Anxiety' },
    { label: 'Distress', value: 'Distress' },
    { label: 'Impact on quality of life', value: 'Impact on quality of life' },
    { label: 'Psychosocial impact', value: 'Psychosocial impact' },
  ]);




  const [open5, setOpen5] = useState(false);
  const [value5, setValue5] = useState(null);
  const [items5, setItems5] = useState([
    { label: 'Per Week', value: 'Per Week' },
    { label: 'Per Month', value: 'Per Month' },
    { label: 'Every 3 Months', value: 'Every 3 Months' },
    { label: 'Every 4-6 Months', value: 'Every 4-6 Months' }

  ]);


  const [open6, setOpen6] = useState(false);
  const [value6, setValue6] = useState(null);
  const [items6, setItems6] = useState([
    { label: 'Per Week', value: 'Per Week' },
    { label: 'Per 2 Weeks', value: 'Per 2 Weeks' },
    { label: 'Per Month', value: 'Per Month' },
    { label: 'Per 2 Month', value: 'Per 2 Month' },
    { label: 'Per 3-4 Month', value: 'Per 3-4 Month' },
    { label: 'Per 6 Month', value: 'Per 6 Month' },
  ]);




  const [drop1, setDrop1] = useState('')
  const [drop2, setDrop2] = useState('')
  const [drop3, setDrop3] = useState('')
  const [drop4, setDrop4] = useState('')
  const [yod, setYod] = useState('')
  const [drop5, setDrop5] = useState('')
  const [drop6, setDrop6] = useState('')
  const [error, setError] = useState('')




  const handleBackButton = () => {
    navigation.goBack();
  };


  const onNext = () => {
   if(toggleCheckBox==false){
    if (drop1 == '' || drop2 == '' || drop3 == '' || drop4 == '' || drop5 == '' || drop6 == '' || yod == '') {
      setError('Please answer the questions')
    }
    else {
      const body = {
        cancer_type: drop1,
        tumor_stage: drop2,
        current_cancer_treatment: drop3,
        other_conditions: drop4,
        severity_of_symptoms: drop5,
        regular_checkup_reminders: drop6,
        regular_doctors_appointments: '',
      }
      dispatch({
        type: FORMTHREE,
        payload: body
      })
      navigation.navigate("Acknowledgement")
    }
   }else{
    const body = {
      cancer_type: "None",
    }
    dispatch({
      type: FORMTHREE,
      payload: body
    })
    navigation.navigate("Acknowledgement")
   }
    // navigation.navigate("Acknowledgement")

  }

  return (
    <View style={{ flex: 1, }}>
      <ScrollView>
        <View style={{ width: '95%', marginHorizontal: 20, marginBottom: 20, }}>
          <View style={{ marginTop: 20, }}>
            <TouchableOpacity onPress={handleBackButton}>
              <Ionicons
                name='arrow-back'
                size={25}
                color={Colors.purple} />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 15, }}>
            <Text style={{ color: Colors.purple, fontWeight: 'bold', fontSize: 20, }}>General Health Information</Text>

          </View>

          <View>
            <Text style={{ color: 'red', fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>{error !== '' ? error : ''}</Text>
          </View>


          <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 0, marginTop: 10 }}>

            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
              // onFillColor='red'
              // onCheckColor='red'
              // tintColor='#FFFF'
              tintColors={{ true: 'purple', false: 'lightgrey' }}
            />
            <Text style={{ color: 'black' }} >  No Cancer</Text>


          </View>

{toggleCheckBox==false?<>

          <View style={{ marginTop: 5, marginLeft: -10,marginBottom:open?200:0  }}> 

            <DropDown
              placeholder={'Cancer Type'}
              items={items}
              open={open}
              value={value}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              onPress={() => { setOpen1(false); setOpen2(false); setOpen3(false); setOpen4(false); setOpen5(false); setOpen6(false) }}
              onChangeValue={value => {
                console.log(value, 'value')
                setDrop1(value)


              }}


            />

          </View>


          <View style={{ marginTop: 30, marginLeft: -10,marginBottom:open1?200:0  }}>

            <DropDown
              placeholder={'Stage of Tumor'}
              items={items1}
              open={open1}
              value={value1}
              setOpen={setOpen1}
              setValue={setValue1}
              setItems={setItems1}
              onPress={() => { setOpen(false); setOpen2(false); setOpen3(false); setOpen4(false); setOpen5(false); setOpen6(false) }}
              onChangeValue={value => {
                console.log(value, 'value')
                setDrop2(value)


              }}


            />

          </View>

          <View style={{ marginTop: 30, marginLeft: -10, zIndex: 9999999999,marginBottom:open2?200:0 }}>

            <DropDown
              placeholder={'Current Cancer Treatments'}
              items={items2}
              open={open2}
              value={value2}
              setOpen={setOpen2}
              setValue={setValue2}
              setItems={setItems2}
              onPress={() => { setOpen1(false); setOpen(false); setOpen3(false); setOpen4(false); setOpen5(false); setOpen6(false) }}
              onChangeValue={value => {
                console.log(value, 'value')
                setDrop3(value)


              }}


            />

          </View>

          <View style={{ marginTop: 30, marginLeft: -10, zIndex: 9999999,marginBottom:open3?200:0 }}>

            <DropDown
              placeholder={'Other Conditions'}
              items={items3}
              open={open3}
              value={value3}
              setOpen={setOpen3}
              setValue={setValue3}
              setItems={setItems3}
              onPress={() => { setOpen1(false); setOpen2(false); setOpen(false); setOpen4(false); setOpen5(false); setOpen6(false) }}
              onChangeValue={value => {
                console.log(value, 'value')
                setDrop4(value)


              }}


            />

          </View>

          <View
            style={{
              height: 50,
              width: '93%',
              backgroundColor: 'transparent',
              alignSelf: 'center',

              borderRadius: 10,
              // paddingLeft: 10,
              // paddingRight: 5,
              borderWidth: 1,
              borderColor: 'lightgrey',
              marginTop: 40,
              marginLeft: -10
            }}>
            <TextInput
              style={{ fontSize: 16, color: 'black', marginLeft: 5, }}
              keyboardType='numeric'
              placeholder=" Year of Diagnosis Eg (2009)"
              placeholderTextColor={'lightgrey'}
              placeholderStyle={{}}
              value={yod}
              onChangeText={value => setYod(value)}

            />
          </View>

          <View style={{ marginTop: 5, marginLeft: -10, zIndex: 99999999999999999,marginBottom:open4?200:0 }}>

            <DropDown
              placeholder={'Severity of Symptoms'}
              items={items4}
              open={open4}
              value={value4}
              setOpen={setOpen4}
              setValue={setValue4}
              setItems={setItems4}
              onPress={() => { setOpen1(false); setOpen2(false); setOpen3(false); setOpen(false); setOpen5(false); setOpen6(false) }}
              onChangeValue={value => {
                console.log(value, 'value')
                setDrop5(value)


              }}


            />

          </View>



          <View style={{ marginTop: 30, marginLeft: -10, zIndex: 9999999999999999 }}>

            <DropDown
              placeholder={'Regular Checkup Reminders'}
              items={items5}
              open={open5}
              value={value5}
              setOpen={setOpen5}
              setValue={setValue5}
              setItems={setItems5}
              onPress={() => { setOpen1(false); setOpen2(false); setOpen3(false); setOpen4(false); setOpen(false); setOpen6(false) }}
              onChangeValue={value => {
                console.log(value, 'value')
                setDrop6(value)


              }}


            />

          </View>


          <View style={{ marginTop: 30, marginLeft: -10, zIndex: 99999999999999 }}>

            <DropDown
              placeholder={'Regular doctors appointments'}
              items={items6}
              open={open6}
              value={value6}
              setOpen={setOpen6}
              setValue={setValue6}
              setItems={setItems6}
              onPress={() => { setOpen1(false); setOpen2(false); setOpen3(false); setOpen4(false); setOpen5(false); setOpen(false) }}
              onChangeValue={value => {
                console.log(value, 'value')



              }}


            />

          </View></>
:null}

          <View style={{ width: '90%', alignSelf: 'center', marginTop: 50, }}>
            <LinearGradient
              style={[styles.buttons, styles.buttonsPosition]}
              locations={[0, 1]}
              colors={["#bf6bbb", "#716eaa"]}
              useAngle={true}
              angle={180}
            >
              <TouchableOpacity
                style={[styles.pressable, styles.parentFlexBox]}
                onPress={onNext}
              >
                <View >
                  <Text style={styles.button1}>Next</Text>
                </View>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsPosition: {
    borderRadius: 40,
    // width: 343,
    width: '100%',
    alignSelf: 'center',
    // position:'absolute',
  },
  buttons: {
    // top: '165%',
    height: 47,
    // marginTop:10
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

export default Demographics2;
