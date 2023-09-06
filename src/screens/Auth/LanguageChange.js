import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';
import LinearGradient from 'react-native-linear-gradient';
import { Color, FontFamily, Border, FontSize, Padding } from '../../../GlobalStyles';

const languageChange = ({ navigation }) => {
  const data = [
    {
      label: 'English',
    },
    {
      label: 'Arabic',
    },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleContinueButton = () => {
    if (selectedOption) {
      // Option selected, navigate to the next screen
      navigation.navigate('Login');
    } else {
      // No option selected, show an error message
      console.log('Please select an option');
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: '95%', marginHorizontal: 20 }}>
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity onPress={handleBackButton}>
            <Ionicons name="arrow-back" size={25} color={Colors.purple} />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text style={{ color: Colors.purple, fontWeight: 'bold', fontSize: 20 }}>
            We would like to switch language
          </Text>
          <Text style={{ fontSize: 18, fontWeight: '600', marginTop: 50, color:'black' }}>I am a:</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <RadioButtonRN
            activeColor={Colors.purple}
            box={false}
            data={data}
            selectedBtn={(option) => handleOptionSelect(option)}
          />
        </View>
      </View>
      <LinearGradient
        style={[styles.buttons, styles.buttonsPosition]}
        locations={[0, 1]}
        colors={['#bf6bbb', '#716eaa']}
        useAngle={true}
        angle={180}
      >
        <TouchableOpacity style={[styles.pressable, styles.parentFlexBox]} onPress={handleContinueButton}>
          <View>
            <Text style={styles.button1}>Next</Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsPosition: {
    borderRadius: 40,
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 40,
  },
  buttons: {
    height: 40,
  },
  pressable: {
    borderRadius: Border.br_47xl,
    height: '100%',
    backgroundColor: 'transparent',
    width: '100%',
  },
  parentFlexBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.labelColorDarkPrimary,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default languageChange;
