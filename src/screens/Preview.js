import {StyleSheet, Text, View, ScrollView,TouchableOpacity,Image,Dimensions} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Color } from '../../GlobalStyles';
const Preview = ({navigation, route}) => {
  const {height,width}=Dimensions.get("window")
  const data = route?.params?.data;

  console.log("data",data)
  return (
    <ScrollView>
      <View style={{}}>
        <View
          style={{marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
          <View style={{marginLeft: 20}}>
            <TouchableOpacity 
            onPress={()=>{navigation?.goBack()}}
            >
              <Ionicons name="arrow-back" size={25} color={Colors.purple} />
            </TouchableOpacity>
          </View>
          <View style={{marginHorizontal: '30%'}}>
            <Text
              style={{color: Colors.purple, fontSize: 20, fontWeight: 'bold'}}>
              {data.article_type?.toUpperCase()}
            </Text>
          </View>
        </View>
        <Text
        style={{
            color: Color.darkslategray_200,
            fontSize: 18,
            fontWeight: 'bold',
            // textAlign: 'center',
            marginTop: 20,
            marginLeft:35
        }}
        >{data?.title}</Text>
        <Image
        style={{width:width*0.85,height:height*0.3,resizeMode:"contain",alignSelf:"center",marginTop:10,
     }}
        source={{uri:data?.media_url}}
        />
        <Text
        style={{
            width:width*0.85,
            alignSelf:"center",
            marginTop:10,
            color:Color.darkslategray_100,
            
        }}
        >{data?.description}</Text>
      </View>
    </ScrollView>
  );
};

export default Preview;

const styles = StyleSheet.create({});
