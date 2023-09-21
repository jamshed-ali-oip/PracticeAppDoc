import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';
import LinearGradient from 'react-native-linear-gradient';
import { Color, FontFamily, FontSize, Padding } from '../../../GlobalStyles';
import { useDispatch } from 'react-redux';
import { Questions } from '../../redux/actions/user.action';

const Question3 = ({ navigation, route }) => {
  const mainId = route?.params;

  const handleBackButton = () => {
    navigation.goBack();
  };

  const [sawal, setsawal] = useState();
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
    const filteredDropdownQuestions = sawal?.[0].questions.filter(
      (question) => question.type === 'Dropdown'
    );
    setDropdownQuestions(filteredDropdownQuestions);
    if(filteredDropdownQuestions?.length==0){
      navigation?.navigate('Question6', { data: mainId?.data });
    }
  }, [sawal]);

  const handleButtonClick = () => {
    // Check if there are more questions to display
    if (currentIndex < dropdownQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Handle when all questions have been displayed
      navigation?.navigate('Question6', { data: mainId?.data });
    }
  };

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <View style={{ width: '98%' }}>
          <View style={{ marginTop: 20, marginLeft: 20 }}>
            <TouchableOpacity onPress={handleBackButton}>
              <Ionicons name="arrow-back" size={25} color={Colors.purple} />
            </TouchableOpacity>
          </View>
          <View style={{ width: '99%' }}>
            <View style={{ marginTop: 15, marginLeft: 20 }}>
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
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      marginTop: 20,
                      color: 'black',
                      width: '90%',
                      alignSelf: 'center',
                    }}>
                    {question.question}
                  </Text>
                  {question?.options.map((option, ind) => (
                    <CustomDropDown
                      key={ind}
                      options={option.sub_options}
                      selectedValue={null} // You can set the selected value here
                      subQuestion={option.sub_question} // Pass the sub-question here
                    />
                  ))}
                </View>
              )
            ))}
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
          <View style={{ marginTop: 20 }}></View>
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
  },
  buttons: {
    height: 47,
  },
  pressable: {
    borderRadius: 47, // Adjust this value if needed
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

const CustomDropDown = ({ options, selectedValue, subQuestion }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(selectedValue);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownSelect = (item) => {
    setValue(item);
    setIsOpen(false);
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 13.5,
          fontWeight: '600',
          marginTop: 30,
          color: 'black',
          marginLeft: 20,
        }}>
        {subQuestion}
      </Text>
      <TouchableOpacity
      
      onPress={toggleDropdown} style={{
        backgroundColor:"white",
        width: '90%',
        height: 50,
        alignSelf:"center",
        // alignItems: 'center',
        justifyContent: 'center',
        borderRadius:10,
        paddingLeft:15,
        borderWidth:1,
        marginTop:10,
        borderColor:"#e4e4e4",
      }}>
        <Text style={{
          color:value?"black":"#b3b3b3",
          fontSize:14
        }}>
          {value || 'Select Answer'}
        </Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={{}}>
          {options.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleDropdownSelect(item)}
              style={{
                backgroundColor:"white",
                width: '90%',
                height: 50,
                alignSelf:"center",
                // alignItems: 'center',
                justifyContent: 'center',
                // borderRadius:10,
                paddingLeft:15,
                // borderWidth:1,
                // marginTop:10,
                borderColor:"#e4e4e4",
              }}>
              <Text
              style={{
                color:"#b3b3b3",
                fontSize:14
              }}
              >{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default Question3;
