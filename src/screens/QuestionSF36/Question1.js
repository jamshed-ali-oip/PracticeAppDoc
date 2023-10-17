import React, {useEffect, useState} from 'react';
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
import {useDispatch} from 'react-redux';
import {Questions} from '../../redux/actions/user.action';

const Question1 = ({navigation, route}) => {
  const mainId = route?.params;
  console.log('^^^^^^^66666666', mainId?.data);
  const [sawal, setsawal] = useState();
  const [multipleChoiceQuestions, setMultipleChoiceQuestions] = useState([]);
  const [checkboxQuestions, setCheckboxQuestions] = useState([]);
  const [dropdownQuestions, setDropdownQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    Questionss();
    
  }, []);
  const dispatch = useDispatch();
  const Questionss = async () => {
    const data = await dispatch(Questions(mainId?.data));
    setsawal(data?.data?.data);
  };
  useEffect(() => {
    // Filter questions by type and update state variables
    const filteredMultipleChoiceQuestions = sawal?.[0].questions.filter(
      question => question.type === 'Multiple Choice',
    );
    setMultipleChoiceQuestions(filteredMultipleChoiceQuestions);

    const filteredCheckboxQuestions = sawal?.[0].questions.filter(
      question => question.type === 'Checkboxes',
    );
    setCheckboxQuestions(filteredCheckboxQuestions);

    const filteredDropdownQuestions = sawal?.[0].questions.filter(
      question => question.type === 'Dropdown',
    );
    setDropdownQuestions(filteredDropdownQuestions);
    if(filteredCheckboxQuestions?.length==0){
      navigation?.navigate("Question3",{data:mainId?.data});
    }
  }, [sawal]);
 
  const handleButtonClick = () => {
    // Check if there are more questions to display
    if (currentIndex < checkboxQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Handle when all questions have been displayed
      // alert('No more questions');
      navigation?.navigate("Question3",{data:mainId?.data});
    }
  };
  const data = [
    {
      label: 'Excellent',
    },
    {
      label: 'Very Good',
    },
    {
      label: 'Good',
    },
    {
      label: 'Poor',
    },
  ];
 
  console.log("msadfklygsajfshdoas",checkboxQuestions?.length)
  const handleBackButton = () => {
    navigation.goBack();
  };
  const sno = checkboxQuestions?.length;
  console.log("=============",sno)
  return (
    <View style={{flex: 1}}>
      <View style={{width: '100%', marginHorizontal: 20}}>
        <View style={{marginTop: 20}}>
          <TouchableOpacity onPress={handleBackButton}>
            <Ionicons name="arrow-back" size={25} color={Colors.purple} />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 15}}>
          <Text
            style={{color: Colors.purple, fontWeight: 'bold', fontSize: 20}}>
            Question 
          </Text>
          {/* <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              marginTop: 20,
              color: 'black',
            }}>
            {SQ}
          </Text> */}
        </View>

      
 <View>
      {checkboxQuestions?.map((question, index) => (
        index === currentIndex && (
          <View key={index}>
            {/* <Text
            style={{color:"red"}}
            >
              Question {currentIndex + 1}: {question.question}
            </Text> */}
              <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              marginTop: 20,
              color: 'black',
            }}>
            {question.question}
          </Text>
              <View style={{marginTop: 10}}>
          <RadioButtonRN
            activeColor={'transparent'}
              deactiveColor={'transparent'}
            box={true}
            boxStyle={{height: 80, width: '90%'}}
            data={question?.options.map((option) => ({
              label: option,
              value: option,
            }))}
            // selectedBtn={(e) => console.log(e)}
            boxActiveBgColor={'#BF6BBB'}
            textColor={'black'}
          />
        </View>
            <LinearGradient
          style={[styles.buttons, styles.buttonsPosition]}
          locations={[0, 1]}
          colors={['#bf6bbb', '#716eaa']}
          useAngle={true}
          angle={180}>
          <TouchableOpacity
            style={[styles.pressable, styles.parentFlexBox]}
            // onPress={() => navigation.navigate("Question2")}
            onPress={() => {
              handleButtonClick()
            }}>
            <View>
              <Text style={styles.button1}>Next</Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
          </View>
        )
      ))}
    </View>
        {/* <LinearGradient
          style={[styles.buttons, styles.buttonsPosition]}
          locations={[0, 1]}
          colors={['#bf6bbb', '#716eaa']}
          useAngle={true}
          angle={180}>
          <TouchableOpacity
            style={[styles.pressable, styles.parentFlexBox]}
            // onPress={() => navigation.navigate("Question2")}
            onPress={() => {
              handleButtonClick()
            }}>
            <View>
              <Text style={styles.button1}>Next</Text>
            </View>
          </TouchableOpacity>
        </LinearGradient> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsPosition: {
    borderRadius: 40,
    width: 343,
    //   alignSelf:'center',
    marginTop: 20,
    // position:'absolute',
  },
  buttons: {
    // top: '165%',
    height: 47,
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

export default Question1;
