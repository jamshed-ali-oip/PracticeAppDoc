
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Keyboard } from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color, Padding } from "../../GlobalStyles";
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../constants/Colors';

const PasswordInput = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

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

    if (password1 === password2) {
      // Passwords match, navigate to the desired screen
      navigation.navigate("Tab2");
    } else {
      // Passwords don't match, show error
      setPasswordError(true);
    }
  };
  

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="height" keyboardVerticalOffset={10}>
    <View style={{ flex: 1 }}>
      <View style={{ width: '95%', marginHorizontal: 10 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='chevron-back-outline' size={25} color={Colors.purple} style={{ marginTop: 40, width: '95%', marginHorizontal: 5 }} />
        </TouchableOpacity>
        <View style={{ width: '95%', marginHorizontal: 10, marginTop: 40 }}>
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ fontSize: 28, color: Colors.black, fontWeight: 'bold', fontFamily: FontFamily.AllisonRegular, letterSpacing: 1 }}>
              Create New Password
            </Text>
            <Text style={{ fontSize: 16, marginTop: 10, fontFamily: 'Poppins-Regular' }}>
              Make a new password that's different from your old password
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            secureTextEntry={!showPassword}
            placeholder="Enter password"
            value={password}
            onChangeText={setPassword}
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
            value={password1}
            onChangeText={setPassword1}
          />
          <TouchableOpacity style={styles.toggleButton} onPress={togglePasswordVisibility1}>
            <Feather name={showPassword1 ? 'eye-off' : 'eye'} size={24} color={Colors.purple} />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            secureTextEntry={!showPassword2}
            placeholder="Re-enter new password"
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
        onPress={handleCreatePassword}
      >
        <View>
          <Text style={styles.button1}>Create New Password</Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  </KeyboardAvoidingView>

  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
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
  },
  toggleButton: {
    padding: 5,
  },
  buttonsPosition: {
    borderRadius: 40,
    width: 343,
    alignSelf: 'center',
    position: "absolute",
    bottom: 0,
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

export default PasswordInput;
