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
import DropDown from '../../components/DropDown';
import {useDispatch} from 'react-redux';
import {Questions} from '../../redux/actions/user.action';

const Question6 = ({navigation, route}) => {
  const mainId = route?.params;
  console.log('page ^^^^^^^^^^667776', mainId);

  const handleBackButton = () => {
    navigation.goBack();
  };
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
  console.log('multipleChoiceQuestions', multipleChoiceQuestions);
  console.log(
    '=========================================================================',
  );
  const handleButtonClick = () => {
    // Check if there are more questions to display
    if (currentIndex < multipleChoiceQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Handle when all questions have been displayed
      // alert('No more questions 6');
      navigation?.navigate("Done",{data:mainId?.data});
    }
  };

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Not at all', value: 'Not at all'},
    {label: 'Slightly', value: 'Slightly'},
    {label: 'Moderately', value: 'Moderately'},
    {label: 'Quite a bit', value: 'Quite a bit'},
    {label: 'Extremely', value: 'Extremely'},
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
          <View style={{marginTop: 15, marginLeft: 20, width: '90%'}}>
            <Text
              style={{color: Colors.purple, fontWeight: 'bold', fontSize: 20}}>
              Question 
            </Text>
           
            <View>
           
           
              {multipleChoiceQuestions?.map(
                (question, index) =>
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
                        <DropDown
                          dropDownContainerStyle={{
                            height: 30,
                          }}
                          style={{}}
                          placeholder={'Choose Answer'}
                          items={question?.options.map((option) => ({
                            label: option,
                            value: option,
                          }))}
                          open={open}
                          value={value}
                          setOpen={setOpen}
                          setValue={setValue}
                          setItems={setItems}
                          onPress={() => {
                            console.log('hi');
                          }}
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
                            handleButtonClick();
                          }}>
                          <View>
                            <Text style={styles.button1}>Next</Text>
                          </View>
                        </TouchableOpacity>
                      </LinearGradient>
                    </View>
                  ),
              )}
            </View>
          </View>

          <View style={{marginTop: 5}}></View>
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

export default Question6;
