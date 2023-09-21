import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
import React, {useState, useCallback, useRef, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Color} from '../../GlobalStyles';
import Colors from '../constants/Colors';
import {GiftedChat,Bubble,Time} from 'react-native-gifted-chat';

const Chat = ({navigation}) => {
  const [messages, setMessages] = useState([]);
  const [lastUserMessage, setLastUserMessage] = useState(null);

  const handleUserMessage = userMessage => {
    setLastUserMessage(userMessage);
  };

  useEffect(() => {
    if (lastUserMessage) {
      const response = generateResponse(lastUserMessage);
      const newMessage = {
        _id: messages.length + 1,
        text: response,
        createdAt: new Date(),
        user: {_id: 2, name: 'Kalyana'},
        // avatar:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
      };

      setMessages(prevMessages =>
        GiftedChat.append(prevMessages, [newMessage]),
      );
      setLastUserMessage(null); // Reset the last user message
    }
  }, [lastUserMessage, messages]);

  const onSend = useCallback((newMessages = []) => {
    setMessages(prevMessages => GiftedChat.append(prevMessages, newMessages));
    const userMessage = newMessages[0].text;
    handleUserMessage(userMessage);
  }, []);

  const generateResponse = userMessage => {
    // Extended rule-based responses
    let response = '';
    switch (userMessage.toLowerCase()) {
      case 'hello':
        response = 'Hello! How can I assist you?';
        break;
      case 'hi':
        response = 'Hello! How can I assist you?';
        break;
      case 'whats your name':
        response = 'my name is kalyana';
        break;
      case 'how are you?':
        response = "I'm just a bot, but I'm here to help!";
        break;
      // Add more cases for other questions here
      case 'who created you?':
        return 'I was created by a developer.';
      case 'what is the weather like today?':
        return 'I do not have access to real-time weather information.';
      case 'tell me a joke':
        return 'Why did the computer keep freezing? Because it left its Windows open!';
      case 'how old are you?':
        return "I don't have an age. I'm just a program.";
      case 'what is the meaning of life?':
        return 'The meaning of life is a philosophical question with no single answer.';
      case 'can you sing a song?':
        return 'I can generate text, but I cannot sing.';
      case 'tell me a fun fact':
        return 'Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.';
      case 'who won the World Series last year?':
        return 'I do not have access to real-time sports data.';
      case 'what is the capital of France?':
        return 'The capital of France is Paris.';
      case 'how do I make a pizza at home?':
        return 'To make a homemade pizza, you will need pizza dough, tomato sauce, cheese, and your choice of toppings. Roll out the dough, spread sauce, add cheese and toppings, and bake in the oven.';
      case 'tell me a riddle':
        return 'I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I? (Answer: Pencil lead)';
      case 'what is the square root of 144?':
        return 'The square root of 144 is 12.';
      default:
        response = 'I do not understand your question.';
    }
    return response;
  };

  return (
    <>
      {/* <ScrollView> */}
      <View style={{flex: 1}}>
        {/* <Text style={{color:'white',fontFamily:Fonts.bold,fontSize:20,marginTop:10,marginLeft:20}}>Chat</Text> */}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',

            height: 65,

            width: '100%',
            //   backgroundColor:'red',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              style={{marginLeft: 20}}
              name="arrow-back"
              size={25}
              color={Color.purple}
            />
          </TouchableOpacity>

          <View style={{}}>
            <Text
              style={{
                color: Colors.purple,
                fontSize: 17,
                fontWeight: 'bold',
                marginRight: 20,
              }}>
              Kalyana
            </Text>
          </View>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              display="none"
              style={{marginRight: 20}}
              name="arrow-back"
              size={25}
              color={Color.purple}
            />
          </TouchableOpacity>
        </View>
        <GiftedChat
         textInputProps={{
          style: {
            color: 'black',
            width:"85%" // Set your desired text color here
            // backgroundColor: 'yourBackgroundColor', // Set your desired background color here
          },
        }}
         renderBubble={props => {
          return (
            <Bubble
              {...props}
    
              textStyle={{
                right: {
                  color: 'white',
                  fontFamily: "CerebriSans-Book"
                },
                left: {
                  color: '#24204F',
                  fontFamily: "CerebriSans-Book"
                },
              }}
              wrapperStyle={{
                left: {
                  backgroundColor: '#E6E5EB',
                },
                right: {
                  backgroundColor: "#BF6BBB",
                },
              }}
            />
          );
        }}                
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{ _id: 1 }}
    />
        {/* <View style={{flex: 0.5, backgroundColor: 'red'}}> */}
      </View>

     
      {/* </View> */}
      {/* // </ScrollView> */}
    </>
  );
};

export default Chat;

const styles = StyleSheet.create({});
