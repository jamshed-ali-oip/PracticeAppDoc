import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {
  Color,
  FontFamily,
  Border,
  FontSize,
  Padding,
} from '../../../GlobalStyles';
import CheckBox from '@react-native-community/checkbox';
import {useDispatch, useSelector} from 'react-redux';
import {fourthform} from '../../redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ScrollView} from 'react-native-gesture-handler';
import {Register} from '../../redux/actions/user.action';

const Acknowledgement = ({navigation}) => {
  const dispatch = useDispatch();
  // const {formone,formtwo,formthree,formfour}  = useSelector(state=>state.signup)

  // console.log(formone,'=======from1')
  // console.log(formtwo,'=======from2')
  // console.log(formthree,'=======from3')
  // console.log(formfour,'=======from4')

  const data = useSelector(state => state?.auth);
  // console.log("++++++++++++++++++++++object", data)
  const [sig, setSig] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleCheckBox1, setToggleCheckBox1] = useState(true);
  const [loading, setloading] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState('');

  const handleBackButton = () => {
    navigation.goBack();
  };
  console.log(sig, 'signature');
  console.log(toggleCheckBox, 'toggleCheckBox');
  console.log(toggleCheckBox1, 'toggleCheckBox1');

  const onNext = () => {
    if (sig == '' || toggleCheckBox == false) {
      setError('Your acknowledgement is required');
    } else {
      onComplete();
    }

    // onComplete();
  };

  // const onComplete = async () => {
  //   const body = {
  //     // ...formone,
  //     // ...formtwo,
  //     // ...formthree,
  //     // signature: sig,
  //     // privacy_policy: toggleCheckBox,
  //     // send_agreement_to_email: toggleCheckBox1
  //   }
  //   // console.log(body, '==body')
  //   // await fetch('http://3.87.229.85:8080/appuser/register', {
  //   //   method: 'POST',
  //   //   headers: {
  //   //     'Content-Type': 'application/json',
  //   //     'Accept': 'application/json'
  //   //   },
  //   //   body: JSON.stringify(body)
  //   // })
  //   //   .then(response => response.json())
  //   //   .then(responseJson => {
  //   //     console.log('heloooo')
  //   //     console.log(responseJson)
  //   //     if (responseJson?.success === 1) {
  //   //       console.log(responseJson?.success, 'responseJson?.sucess')
  //   //       console.log(responseJson?.activation_token, 'responseJson?.activation_token')
  //   //       AsyncStorage.setItem('token', responseJson?.activation_token)
  //   //       // setModalVisible(true);
  //   //       navigation.navigate('VerifyEmail')

  //   //     }
  //   //     else {
  //   //       // alert(responseJson?.error)
  //   //       setError(responseJson?.error)
  //   //       console.log(responseJson?.error)
  //   //     }

  //   //   })
  //   //   .catch(error => {
  //   //     // alert('failed')

  //   //     return error;

  //   //   })
  //   navigation.navigate('VerifyEmail')
  // }
  const onComplete = () => {
    setloading(true);
    const body = {
      first_name: data?.formone?.first_name,
      last_name: data?.formone?.last_name,
      gender: data?.formone?.gender,
      dob: data?.formone?.dob,
      marital_status: data?.formone?.marital_status,
      email: data?.formone?.email,
      password: data?.formone?.password,
      user_type: data?.formtwo?.user_type,
      linguistic_prefrences: data?.formtwo?.linguistic_prefrences,
      education_level: data?.formtwo?.education_level,
      cancer_type: data?.formthree?.cancer_type,
      tumor_stage: data?.formthree?.tumor_stage,
      current_cancer_treatment: data?.formthree?.current_cancer_treatment,
      other_conditions: data?.formthree?.other_conditions,
      regular_checkup_reminders: data?.formthree?.regular_checkup_reminders,
      signature: sig,
      privacy_policy: toggleCheckBox,
      send_agreement_to_email: toggleCheckBox1,
      severity_of_symptoms: data?.formthree?.severity_of_symptoms,
      regular_doctors_appointments:
        data?.formthree?.regular_doctors_appointments,
    };
    // console.log("bodyyyyyyy",body)
    dispatch(Register(body, navigation, setloading));
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={{width: '95%', marginHorizontal: 20}}>
          <View style={{marginTop: 20, flexDirection: 'row'}}>
            <TouchableOpacity onPress={handleBackButton}>
              <Ionicons name="arrow-back" size={25} color={Colors.purple} />
            </TouchableOpacity>

            <View style={{}}>
              <Text
                style={{
                  color: Colors.purple,
                  fontWeight: 'bold',
                  fontSize: 20,
                  textAlign: 'center',
                  marginLeft: '20%',
                }}>
                Acknowledgement
              </Text>
            </View>
          </View>

          {/* <View>
          <Text style={{color: 'red', fontWeight: 'bold', textAlign: 'center',marginTop:10}}>{error !== '' ? error : ''}</Text>
          </View> */}

          <View style={{}}>
            {error && (
              <Text style={{color: 'red', fontWeight: 'bold'}}>{error}</Text>
            )}
          </View>
          <Text
            style={{
              color: Color.darkslategray_100,
              width: '90%',
              marginTop: 20,
            }}>
            By my signature, I acknowledge that I have read, understand, and I
            certify all information is true and correct to the best of my
            knowledge.
          </Text>
          <View style={{}}>
            <Text
              style={{
                color: Colors.purple,
                fontWeight: 'bold',
                fontSize: 20,
                marginTop: 20,
              }}>
              Signature
            </Text>
          </View>

          <View
            style={{
              width: '94%',
              height: 100,
              borderWidth: 1,
              borderColor: 'grey',
              marginTop: 10,
              borderRadius:10
            }}>
            <TextInput
              style={{fontSize: 16, color: 'black', marginTop: 5}}
              placeholder=" Enter Signature"
              placeholderTextColor={'black'}
              placeholderStyle={{}}
              value={sig}
              onChangeText={value => setSig(value)}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 0,
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
            <Text style={{color: 'black', fontSize: 12}}>
              {' '}
              I accept the Terms of Use and Privacy Policy
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 0,
              marginTop: 10,
            }}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox1}
              onValueChange={newValue => setToggleCheckBox1(newValue)}
              // onFillColor='red'
              // onCheckColor='red'
              // tintColor='#FFFF'
              tintColors={{true: 'purple', false: 'lightgrey'}}
            />
            <Text style={{color: 'black', fontSize: 12}}>
              {' '}
              Automatically send the signed agreement to my email
            </Text>
          </View>

          <LinearGradient
            style={[styles.buttons, styles.buttonsPosition]}
            locations={[0, 1]}
            colors={['#bf6bbb', '#716eaa']}
            useAngle={true}
            angle={180}>
            <TouchableOpacity
              style={[styles.pressable, styles.parentFlexBox]}
              onPress={onNext}>
              <View>
                <Text style={styles.button1}>
                  {loading == true ? (
                    <ActivityIndicator size={'small'} color="white" />
                  ) : (
                    'Complete'
                  )}
                </Text>
              </View>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View
            style={{
              backgroundColor: '#8BB561',
              height: 80,
              width: '90%',
              justifyContent: 'center',
              alignSelf: 'center',
              position: 'absolute',
              bottom: 40,
              borderRadius: 10,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons
                style={{marginLeft: 20}}
                name="checkmark-circle"
                size={65}
                color={'white'}
              />

              <View style={{}}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 12,
                    textAlign: 'center',
                  }}>
                  You have successfully created an account
                </Text>
              </View>
            </View>
          </View>
        </Modal>
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
    marginTop: 30,
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

export default Acknowledgement;
