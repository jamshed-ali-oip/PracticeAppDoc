import React, {useState, useEffect} from 'react';
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
  Pressable,
  Platform,
  Dimensions,
} from 'react-native';
import DropDown from '../../components/DropDown';
import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient';
import {
  FontFamily,
  FontSize,
  Color,
  Border,
  Padding,
} from '../../../GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
// import {firstform} from '../../redux';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import Colors from '../../constants/Colors';
import Feather from 'react-native-vector-icons/Feather';
import {FORMONE} from '../../redux/const/const';
import { EmailCheck } from '../../redux/actions/user.action';

const {height, width} = Dimensions.get('window');
const Signup = ({navigation}) => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [datePlaceholder, setDatePlaceholder] = useState('Date of birth');
  const [open, setOpen] = useState(false);
  const [drop1, setDrop1] = useState('');
  const [drop2, setDrop2] = useState('');
  console.log(drop1, '==========');
  console.log(drop2, 'haahha');

  const [firstname, setFisrtname] = useState('');
  const [lastname, setLastname] = useState('');
  const [dob, setDob] = useState('');
  // const [age,setAge] = useState('')
  console.log(dob, '====dob');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [passerror, setPasserror] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [gender, setGender] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Femal'},
    {label: 'Prefer not to say', value: 'other'},
  ]);

  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    {label: 'Single', value: 'Single'},
    {label: 'Married', value: 'Married'},
    {label: 'Divorced', value: 'Divorced'},
    {label: 'Prefer not to say', value: 'other'},
  ]);

  const [error, setError] = useState(null);

  const [securetextentry, setSecuretextentry] = useState(true);
  const [securetextentry1, setSecuretextentry1] = useState(true);
  const [emailverify, setEmailverify] = useState()
  const datee = moment(new Date()).format('DD-MM-YYYY');
  const validation = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const uppercaseCharRegex = /[A-Z]/;

    if (firstname === '') {
      setError({firstname: 'Please enter first name'});
      return false;
    } else if (lastname === '') {
      setError({lastname: 'Please enter last name'});
      return false;
    } else if (drop1 === '') {
      setError({drop1: 'Please select gender'});
      return false;
    } else if (dob === '') {
      setError({dob: 'Please select date of birth'});
      return false;
    } else if (drop2 === '') {
      setError({drop2: 'Please select status'});
      return false;
    } else if (!emailRegex.test(email)) {
      setError({email: 'Invalid email format'});
      return false;
    } else if (password === '') {
      setError({password: 'Please enter password'});
      return false;
    } else if (password.length < 6) {
      setError({password: 'Password must be at least 6 characters long'});
      return false;
    } else if (!specialCharRegex.test(password)) {
      setError({
        password: 'Password must contain at least one special character',
      });
      return false;
    } else if (!uppercaseCharRegex.test(password)) {
      setError({
        password: 'Password must contain at least one uppercase character',
      });
      return false;
    } else if (dob == datee) {
      setError({password: 'Select correct Date'});
      return false;
    } else if (password !== cpassword) {
      setError({cpassword: 'Password Does Not Match'});
      return false;
    } else {
      return true;
    }
  };
  const emailchecker=async()=>{
    const data=await dispatch(EmailCheck(email))
    // const data2=JSON?.stringify(data)
    setEmailverify(data)
   
  }
  const onSignUp = () => {
    validate = validation();
    emailchecker()
    if (validate && emailverify==false) {
      const body = {
        first_name: firstname,
        last_name: lastname,
        gender: drop1,
        dob: dob,
        marital_status: drop2,
        email: email,
        password: password,
      };
      dispatch({
        type: FORMONE,
        payload: body,
      });
      navigation.navigate('Demographics');
    }
    // navigation.navigate('Demographics');
  };

  useEffect(() => {
    setDatePlaceholder('Date of birth');
  }, []);

  return (
    <ScrollView automaticallyAdjustKeyboardInsets={true}>
      <View style={{flex: 1, backgroundColor: Colors.white, marginBottom: 10}}>
        <View style={{marginTop: 20, alignItems: 'center'}}>
          <Image
            style={{width: width * 0.7, height: height * 0.18}}
            resizeMode="contain"
            source={require('../../../assets/logos/ntlogo.png')}
          />
          <Text
            style={{
              color: 'black',
              fontSize: 30,
              fontWeight: 'bold',
              // marginTop: 10,
            }}>
            Sign Up
          </Text>
        </View>

        <View>
          <Text
            style={{
              color: 'red',
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 10,
            }}>
            {passerror !== '' ? passerror : ''}
          </Text>
        </View>

        <View
          style={{
            height: 50,
            width: '90%',
            backgroundColor: 'transparent',
            alignSelf: 'center',

            borderRadius: 10,
            // paddingLeft: 10,
            // paddingRight: 5,
            // alignItems:"center",
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: 'lightgrey',
            marginTop: 20,
          }}>
          <TextInput
            style={{
              fontSize: 16,
              color: Color.systemBlack,
              alignItems: 'center',
              marginLeft: 5,
            }}
            placeholder=" First Name"
            placeholderTextColor={'lightgrey'}
            placeholderStyle={{}}
            value={firstname}
            onChangeText={value => setFisrtname(value)}
          />
        </View>
        {error?.firstname && (
          <Text style={{color: 'red', fontWeight: 'bold', textAlign: 'center'}}>
            {error?.firstname}
          </Text>
        )}

        <View
          style={{
            height: 50,
            width: '90%',
            backgroundColor: 'transparent',
            alignSelf: 'center',

            borderRadius: 10,
            // paddingLeft: 10,
            // paddingRight: 5,
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: 'lightgrey',
            marginTop: 15,
          }}>
          <TextInput
            style={{fontSize: 16, color: Color.systemBlack, marginLeft: 5}}
            placeholder=" Last Name"
            placeholderTextColor={'lightgrey'}
            placeholderStyle={{}}
            value={lastname}
            onChangeText={value => setLastname(value)}
          />
        </View>
        {error?.lastname && (
          <Text
            style={{
              color: 'red',
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 10,
            }}>
            {error?.lastname}
          </Text>
        )}
        <View
          style={{
            height: 50,
            width: '90%',
            backgroundColor: 'transparent',
            alignSelf: 'center',

            borderRadius: 10,
            // paddingLeft: 10,
            // paddingRight: 5,
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: 'lightgrey',
            marginTop: 15,
          }}>
          <TextInput
            style={{fontSize: 16, color: Color.systemBlack, marginLeft: 5}}
            placeholder="Age"
            placeholderTextColor={'lightgrey'}
            placeholderStyle={{}}
            // value={lastname}
            keyboardType="decimal-pad"
            // onChangeText={value => setLastname(value)}
          />
        </View>

        <View
          style={{marginTop: 5, zIndex: 9999, marginBottom: gender ? 100 : 0}}>
          <DropDown
            placeholder={'Gender'}
            items={items}
            open={gender}
            value={value}
            setOpen={setGender}
            setValue={setValue}
            setItems={setItems}
            onPress={() => setOpen2(false)}
            onChangeValue={value => {
              console.log(value, 'value');
              setDrop1(value);
            }}
          />
        </View>
        <View style={{top: 30}}>
          {error?.drop1 && (
            <Text
              style={{
                color: 'red',
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 10,
              }}>
              {error?.drop1}
            </Text>
          )}
        </View>
        <TouchableOpacity
          onPress={() => {
            setOpen(true);
            setDatePlaceholder('');
          }}
          style={{
            height: 55,
            width: '90%',
            backgroundColor: 'transparent',
            alignSelf: 'center',

            borderRadius: 10,
            // paddingLeft: 10,
            // paddingRight: 5,
            borderWidth: 1,
            borderColor: 'lightgrey',
            marginTop: 40,
          }}>
          <View style={{top: 10, left: 10}}>
            <Text
              style={{
                fontSize: 16,
                marginTop: 5,
                color: dob === '' ? 'lightgrey' : 'black',
              }}>
              {datePlaceholder || moment(date).format('DD-MM-YYYY')}
            </Text>
          </View>
          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
              const a = moment(date).format('DD-MM-YYYY');
              setDob(a);
            }}
            onCancel={() => {
              setOpen(false);
            }}
            mode="date"
            onDateChange={setDate}
          />
        </TouchableOpacity>
        <View style={{top: 10}}>
          {error?.dob && (
            <Text
              style={{
                color: 'red',
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: 5,
              }}>
              {error?.dob}
            </Text>
          )}
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 20,
            marginTop: 10,
          }}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            // onFillColor='red'
            // onCheckColor='red'
            // tintColor='#FFFF'
            tintColors={{true: 'purple', false: 'lightgrey'}}
          />
          <Text style={{color: 'black', marginLeft: 10}}>Under 18?</Text>
        </View>
        {/* <View style={{width:'90%',marginHorizontal:22,borderWidth:0.5,padding:5,borderRadius:5,marginTop:10,}}>
          <Text style={{fontSize:16,fontWeight:'bold'}}>Note<Text style={{fontSize:14,fontWeight:'400'}}> : You must be 18 years or above to use this app , otherwise you wont be able to signup</Text> </Text>
        </View> */}

        <View
          style={{marginTop: 0, zIndex: 9999, marginBottom: open2 ? 150 : 0}}>
          <DropDown
            placeholder={'Marital Status'}
            items={items2}
            open={open2}
            value={value2}
            setOpen={setOpen2}
            setValue={setValue2}
            setItems={setItems2}
            onPress={() => setOpen(false)}
            onChangeValue={valuee => {
              console.log(valuee, 'value222222');
              setDrop2(valuee);
            }}
          />
        </View>
        <View style={{}}>
          {error?.drop2 && (
            <Text
              style={{
                color: 'red',
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 10,
              }}>
              {error?.drop2}
            </Text>
          )}
        </View>
        
        <View
          style={{
            height: 50,
            width: '90%',
            backgroundColor: 'transparent',
            alignSelf: 'center',

            borderRadius: 10,
            // paddingLeft: 10,
            // paddingRight: 5,
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: 'lightgrey',
            marginTop: 40,
          }}>
          <TextInput
            style={{
              fontSize: 16,
              color: Color.systemBlack,
              zIndex: 1,
              marginLeft: 5,
            }}
            placeholder=" Email"
            placeholderTextColor={'lightgrey'}
            placeholderStyle={{}}
            value={email}
            keyboardType='email-address'
            onChangeText={value => setEmail(value)}
          />
        </View>
        {error?.email && (
          <Text
            style={{
              color: 'red',
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 10,
            }}>
            {error?.email}
            
          </Text>
        )}
        {emailverify==true && (
          <Text
            style={{
              color: 'red',
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 10,
            }}>
           {emailverify==true?"Email already exist*":null}
            
          </Text>
        )}

        <View
          style={{
            height: 55,
            width: '90%',
            backgroundColor: 'transparent',
            alignSelf: 'center',

            borderRadius: 10,
            // paddingLeft: 10,
            // paddingRight: 5,
            borderWidth: 1,
            borderColor: 'lightgrey',
            marginTop: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TextInput
            style={{fontSize: 16, color: Color.systemBlack, width: '85%'}}
            placeholder=" Password"
            placeholderTextColor={'lightgrey'}
            placeholderStyle={{}}
            value={password}
            onChangeText={value => setPassword(value)}
            secureTextEntry={securetextentry}
          />

          {/* {password != '' ? */}
          <View style={{justifyContent: 'center'}}>
            {/* <Ionicons
                            name={securetextentry ? 'eye-off' : 'eye'}
                            color={Colors.white}
                            size={20}
                            style={{  marginRight: 10 }}
                            onPress={() => setSecuretextentry(!securetextentry)}
                        /> */}
            <Feather
              name={securetextentry ? 'eye-off' : 'eye'}
              size={18}
              color={Colors.purple}
              style={{marginRight: 10}}
              onPress={() => setSecuretextentry(!securetextentry)}
            />
          </View>
          {/* : null} */}
        </View>
        {error?.password && (
          <Text
            style={{
              color: 'red',
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 10,
            }}>
            {error?.password}
          </Text>
        )}
        <View
          style={{
            height: 55,
            width: '90%',
            backgroundColor: 'transparent',
            alignSelf: 'center',

            borderRadius: 10,
            // paddingLeft: 10,
            // paddingRight: 5,
            borderWidth: 1,
            borderColor: 'lightgrey',
            marginTop: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TextInput
            style={{fontSize: 16, color: Color.systemBlack, width: '85%'}}
            placeholder=" Confirm Password"
            placeholderTextColor={'lightgrey'}
            placeholderStyle={{}}
            value={cpassword}
            onChangeText={value => setCPassword(value)}
            secureTextEntry={securetextentry1}
          />
          {/* {cpassword != '' ? */}
          <View style={{justifyContent: 'center'}}>
            {/* <Ionicons
                            name={securetextentry ? 'eye-off' : 'eye'}
                            color={Colors.white}
                            size={20}
                            style={{  marginRight: 10 }}
                            onPress={() => setSecuretextentry(!securetextentry)}
                        /> */}
            <Feather
              name={securetextentry1 ? 'eye-off' : 'eye'}
              size={18}
              color={Colors.purple}
              style={{marginRight: 10}}
              onPress={() => setSecuretextentry1(!securetextentry1)}
            />
          </View>
          {/* : null} */}
        </View>
        {error?.cpassword && (
          <Text
            style={{
              color: 'red',
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 10,
            }}>
            {error?.cpassword}
          </Text>
        )}

        {/* <View style={{ alignSelf: 'center' }}>
          <Text
            style={{
              color: 'lightgrey',
              fontSize: 16,
              marginTop: 10,
              fontFamily: FontFamily.poppinsSemibold,
            }}>
            ------------------ or create using -----------------
          </Text>
        </View> */}

        {/* <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Image
            style={{ width: '15%', height: 35 }}
            resizeMode="contain"
            source={require('../../../assets/google.png')}
          />
          <Image
            style={{ width: '15%', height: 35 }}
            resizeMode="contain"
            source={require('../../../assets/facebook.png')}
          />

          <Image
            style={{ width: '15%', height: 35 }}
            resizeMode="contain"
            source={require('../../../assets/apple-logo.png')}
          />
        </View> */}
        <View style={{alignSelf: 'center', width: 350}}>
          <Text
            style={{
              color: 'black',
              fontSize: 12,
              marginTop: 15,
              textAlign: 'center',
              fontFamily: FontFamily.poppinsSemibold,
            }}>
            By signing up to you account, you are agree to our{' '}
            <Text style={{fontWeight: 'bold'}}>Privacy & Policy</Text> and{' '}
            <Text style={{fontWeight: 'bold'}}>Terms & Conditions.</Text>
          </Text>
        </View>

        <LinearGradient
          style={styles.buttons}
          locations={[0, 1]}
          colors={['#bf6bbb', '#716eaa']}
          useAngle={true}
          angle={180}>
          <Pressable
            style={[styles.pressable, styles.buttonFlexBox]}
            onPress={onSignUp}
            // onPress={emailchecker}
            >
            <View style={[styles.button, styles.buttonFlexBox]}>
              <Text style={styles.button1}>Sign Up</Text>
            </View>
          </Pressable>
        </LinearGradient>

        <View style={{alignSelf: 'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                marginTop: 10,
                fontFamily: FontFamily.poppinsSemibold,
              }}>
              Have an account?{' '}
              <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
                Sign In
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{alignSelf: 'center', marginTop: 15}}>
          <Text style={{color: 'black'}}>
            Powered by{' '}
            <Text style={{color: 'black', fontWeight: '500', fontSize: 12}}>
              NTAM Group
            </Text>
          </Text>
        </View>
        <View style={{marginTop: 10}}></View>
      </View>
    </ScrollView>
  );
};

export default Signup;
const styles = StyleSheet.create({
  checkbox: {
    alignSelf: 'center',
  },
  pressable: {
    borderRadius: Border.br_47xl,
    height: '100%',
    backgroundColor: 'transparent',
    width: '100%',
  },
  buttons: {
    height: 45,
    marginTop: 20,
    width: 343,
    borderRadius: 40,
    alignSelf: 'center',
  },
  buttonFlexBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button1: {
    fontSize: FontSize.size_base,
    fontWeight: '600',
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.labelColorDarkPrimary,
    textAlign: 'center',
    lineHeight: 20,
  },
  button: {
    alignSelf: 'stretch',
    paddingHorizontal: Padding.p_98xl,
    paddingVertical: 0,
    flex: 1,
  },
});
