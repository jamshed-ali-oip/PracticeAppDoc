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
  import React, {useState} from 'react';
  import LinearGradient from 'react-native-linear-gradient';
  
  import {useNavigation} from '@react-navigation/native';
  import Ionicons from 'react-native-vector-icons/Ionicons';
import { Color } from '../../GlobalStyles';
import Colors from '../constants/Colors';
  
  const Chat = ({}) => {
    const navigation = useNavigation();
    const [index, setIndex] = useState(0);
  
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
              justifyContent:'space-between'
             
             
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                style={{marginLeft:20}}
                name="arrow-back"
                size={25}
                color={Color.purple}
              />
</TouchableOpacity>

              <View style={{}}>
                  <Text style={{color:Colors.purple,fontSize:17,fontWeight:'bold',marginRight:20}}>Kalyana</Text>
              </View>

              
              

              <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
              display='none'
                style={{marginRight:20}}
                name="arrow-back"
                size={25}
                color={Color.purple}
              />
</TouchableOpacity>
            
  
           
          </View>
  
  
  
          {/* <View style={{flex: 0.5, backgroundColor: 'red'}}> */}
            <ScrollView>
              <View>
               <View style={{alignItems:'center',justifyContent:'center',backgroundColor:'#BF6BBB',height:60,width:'60%',alignSelf:'flex-end',marginRight:10,borderTopLeftRadius:20,borderTopRightRadius:20,borderBottomLeftRadius:20}}>
                   <Text style={{color:'white'}}>Hey. Do you have an antidote for a cancer patient</Text>
                   </View>
                   <View style={{alignItems:'center',justifyContent:'center',backgroundColor:'#E6E5EB',height:100,width:'65%',marginLeft:10,borderTopLeftRadius:20,borderTopRightRadius:20,borderBottomRightRadius:20,marginTop:20}}>
                   <Text style={{color:'black',}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                   </View>
                   
              </View>
            </ScrollView>
            
          </View>
  
          <View
            style={{
              height: 50,
            
              width: '100%',
            
              position:'absolute',
              bottom:50,
           
            }}>
            {/* <Text style={{color:'white',fontFamily:Fonts.medium,fontSize:20}}>Type a message</Text> */}
            <View
              style={{
                height: 50,
                width: '90%',
                backgroundColor: 'transparent',
                alignSelf: 'center',
                
                borderRadius: 20,
                paddingLeft: 10,
                paddingRight: 5,
                borderWidth: 1,
                borderColor: '#C8C8CC',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TextInput
                style={{
                  fontSize: 16,
                  color: '#C8C8CC',
                //   fontFamily: Fonts.light,
                  marginTop: 5,
                  width:'80%'

                }}
                placeholder=" Type here.."
                placeholderTextColor={'#C8C8CC'}
                // placeholderTextColor={'white'}
                placeholderStyle={{}}
  
                // value={fullname}
                // onChangeText={value => setFullname(value)}
                // onTouchStart={()=>setIndex(1)}
              />
  
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons
                  style={{marginRight: 20}}
                  name="send"
                  size={20}
                  color={'#C8C8CC'}
                />
              </TouchableOpacity>
  
              {/* <Text style={{zIndex:999}}>HAMMADD</Text> */}
  
              {/* <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Ionicons
              style={{marginLeft:10}}
              name="arrow-back"
              size={25}
              color={'white'}
            />
            </TouchableOpacity> */}
            </View>
          </View>
        {/* </View> */}
        {/* // </ScrollView> */}
      </>
    );
  };
  
  export default Chat;
  
  const styles = StyleSheet.create({});