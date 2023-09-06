import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../../constants/Colors';
import LinearGradient from "react-native-linear-gradient";
import { Color, FontFamily, Border, FontSize, Padding } from "../../../GlobalStyles";
import { useDispatch } from 'react-redux';
import { secondform } from '../../redux';
import { ScrollView } from 'react-native-gesture-handler';


const Demographics = ({ navigation }) => {
  const dispatch = useDispatch()
  const [iam, setIam] = useState(null)
  const [lang, setLang] = useState(null)
  const [edu, setEdu] = useState(null)
  const [error,setError] = useState('')

  const data = [
    {
      label: 'Patient'
    },
    {
      label: 'Caregiver'
    }
  ];

  const data1 = [
    {
      label: 'English'
    },
    {
      label: 'Arabic'
    }
  ];


  const data2 = [
    {
      label: 'High School Graduate'
    },
    {
      label: 'College Graduate'
    },
    {
      label: 'Prefer not to say'
    },
  ];


  const handleBackButton = () => {
    navigation.goBack();
  };

  const onNext = () => {
    if (iam == null || lang == null || edu == null) {
      setError('Please answer all questions')

    }
    else {
    const body = {
      user_type: iam,
      linguistic_prefrences: lang,
      education_level: edu,
    }
    dispatch(secondform(body))
    navigation.navigate("Demographics2")
  }
  }

  return (
    <View style={{ flex: 1, }}>
      <ScrollView>
      <View style={{ width: '95%', marginHorizontal: 20, }}>
        <View style={{ marginTop: 20, }}>
          <TouchableOpacity onPress={handleBackButton}>
            <Ionicons
              name='arrow-back'
              size={25}
              color={Colors.purple} />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 15, }}>
          <Text style={{ color: Colors.purple, fontWeight: 'bold', fontSize: 20, }}>We would like to know more about you</Text>
          <View>
          <Text style={{color: 'red', fontWeight: 'bold', textAlign: 'center',marginTop:10}}>{error !== '' ? error : ''}</Text>
          </View>
          <Text style={{ fontSize: 18, fontWeight: '600', marginTop: 20, color: 'black' }}>i am a:</Text>
        </View>
        <View style={{ marginTop: 10, }}>
          <RadioButtonRN
            activeColor={Colors.purple}
            box={false}
            // boxStyle={{backgroundColor:Colors.white,border:0,}}
            data={data}
            selectedBtn={(e) => setIam(e.label)}
          />
        </View>


        <View>

          <Text style={{ fontSize: 18, fontWeight: '600', marginTop: 30, color: 'black' }}>Linguistic Preferences</Text>
        </View>
        <View style={{ marginTop: 10, }}>
          <RadioButtonRN
            activeColor={Colors.purple}
            box={false}
            // boxStyle={{backgroundColor:Colors.white,border:0,}}
            data={data1}
            selectedBtn={(e) => setLang(e.label)}
          />
        </View>



        <View>

          <Text style={{ fontSize: 18, fontWeight: '600', marginTop: 30, color: 'black' }}>Educational Level</Text>
        </View>
        <View style={{ marginTop: 10, }}>
          <RadioButtonRN
            activeColor={Colors.purple}
            box={false}
            // boxStyle={{backgroundColor:Colors.white,border:0,}}
            data={data2}
            selectedBtn={(e) => setEdu(e.label)}
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
            onPress={onNext}
          >
            <View >
              <Text style={styles.button1}>Next</Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsPosition: {
    borderRadius: 40,
    width: 343,
    alignSelf: 'center',
    // position:'absolute',
  },
  buttons: {
    // top: '165%',
    height: 47,
    marginTop: 30
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

export default Demographics;
