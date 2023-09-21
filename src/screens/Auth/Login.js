import React, { useState } from "react";
import { Image, StyleSheet, Text, View, Pressable, TextInput, ScrollView ,ActivityIndicator} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color, Padding } from "../../../GlobalStyles";
import Colors from '../../constants/Colors';
import BottomHome from "../BottomScreens/BottomHome";
import ColorScreen from "../ColorScreen";

// import AnimTab1 from "../../bottomTab/AnimTab1";
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { mytest, userLogin } from "../../redux/actions/user.action";


const Login1 = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [securetextentry, setSecuretextentry] = useState(true)
  const [error, setError] = useState(null);
  const [Loginerror, setLoginError] = useState();
  const [Loading, setLoading] = useState(false);

  const validateEmail = () => {
    // Simple email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email == '') {
      setEmailError('Enter email');
      // setLoading(false)
      return false
    }
    else if (!emailPattern.test(email)) {
      setEmailError('Invalid email');
      // setLoading(false)
      return false
    } else {
      setEmailError('');
      // setLoading(false)
      return true
    }
  };

  const validatePassword = () => {
    if (password == '') {
      setPasswordError('Enter password');
      // setLoading(false)
      return false
    }
    else if (password.length < 6) {
      // setLoading(false)
      setPasswordError('Password must be at least 6 characters');
      return false
    } else {
      // setLoading(false)
      setPasswordError('');
      return true
    }
  };
  // JSD WORK 

  const handleSignIn = async () => {
    setLoading(true)
    const data = {
      email: email,
      password: password
      // email: "mzaryabuddin@gmail.com",
      // password: "Test@12345"
    }
    // setLoading(true)
    // alert("login api work")
    // Validate email and password
    let validatemail = validateEmail();
    let validatepass = validatePassword();

    if (validatemail == true && validatepass == true) {
      dispatch(userLogin(data,setLoginError, setLoading))
    }
    // console.log(data)
    // dispatch(userLogin(data))
  }






  return (
    <View style={{ backgroundColor: Color.labelColorDarkPrimary, flex: 1, }}>
      <ScrollView>
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '10%', }}>



          <View style={styles.groupParent}>
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require("../../../assets/group2.png")}
            />
            <View style={styles.titleContainer}>
              <View style={[styles.textContainer, styles.buttonFlexBox]}>
                <Text style={[styles.logIn, styles.logInTypo]}>Log in</Text>
              </View>
              <View style={[styles.textContainer, styles.buttonFlexBox]}>
                {error && <Text style={{ color: 'red' }}>{error}</Text>}
              </View>
            </View>


            <View style={styles.inputFieldParent}>
              <View>
              {Loginerror ? <Text style={styles.error}>{"*"+Loginerror}</Text> : null}
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor='#a1b0b5'
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  // onBlur={validateEmail}
                  keyboardType="email-address"
                />

              </View>
              <View>
                
                {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
              </View>
              <View style={{
                height: 40,
                width: 310,
                backgroundColor: 'transparent',
                alignSelf: 'center',
                borderRadius: 7,
                borderWidth: 1,
                borderColor: Colors.light,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 5
              }}>
                <TextInput
                  style={{ fontSize: 14, color: Color.systemBlack, width: '85%' }}
                  placeholder="Password"
                  placeholderTextColor='#a1b0b5'
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  // onBlur={validatePassword}
                  secureTextEntry={securetextentry}



                />
                <View style={{ justifyContent: 'center' }}>
                  {/* <Ionicons
                            name={securetextentry ? 'eye-off' : 'eye'}
                            color={Colors.white}
                            size={20}
                            style={{  marginRight: 10 }}
                            onPress={() => setSecuretextentry(!securetextentry)}
                        /> */}
                  <Feather name={securetextentry ? 'eye-off' : 'eye'} size={18} color={Colors.purple}
                    style={{ marginRight: 10 }}
                    onPress={() => setSecuretextentry(!securetextentry)}
                  />
                </View>

              </View>
              <View style={{ marginTop: 10 }}>
                {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
              </View>


              <Pressable
                style={styles.forgotPassword}
                onPress={() => navigation.navigate('ForgotPassword')}
              >
                <Text style={[styles.forgotPassword1, styles.dontHaveAnTypo]}>
                  Forgot Password
                </Text>
              </Pressable>
            </View>
            <View style={styles.groupContainer}>
              <View style={styles.vectorParent}>
                <Image
                  style={styles.groupChild}
                  resizeMode="cover"
                  source={require("../../../assets/vector-2161.png")}
                />
                {/* <View style={[styles.rectangleParent, styles.groupItemLayout]}>
                  <View style={[styles.groupItem, styles.groupItemLayout]} />
                  <Text style={[styles.orSignIn, styles.orSignInTypo]}>
                    or sign in using
                  </Text>
                </View> */}
              </View>
              {/* social logn  */}
              {/* <View style={styles.frameView}>
                <Image
                  style={styles.frameChild}
                  resizeMode="cover"
                  source={require("../../../assets/group-1000001448.png")}
                />
                <Image
                  style={[styles.facebook31, styles.frameItemLayout]}
                  resizeMode="cover"
                  source={require("../../../assets/facebook-3-1.png")}
                />
                <Image
                  style={styles.frameItemLayout}
                  resizeMode="cover"
                  source={require("../../../assets/group-1000001450.png")}
                />
              </View> */}
            </View>
            <View style={styles.groupContainer}>
              <LinearGradient
                style={styles.buttons}
                locations={[0, 1]}
                colors={["#bf6bbb", "#716eaa"]}
                useAngle={true}
                angle={180}
              >
                <Pressable
                  onPress={handleSignIn}
                  style={[styles.pressable, styles.buttonFlexBox]}
                >
                  <View style={[styles.button, styles.buttonFlexBox]}>
                    <Text style={[styles.button1, styles.logInTypo]}>{Loading==true?<ActivityIndicator color={"white"} size={"small"} />:"Sign in"}</Text>
                  </View>
                </Pressable>
              </LinearGradient>
            </View>
            <View style={{ marginTop: 20, }}>
              <View style={{ width: 240, alignItems: 'center' }}>
                <Pressable onPress={() => navigation.navigate('Signup')}>
                  <Text style={{ color: '#8b8b8b', fontSize: 16 }}>Don't have an accout ? <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>Sign Up</Text></Text>
                </Pressable>
              </View>
            </View>

          </View>

        </View>

      </ScrollView>
      <View style={{ position: 'relative', alignSelf: 'center', bototm: 20, }}>
        <Text style={{ fontSize: 11, color:"black" }}>Powered by <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 12 }}>NTAM Group</Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timePosition: {
    top: 0,
    left: 0,
  },
  timeLayout: {
    height: 21,
    width: 54,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    // position: "absolute",
  },
  homeindicatorPosition: {
    right: 0,
    left: 0,
    // position: "absolute",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  logInTypo: {
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "bold",
  },
  buttons1Layout: {
    borderRadius: Border.br_xs,
    justifyContent: "center",
  },
  orSignInTypo: {
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 18,
    fontSize: FontSize.defaultRegularFootnote_size,
  },
  dontHaveAnTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  groupItemLayout: {
    width: 129,
    height: 26,
    top: 0,
    position: "absolute",
  },
  frameItemLayout: {
    marginLeft: 9,
    height: 41,
    width: 41,
  },
  text1Layout: {
    lineHeight: 18,
    textAlign: "center",
  },
  rightSideIcon: {
    top: 17,
    right: 15,
    width: 67,
    height: 11,
    position: "absolute",
  },
  text: {
    top: 1,
    fontSize: FontSize.defaultBoldSubheadline_size,
    letterSpacing: 0,
    color: Color.systemBlack,
    height: 20,
    textAlign: "center",
    lineHeight: 20,
    width: 54,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 0,
  },
  time: {
    borderRadius: Border.br_5xl,
    left: 0,
    top: 0,
  },
  leftSide: {
    top: 12,
    left: 24,
  },
  statusBarIphoneXOrNewe: {
    height: 44,
    width: 375,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.systemBlack,
    width: 134,
    height: 5,
    position: "absolute",
  },
  homeindicator: {
    // bottom: 0,
    // height: 34,
  },
  groupIcon: {
    width: 118,
    height: 138,
  },
  logIn: {
    fontSize: FontSize.size_9xl,
    lineHeight: 36,
    color: Color.dimgray_300,
    alignSelf: "stretch",
    textAlign: "center",
  },
  textContainer: {
    height: 59,
    alignSelf: "stretch",
  },
  titleContainer: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_9xs,
    marginTop: 20,
    width: 375,
  },
  dateOfBirth: {
    color: Color.neutral500,
    textAlign: "left",
    display: "flex",
    width: 212,
    alignItems: "center",
  },
  dateOfBirthDdmmyyWrapper: {
    marginTop: -28,
    top: "50%",
    borderStyle: "solid",
    borderColor: "#e7eaeb",
    borderWidth: 1,
    paddingLeft: Padding.p_sm,
    paddingTop: Padding.p_6xs,
    paddingRight: Padding.p_90xl,
    paddingBottom: Padding.p_5xs,
    height: 56,
    right: 0,
    left: 0,
    position: "absolute",
    backgroundColor: Color.labelColorDarkPrimary,
  },
  inputField: {
    height: 56,
    width: 343,
  },
  inputField1: {
    marginTop: 12,
    height: 56,
    width: 343,
  },
  forgotPassword1: {
    color: "#265565",
    lineHeight: 18,
    textAlign: "center",
    fontSize: FontSize.defaultRegularFootnote_size,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 12,
  },
  inputFieldParent: {
    // alignItems: "flex-end",
    marginTop: 20,
  },
  groupChild: {
    top: 13,
    height: 1,
    width: 321,
    left: 0,
    position: "absolute",
  },
  groupItem: {
    left: 0,
    backgroundColor: Color.labelColorDarkPrimary,
  },
  orSignIn: {
    top: 4,
    left: 15,
    color: Color.lightgray,
    textAlign: "center",
    position: "absolute",
  },
  rectangleParent: {
    left: 98,
  },
  vectorParent: {
    height: 26,
    width: 321,
  },
  frameChild: {
    height: 42,
    width: 41,
  },
  facebook31: {
    overflow: "hidden",
  },
  frameView: {
    flexDirection: "row",
    marginTop: 24,
  },
  groupContainer: {
    // width:'100%',
    marginTop: 20,
    alignItems: "center",
  },
  button1: {
    fontSize: FontSize.size_base,
    color: Color.labelColorDarkPrimary,
    textAlign: "center",
    lineHeight: 20,
  },
  button: {
    paddingHorizontal: '34%',
    paddingVertical: 0,
    alignSelf: "stretch",
    flex: 1,
  },
  pressable: {
    borderRadius: Border.br_47xl,
    height: "100%",
    backgroundColor: "transparent",
    width: "100%",
  },
  buttons: {
    height: 40,
    width: '100%',
    borderRadius: 30,
  },
  dontHaveAn: {
    color: Color.gray_100,
  },
  text2: {
    color: Color.labelColorDarkPrimary,
  },
  signUp1: {
    color: Color.darkslategray_600,
  },
  text1: {
    fontSize: FontSize.defaultRegularFootnote_size,
    lineHeight: 22,
  },
  buttons1: {
    height: 50,
    marginTop: 16,
    width: 343,
    alignItems: "center",
  },
  groupParent: {
    // top: 76,
    alignItems: "center",
    left: 0,
    // position: "absolute",
  },
  poweredBy: {
    color: Color.gray_100,
  },
  ntamGroup: {
    color: Color.darkslategray_400,
  },
  poweredByNtamContainer: {
    top: 777,
    left: 139,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  login: {
    // borderRadius: Border.br_11xl,
    // height: 812,
    // overflow: "hidden",
    // width: "100%",
    // flex: 1,
    // backgroundColor: Color.labelColorDarkPrimary,
  },
  input: {
    width: 310,
    height: 40,
    borderColor: Colors.light,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 7,
    color: 'black',
    alignSelf: 'center'

  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Login1;
