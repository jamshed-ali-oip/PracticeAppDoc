import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../../constants/Colors';
import {
  Color,
  FontFamily,
  Border,
  FontSize,
  Padding,
} from '../../../GlobalStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Slider from '@react-native-community/slider';
import { useDispatch } from 'react-redux';
import { painscaleSet } from '../../redux/actions/user.action';

const PainScale = ({ navigation, route }) => {
  const name = route?.params
  console.log("my name", name?.data)
  const [painLevel, setPainLevel] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const dispatch=useDispatch()
  const send=()=>{
    const body={
      category: name?.data,
      scale:painLevel
    }
    console.log(body)
    dispatch(painscaleSet(body,navigation))
  }
  const painscale = [
    {
      id: 0,
      name: "No Pain"
    },
    {
      id: 1,
      name: null
    }, {
      id: 2,
      name: null
    }, {
      id: 3,
      name: null
    }, {
      id: 4,
      name: null
    }, {
      id: 5,
      name: "Distressing Pain"
    }, {
      id: 6,
      name: null
    }, {
      id: 7,
      name: null
    }, {
      id: 8,
      name: null
    }, {
      id: 9,
      name: null
    },
    {
      id: 10,
      name: "Unbearable Pain"
    },
  ]
  return (
    <View>
      <View style={{ marginTop: 10, width: '95%', marginHorizontal: 10, }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back-outline"
              size={24}
              color={Colors.purple}
              style={{}}
            />
          </TouchableOpacity>
          <View style={{ marginHorizontal: '33%' }}>
            <Text
              style={{ color: Colors.purple, fontWeight: 'bold', fontSize: 20 }}>
              Pain Scale
            </Text>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ fontWeight: 'bold', color: Colors.purple, fontSize: 20, }}>{name?.data?.toUpperCase()}<Text style={{color:"#c9c9c9",position:"absolute"}}>*</Text></Text>
        </View>
        <View
        style={{
          borderBottomColor:"#c9c9c9",borderBottomWidth:1,width:"100%"
        }}
        ></View>
        <View>
          <Text style={{ marginTop: 10, marginHorizontal: 5, marginBottom: 10,color:Color.dimgray_200 }}>
            Choose a number from 0 to 10 that best describes your pain
          </Text>
          <Slider
            style={{ width: '105', marginLeft: -5, }}
            minimumValue={0}
            maximumValue={10}
            step={1}
            minimumTrackTintColor={Colors.purple}
            thumbTintColor={Colors.purple}
            maximumTrackTintColor={Color.darkslategray_200}
            value={painLevel}
            onValueChange={(value) => setPainLevel(value)}
          />
          <View
            style={{ flexDirection: "row", marginHorizontal: 10, justifyContent: "space-between" }}
          >
            {
              painscale?.map((i) => {
                return (
                  <Text style={{color:Color.dimgray_100}}>{i?.id}</Text>
                )
              })
            }
          </View>
          <View
            style={{ flexDirection: "row", marginHorizontal: 10, justifyContent: "space-between" }}
          >
            <Text style={styles.painname}>No Pain</Text>
            <Text style={styles.painname}>Distressing Pain</Text>
            <Text style={styles.painname}>Unbearable Pain</Text>
          </View>
          {/* <View style={{ marginHorizontal: 10, }}>
            <Text>0         1        2        3        4        5        6        7        8        9       10</Text>
          </View> */}
          {/* <View style={{ marginTop: 10, }}>
            <Text>  No Pain                               Distresting                       Unbearable  {"\n"}                                                     pain                                   pain                                                 </Text>
          </View> */}
          <View style={{ marginHorizontal: 10, marginTop: 10, }}>
            <Text style={{ fontWeight: 'bold',color:Color.darkslategray_100 }}>You Select <Text style={{ color: Colors.purple, fontWeight: 'bold' }}> {painLevel} </Text></Text>
          </View>
        </View>
        <View style={{ marginTop: 20, marginHorizontal: 10, }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold',color:Color.dimgray_200 }}>Pain Rating Scale</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20, }}>
          <TouchableOpacity
            style={[
              styles.imageContainer,
              selectedImageIndex === 0 && styles.selectedImageContainer, // Add this line
            ]}
            onPress={() => setSelectedImageIndex(0)}>
            <Image style={{ width: 80, height: 80, resizeMode: 'contain' }} source={require('../../../assets/no-hurt.png')} />
            <Text style={{ fontSize: 12,color:Color.dimgray_100 }}> (0 - 1) No hurt</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[
            styles.imageContainer,
            selectedImageIndex === 1 && styles.selectedImageContainer, // Add this line
          ]}
            onPress={() => setSelectedImageIndex(1)}
          >
            <Image style={{ width: 80, height: 80, resizeMode: 'contain' }} source={require('../../../assets/hurts-little-bit.png')} />
            <Text style={{ fontSize: 12,color:Color.dimgray_100 }}> (2 - 3) Hurts a {"\n"}         little bit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[
            styles.imageContainer,
            selectedImageIndex === 2 && styles.selectedImageContainer, // Add this line
          ]}
            onPress={() => setSelectedImageIndex(2)}
          >
            <Image style={{ width: 80, height: 80, resizeMode: 'contain' }} source={require('../../../assets/hurts-little-more.png')} />
            <Text style={{ fontSize: 12,color:Color.dimgray_100 }}>(3 - 4) Hurts {'\n'}   little more</Text>
          </TouchableOpacity>

        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20, }}>
          <TouchableOpacity style={[
            styles.imageContainer,
            selectedImageIndex === 3 && styles.selectedImageContainer, // Add this line
          ]}
            onPress={() => setSelectedImageIndex(3)}
          >
            <Image style={{ width: 80, height: 80, resizeMode: 'contain' }} source={require('../../../assets/hurts-even-more.png')} />
            <Text style={{ fontSize: 12,color:Color.dimgray_100 }}> (5 - 6)Hurts {'\n'}  even more</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[
            styles.imageContainer,
            selectedImageIndex === 4 && styles.selectedImageContainer, // Add this line
          ]}
            onPress={() => setSelectedImageIndex(4)}
          >
            <Image style={{ width: 80, height: 80, resizeMode: 'contain' }} source={require('../../../assets/hurts-whole-lot.png')} />
            <Text style={{ fontSize: 12,color:Color.dimgray_100 }}> (7 - 8) Hurts a {"\n"}      whole lot</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[
            styles.imageContainer,
            selectedImageIndex === 5 && styles.selectedImageContainer, // Add this line
          ]}
            onPress={() => setSelectedImageIndex(5)}
          >
            <Image style={{ width: 80, height: 80, resizeMode: 'contain' }} source={require('../../../assets/hurts-worst1.png')} />
            <Text style={{ fontSize: 12,color:Color.dimgray_100 }}>(9 - 10) Hurts {'\n'}         worst</Text>
          </TouchableOpacity>

        </View>
        <View style={{ width: '90%', alignSelf: 'center',marginTop:-50 }}>
          <LinearGradient
            style={[styles.buttons, styles.buttonsPosition]}
            locations={[0, 1]}
            colors={['#bf6bbb', '#716eaa']}
            useAngle={true}
            angle={180}>
            <TouchableOpacity
              onPress={() =>{send()}}
              style={[styles.pressable, styles.parentFlexBox]}>
              <View>
                <Text style={styles.button1}>Done</Text>
              </View>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </View>
  )
}

export default PainScale

const styles = StyleSheet.create({
  buttonsPosition: {
    borderRadius: 40,
    // width: 343,
    width: '100%',
    alignSelf: 'center',
    position: 'absolute',
  },
  buttons: {
    // top: '165%',
    height: 45,
    marginTop: '30%'
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
  imageContainer: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'transparent', // Initially no border
    padding: 5,
  },
  selectedImageContainer: {
    borderColor: Colors.purple, // Border color when selected
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  painname: {
    fontSize: 14,
    width: 80,
    color: "black"
  }
})