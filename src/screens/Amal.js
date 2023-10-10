import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Button,
    Linking
  } from 'react-native';
  import React, {useState, useCallback, useRef, useEffect} from 'react';
  import LinearGradient from 'react-native-linear-gradient';
  
  import {useNavigation} from '@react-navigation/native';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import {Color} from '../../GlobalStyles';
  import Colors from '../constants/Colors';
  import {GiftedAmal,Bubble,Time} from 'react-native-gifted-Amal';
  
  const Amal = ({navigation}) => {

    const  data=[
        {
            id:1,
            image:require("../../assets/relax/1.png"),
            link:"https://www.youtube.com/watch?v=ZToicYcHIOU"
        },
        {
            id:2,
            image:require("../../assets/relax/2.png"),
            link:"https://www.youtube.com/watch?v=ZToicYcHIOU"
        },
        {
            id:3,
            image:require("../../assets/relax/3.png"),
            link:"https://www.youtube.com/watch?v=ZToicYcHIOU"
        },
        {
            id:4,
            image:require("../../assets/relax/4.png"),
            link:"https://www.youtube.com/watch?v=ZToicYcHIOU"
        },
    ]
  
    return (
      <>
     
        <View style={{}}>
          {/* <Text style={{color:'white',fontFamily:Fonts.bold,fontSize:20,marginTop:10,marginLeft:20}}>Amal</Text> */}
  
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
                Amal
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
         
          {/* <View style={{flex: 0.5, backgroundColor: 'red'}}> */}
        </View>
        <ScrollView>
            <View>
                <Text
                style={styles.head}
                >
                    Please Choose the Path to Relax
                </Text>
            
            <View>
                {data?.map((i)=>{
                    return(
                        <TouchableOpacity
                        onPress={()=>{Linking.openURL(i?.link)}}
                        style={{alignSelf:"center"}}>
                            <Image
                            style={{resizeMode:"contain"}}
                            source={i?.image}
                            />
                        </TouchableOpacity>
                    )
                })}
            </View>
            </View>

        </ScrollView>
      </>
    );
  };
  
  export default Amal;
  
  const styles = StyleSheet.create({
    head:{
        color:"#9a5ab1",
        fontSize:20,
        fontWeight:"800",
        alignSelf:"center"
    },

  });
  