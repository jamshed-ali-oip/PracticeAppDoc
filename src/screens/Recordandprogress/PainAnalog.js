import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
  Image,
  Dimensions,
  FlatList,
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
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
const data = [
  {
    id: 1,
    status: true,
    name: null
  },
  {
    id: 2,
    status: false,
    name: "head"
  }, {
    id: 3,
    status: true,
    name: null
  }, {
    id: 4,
    status: false,
    name: "shoulders"
  }, {
    id: 5,
    status: false,
    name: "neck"
  }, {
    id: 6,
    status: true,
    name: null
  }, {
    id: 7,
    status: false,
    name: "shoulders"

  }, {
    id: 8,
    status: false,
    name: "chest"
  }, {
    id: 9,
    status: false,
    name: "shoulders"
  }, {
    id: 10,
    status: true,
    name: "right Elbow"
  }, {
    id: 11,
    status: false,
    name: "back"
  }, {
    id: 12,
    status: true,
    name: "left Elbow"
  }, {
    id: 13,
    status: true,
    name: "right arm"
  }, {
    id: 14,
    status: true,
    name: "stomach"
  }, {
    id: 15,
    status: true,
    name: "left arm"
  }, {
    id: 16,
    status: true,
    name: "right hand"
  }, {
    id: 17,
    status: true,
    name: null
  }, {
    id: 18,
    status: true,
    name: "left hand"
  },
  {
    id: 19,
    status: true,
    name: null
  },
  {
    id: 20,
    status: true,
    name: null
  }, {
    id: 21,
    status: true,
    name: null
  }, {
    id: 22,
    status: false,
    name: "knees"
  }, {
    id: 23,
    status: false,
    name: "knees",

  }, {
    id: 24,
    status: false,
    name: "knees"
  }, {
    id: 25,
    status: false,
    name: "right leg "
  }, {
    id: 26,
    status: true,
    status: false,
    name: "legs"
  }, {
    id: 27,
    status: false,
    name: "legs"
  }, {
    id: 28,
    status: false,
    name: "feet"
  }, {
    id: 29,
    status: false,
    name: "ankles"
  }, {
    id: 30,

    status: false,
    name: "feet"
  },

]
const PainAnalog = ({ navigation }) => {
  const [name, setname] = useState()

  return (
    <View>
      <View style={{ width: '95%', marginHorizontal: 10 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back-outline"
              size={24}
              color={Colors.purple}
              style={{}}
            />
          </TouchableOpacity>
          <View style={{}}>
            <Text
              style={{ color: Colors.purple, fontWeight: 'bold', fontSize: 18 }}>
              Pain Analog
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Records')}>
            <View style={{ backgroundColor: Colors.purple, padding: 10, borderRadius: 10, }}>
              <Text style={{ color: Colors.white, fontWeight: 'bold', }}> Records</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center', marginTop: 20, }}>
          <Image style={{ width: 400, height: 400, resizeMode: 'contain' }} source={require('../../../assets/group-1000005758.png')} />
          <View
            style={{ position: "absolute", alignSelf: "center", marginTop: 10 }}
          >
            <FlatList
              data={data}
              style={{ alignSelf: "center" }}
              numColumns={3}
              renderItem={({ item, index }) => {
                console.log("itemmmm", item)
                return (
                  <TouchableOpacity
                    onPress={() => { setname(item?.name) }}
                    disabled={item?.status}
                    style={{
                      backgroundColor: "transparent",
                      height: 40,
                      width: 60,
                      opacity: 0.5,

                    }}
                  >
                    {/* <Text>{item?.name}</Text> */}
                  </TouchableOpacity>
                )
              }}
            />
          </View>
          {/* <Image style={{ width: 400, height: 400, resizeMode: 'contain' }} source={require('../../../as')} /> */}
        </View>
      </View>
      <Text
        style={{
          color: Colors.purple,
          fontWeight: 'bold',
          alignSelf: "center",
          padding: 10
          // backgroundColor: "lightgrey"
        }}
      >{name?.toUpperCase()}</Text>
      <View style={{ width: '90%', alignSelf: 'center', }}>
        <LinearGradient
          style={[styles.buttons, styles.buttonsPosition]}
          locations={[0, 1]}
          colors={['#bf6bbb', '#716eaa']}
          useAngle={true}
          angle={180}>
          <TouchableOpacity
            onPress={() => navigation.navigate('PainScale', { data: name })}
            style={[styles.pressable, styles.parentFlexBox]}>
            <View>
              <Text style={styles.button1}>Continue</Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  )
}

export default PainAnalog

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
})