import React, {useState,useEffect} from 'react';
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
import DropDown from '../../components/DropDown';
import { useDispatch } from 'react-redux';
import { Questions } from '../../redux/actions/user.action';

const Question3 = ({navigation, route}) => {
  const mainId = route?.params;
  console.log('object', mainId?.data);

  const handleBackButton = () => {
    navigation.goBack();
  };
  console.log('^^^^^^^66666666', mainId?.data);
  const [sawal, setsawal] = useState();
  const [multipleChoiceQuestions, setMultipleChoiceQuestions] = useState([]);
  const [checkboxQuestions, setCheckboxQuestions] = useState([]);
  const [dropdownQuestions, setDropdownQuestions] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    Questionss();
  }, []);
  const dispatch = useDispatch();
  const Questionss = async () => {
    const data = await dispatch(Questions(mainId?.data));
    // console.log(
    //   'Ques##################',
    //   JSON?.stringify(data?.data?.data?.[0]?.questions?.[0]?.question),
    // );
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
  }, [sawal]);
  console.log('dropRRRRR', dropdownQuestions);
  console.log(
    '=========================================================================',
  );
  
  const handleButtonClick = () => {
    // Check if there are more questions to display
    if (currentIndex < dropdownQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Handle when all questions have been displayed
      // alert('No more questions 3');
      navigation?.navigate("Question6",{data:mainId?.data});
    }
  };
  console.log('=======================', JSON.stringify(sawal?.[0]));
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Yes, Limited a lot', value: 'Yes, Limited a lot'},
    {label: 'Yes, Limited a little', value: 'Yes, Limited a little'},
    {label: 'No, Not limited at all', value: 'No, Not limited at all'},
  ]);

  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <View style={{width: '98%'}}>
          <View style={{marginTop: 20, marginLeft: 20}}>
            <TouchableOpacity onPress={handleBackButton}>
              <Ionicons name="arrow-back" size={25} color={Colors.purple} />
            </TouchableOpacity>
          </View>
          <View style={{width: '99%'}}>
            <View style={{marginTop: 15, marginLeft: 20}}>
              <Text
                style={{
                  color: Colors.purple,
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                Question 
              </Text>
             
            </View>
            {dropdownQuestions?.map((question, index) => (
        index === currentIndex && (
          <View key={index}>
            {/* <Text
            style={{color:"red"}}
            >
              Question {currentIndex + 1}: {question.question}
            </Text> */}
              <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              marginTop: 20,
              color: 'black',
              width:"90%",
              alignSelf:"center"
            }}>
            {question.question}
          </Text>
             
          {question?.options.map((i,ind)=>(
          <>
            <Text  style={{
                  fontSize: 13.5,
                  fontWeight: '600',
                  marginTop: 30,
                  color: 'black',
                  marginLeft: 20,
                }}>{i?.sub_question}</Text>
             <DropDown
                style={{}}
                placeholder={'Select Answer'}
                items={i?.sub_options?.map((option) => ({
                  label: option,
                  value: option,
                }))}
                open={open}
                value={value}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                onPress={() => {
                 
                 
                }}
              /></>
          ))}
          </View>
        )
      ))}
            {/* <View>
              <Text
                style={{
                  fontSize: 13.5,
                  fontWeight: '600',
                  marginTop: 30,
                  color: 'black',
                  marginLeft: 20,
                }}>
                a. Vigorous activities, such as running, lifting heavy objects,
                participating in strenuous sports
              </Text>
            </View> */}
            {/* <View style={{marginTop: 5}}>
              <DropDown
                style={{}}
                placeholder={'Select Answer'}
                items={items}
                open={open}
                value={value}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                onPress={() => {
                  // setOpen1(false);
                 
                }}
              />
            </View> */}
          </View>

          <LinearGradient
            style={[styles.buttons, styles.buttonsPosition]}
            locations={[0, 1]}
            colors={['#bf6bbb', '#716eaa']}
            useAngle={true}
            angle={180}>
            <TouchableOpacity
              style={[styles.pressable, styles.parentFlexBox]}
              onPress={() => handleButtonClick()}>
              <View>
                <Text style={styles.button1}>Next</Text>
              </View>
            </TouchableOpacity>
          </LinearGradient>
          <View style={{marginTop: 20}}></View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonsPosition: {
    borderRadius: 40,
    width: 343,
    alignSelf: 'center',
    marginTop: 50,
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

export default Question3;
