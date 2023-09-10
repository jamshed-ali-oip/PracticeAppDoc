import React, { useState, useEffect } from 'react';
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
import { useDispatch } from 'react-redux';
// import {firstform} from '../../redux';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import Colors from '../../constants/Colors';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { UpdateProfile } from '../../redux/actions/user.action';


const EditProfile = ({ navigation }) => {
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
  console.log(dob, '====dob')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [cpassword, setCPassword] = useState('');
  const [passerror, setPasserror] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [gender, setGender] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Prefer not to say', value: 'prefer' },
  ]);

  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    { label: 'Single', value: 'Single' },
    { label: 'Married', value: 'Married' },
    { label: 'Divorced', value: 'Divorced' },
    { label: 'Prefer not to say', value: 'prefer' },
  ]);
  const [error, setError] = useState(null)
  const [securetextentry, setSecuretextentry] = useState(true)
  const [securetextentry1, setSecuretextentry1] = useState(true)


  useEffect(() => {
    setDatePlaceholder('Date of birth');
  }, []);

  const handleBackButton = () => {
    navigation.goBack();
  };

  const updateProfile=async()=>{
    const body={
        first_name : firstname,
        last_name : lastname,
        dob : dob,
        email : email, //Can be blank
        password : password //Can be blank
    }
    dispatch(UpdateProfile(body,navigation))
  }

  return (
    <View style={{ flex: 1, backgroundColor: Colors.backgroundColor }}>
      <ScrollView>
        <View style={{}}>
          <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ marginLeft: 20, }}>
              <TouchableOpacity onPress={handleBackButton}>
                <Ionicons
                  name='arrow-back'
                  size={25}
                  color={Colors.purple} />
              </TouchableOpacity>
            </View>
            <View style={{ marginHorizontal: '30%' }}><Text style={{ color: Colors.purple, fontSize: 20, fontWeight: 'bold' }}>Edit Profile</Text></View>
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
              height: 55,
              width: '90%',
              backgroundColor: 'transparent',
              alignSelf: 'center',

              borderRadius: 10,
              // paddingLeft: 10,
              // paddingRight: 5,
              borderWidth: 1,
              borderColor: 'lightgrey',
              marginTop: 20,
            }}>
            <TextInput
              style={{ fontSize: 16, color: Color.systemBlack }}
              placeholder=" First Name"
              placeholderTextColor={'lightgrey'}
              placeholderStyle={{}}
              value={firstname}
              onChangeText={value => setFisrtname(value)}
            />
          </View>
          {error?.firstname && <Text style={{ color: 'red', fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>{error?.firstname}</Text>}

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
            }}>
            <TextInput
              style={{ fontSize: 16, color: Color.systemBlack,  }}
              placeholder=" Last Name"
              placeholderTextColor={'lightgrey'}
              placeholderStyle={{}}
              value={lastname}
              onChangeText={value => setLastname(value)}
            />
          </View>
          {error?.lastname && <Text style={{ color: 'red', fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>{error?.lastname}</Text>}
          <TouchableOpacity
            onPress={() => {
              setOpen(true);
              setDatePlaceholder('');
            }}
            style=
            {{
              height: 55,
              width: '90%',
              backgroundColor: 'transparent',
              alignSelf: 'center',

              borderRadius: 10,
              // paddingLeft: 10,
              // paddingRight: 5,
              borderWidth: 1,
              borderColor: 'lightgrey',
              marginTop: 20,
            }}
          >
            <View style={{ top: 10, left: 10 }}>
              <Text style={{ fontSize: 16, marginTop: 5, color: dob === '' ? 'lightgrey' : 'black' }}>
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
                const a = moment(date).format('DD-MM-YYYY')
                setDob(a)
              }}
              onCancel={() => {
                setOpen(false);
              }}
              mode="date"
              onDateChange={setDate}
            />
          </TouchableOpacity>
          <View style={{ top: 10, }}>
            {error?.dob && <Text style={{ color: 'red', fontWeight: 'bold', textAlign: 'center', marginBottom: 5 }}>{error?.dob}</Text>}
          </View>
        
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
              marginTop: 20,
            }}>
            <TextInput
              style={{ fontSize: 16, color: Color.systemBlack }}
              placeholder=" Email"
              placeholderTextColor={'lightgrey'}
              placeholderStyle={{}}
              value={email}
              onChangeText={value => setEmail(value)}
            />
          </View>
          {error?.email && <Text style={{ color: 'red', fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>{error?.email}</Text>}

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
              flexDirection: 'row', justifyContent: 'space-between'
            }}>
            <TextInput
              style={{ fontSize: 16, color: Color.systemBlack, width: '85%' }}
              placeholder=" Password"
              placeholderTextColor={'lightgrey'}
              placeholderStyle={{}}
              value={password}
              onChangeText={value => setPassword(value)}
              secureTextEntry={securetextentry}
            />

            
            <View style={{ justifyContent: 'center' }}>
             
              <Feather name={securetextentry ? 'eye-off' : 'eye'} size={18} color={Colors.purple}
                style={{ marginRight: 10 }}
                onPress={() => setSecuretextentry(!securetextentry)}
              />
            </View>
            

          </View>
          <Text style={{ color: 'red', fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>{error}</Text>


          
        </View>
      </ScrollView>
      <View style={{ width: '80%', height: '5%', alignSelf: 'center', marginBottom: 10, }}>
        <LinearGradient
          style={{ borderRadius: 20 }}
          locations={[0, 1]}
          colors={['#bf6bbb', '#716eaa']}
          useAngle={true}
          angle={180}>
          <Pressable
            onPress={()=>{updateProfile()}}
            style={[styles.pressable, styles.buttonFlexBox]}
          >
            <View style={[styles.button, styles.buttonFlexBox]}>
              <Text style={styles.button1}>Update</Text>
            </View>
          </Pressable>
        </LinearGradient>
      </View>
    </View>
  );
};

export default EditProfile;
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
