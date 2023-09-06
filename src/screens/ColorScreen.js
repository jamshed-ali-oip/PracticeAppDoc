import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View,Pressable,Image, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'
import Styles from '../common/Styles';
import Colors from '../constants/Colors';
import MyHeader from '../components/MyHeader';
import Home from './Home';
import LinearGradient from 'react-native-linear-gradient';
import { Border, Color, FontFamily, FontSize, Padding } from "../../GlobalStyles";
import { ScrollView } from 'react-native-gesture-handler';
import BottomHome from './BottomScreens/BottomHome';
import Discover from './BottomScreens/Discover';
import Relax from './BottomScreens/Relax';
import Care from './BottomScreens/Care';
import Profile from './BottomScreens/Profile';


export default function ColorScreen({ route, navigation }) {
  const viewRef = React.useRef(null);
  const [bgColor, setBgColor] = useState();
  // const navigate = (route) => navigation.navigate(route)
  useEffect(() => {
    switch (route.name) {
      case 'Home': { setBgColor(Colors.white); break; }
      case 'Discover': { setBgColor(Colors.white); break; }
      case 'Care': { setBgColor(Colors.white); break; }
      case 'Relax': { setBgColor(Colors.white); break; }
      case 'Profile': { setBgColor(Colors.white); break; }
      default: setBgColor(Colors.white);
    }
  }, [])
  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     viewRef.current.animate({ 0: { opacity: 0.5, }, 1: { opacity: 1 } });
  //   })
  //   return () => unsubscribe;
  // }, [navigation])
  return (
    <View style={Styles.container}>
      
      <MyHeader
      navigation={navigation}
        menu
        // onPressMenu={() => navigation.goBack()}
        // // title={route.name}
        // right="more-vertical"
        // onRightPress={() => navigation.navigate('Screen')}
      />
      <Animatable.View
        ref={viewRef}
        easing={'ease-in-out'}
        style={Styles.container}>
          {
           route.name === 'Home' ?
        <View style={{backgroundColor: bgColor, flex: 1,borderTopLeftRadius:30,borderTopRightRadius:30,}} >
          <View>
            <BottomHome />
          </View>
          </View>
          :
          null
          
}
{
           route.name === 'Discover' ?
        <View style={{backgroundColor: bgColor, flex: 1,borderTopLeftRadius:30,borderTopRightRadius:30,}} >
          <View style={{width:'95%',marginHorizontal:10,}}>
            
          <Discover />
          
          </View>
          </View>
          :
          null
}
{
           route.name === 'Relax' ?
        <View style={{backgroundColor: bgColor, flex: 1,borderTopLeftRadius:40,borderTopRightRadius:40,}} >
          <View style={{width:'100%',}}>
            
          <Relax />
          
          </View>
          </View>
          :
          null
}

{
           route.name === 'Care' ?
        <View style={{backgroundColor: bgColor, flex: 1,borderTopLeftRadius:40,borderTopRightRadius:40,}} >
          <View style={{width:'100%',alignItems:'center'}}>
            
          <Care />
          
          </View>
          </View>
          :
          null
}

{
           route.name === 'Profile' ?
        <View style={{backgroundColor:Colors.white, flex: 1,borderTopLeftRadius:30,borderTopRightRadius:30,}} >
          <View style={{flex:1,marginTop:22,}}>
          <Profile />
          </View>
          </View>
          :
          null
}


          
          </Animatable.View>
         
    </View>
  )
}

const styles = StyleSheet.create({
  homeLayout: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.labelColorDarkPrimary,
  },
  navPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  timeLayout: {
    height: 21,
    width: 54,
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    lineHeight: 20,
    color: Color.labelColorDarkPrimary,
    fontWeight: "500",
  },
  parentPosition2: {
    left: 16,
    alignItems: "center",
    position: "absolute",
  },
  maskPosition: {
    bottom: "0%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  tabsPosition: {
    left: "50%",
    position: "absolute",
  },
  timePosition: {
    left: 0,
    top: 0,
  },
  groupChildLayout: {
    height: 55,
    width: 55,
    position: "absolute",
  },
  homeIconLayout: {
    height: 24,
    width: 24,
  },
  labelTypo: {
    color: Color.plum_200,
    fontFamily: FontFamily.regularFootnote13pt,
    fontSize: FontSize.size_2xs,
    textAlign: "center",
    fontWeight: "500",
    letterSpacing: 0,
  },
  parentPosition1: {
    top: "50%",
    left: "50%",
    alignItems: "center",
    position: "absolute",
  },
  maskGroupLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  parentPosition: {
    top: 35,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  maskGroupLayout: {
    height: 125,
    width: 330,
  },
  image4Icon: {
    height: 142,
    top: 0,
  },
  homeChild: {
    top: 117,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 50,
    elevation: 50,
    shadowOpacity: 1,
    height: 690,
    backgroundColor: Color.labelColorDarkPrimary,
    borderRadius: Border.br_11xl,
  },
  rightSideIcon: {
    top: 17,
    right: 15,
    width: 67,
    height: 11,
    position: "absolute",
  },
  text: {
    top: 1,
    fontFamily: FontFamily.interMedium,
    height: 20,
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldSubheadline_size,
    textAlign: "center",
    lineHeight: 20,
    width: 54,
    left: 0,
    position: "absolute",
  },
  time: {
    borderRadius: Border.br_5xl,
    left: 0,
    top: 0,
  },
  leftSide: {
    top: 12,
    left: 21,
  },
  statusBarIphoneXOrNewe: {
    height: 44,
    top: 0,
    overflow: "hidden",
  },
  groupIcon: {
    width: 42,
    height: 49,
  },
  groupWrapper: {
    alignItems: "center",
  },
  welcomeBack1: {
    color: "#f6bbff",
  },
  text1: {
    color: Color.labelColorDarkPrimary,
  },
  welcomeBack: {
    fontFamily: FontFamily.satoshiVariableMedium,
    fontWeight: "500",
    fontSize: FontSize.defaultBoldSubheadline_size,
  },
  johnSmith1: {
    fontSize: FontSize.size_5xl,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.satoshiVariableBold,
  },
  title: {
    // letterSpacing: "-0.32%",
    marginLeft: 8,
    textAlign: "left",
  },
  frameGroup: {
    alignItems: "center",
    flexDirection: "row",
  },
  bell01Icon: {
    width: 30,
    height: 30,
    overflow: "hidden",
  },
  frameParent: {
    top: 52,
    width: 342,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    width: 134,
    height: 5,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorDarkPrimary,
  },
  homeindicator: {
    top: 65,
    height: 32,
    marginLeft: -187.5,
    left: "50%",
    width: 375,
  },
  groupChild: {
    backgroundColor: Color.plum_300,
    borderRadius: Border.br_81xl,
    left: 0,
    top: 0,
  },
  homeIcon: {
    overflow: "hidden",
  },
  label: {
    color: Color.plum_100,
    fontFamily: FontFamily.regularFootnote13pt,
    fontSize: FontSize.size_2xs,
    textAlign: "center",
    fontWeight: "500",
    letterSpacing: 0,
  },
  homeParent: {
    top: 10,
    left: 12,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  rectangleParent: {
    top: 4,
    left: 11,
  },
  tabbarHome: {
    width: 76,
    height: 64,
  },
  smileIcon: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  label1: {
    marginTop: 1,
  },
  smileParent: {
    marginLeft: -13,
    top: 11,
    justifyContent: "center",
    alignItems: "center",
  },
  tabbarHome1: {
    width: 74,
    height: 64,
  },
  searchRefractionParent: {
    marginTop: -19.12,
    marginLeft: -21.5,
    justifyContent: "center",
  },
  tabbarHome2: {
    width: 75,
    height: 64,
  },
  vectorIcon: {
    width: 25,
    height: 25,
  },
  label3: {
    marginTop: 2,
  },
  vectorParent: {
    marginTop: -20.66,
    marginLeft: -26,
    width: 51,
  },
  iconlycurvedprofileParent: {
    top: 13,
    left: 22,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  tabbarHomeParent: {
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
  },
  tabs: {
    height: 65,
    marginLeft: -187.5,
    left: "50%",
    width: 375,
    top: 0,
    overflow: "hidden",
  },
  tabbar: {
    height: "88.49%",
    top: "11.51%",
    backgroundColor: Color.purple,
    left: "0%",
  },
  navChild: {
    height: "11.86%",
    width: "26.13%",
    top: "0%",
    right: "73.87%",
    bottom: "88.14%",
    left: "0%",
  },
  nav: {
    top: 702,
    height: 110,
  },
  maskGroupIcon: {
    height: "140%",
    width: "113.98%",
    top: "-19.75%",
    right: "-6.99%",
    bottom: "-25.74%",
    left: "-6.99%",
  },
  onlineSurveyIcon: {
    width: 64,
    height: 64,
    overflow: "hidden",
  },
  calories: {
    fontSize: FontSize.size_xl,
    letterSpacing: 1,
    textTransform: "uppercase",
    fontWeight: "600",
    fontFamily: FontFamily.interSemibold,
    color: Color.indigo,
    marginLeft: 24,
    textAlign: "left",
  },
  onlineSurveyParent: {
    left: 34,
  },
  mask: {
    height: "99.98%",
    top: "0.02%",
    borderRadius: 10,
    backgroundColor: "#faf4ff",
    left: "0%",
  },
  layerX00201Icon: {
    width: 47,
    height: 64,
  },
  layerX00201Parent: {
    left: 29,
  },
  maskGroupChild: {
    top: 70,
    left: 90,
    width: 244,
    height: 58,
    position: "absolute",
  },
  maskGroupItem: {
    top: 70,
    left: 85,
    width: 247,
    height: 64,
    position: "absolute",
  },
  maskGroupInner: {
    // top: -6,
    // left: -18,
    width: 200,
    height: 50,
    position: "absolute",
  },
  maskGroupChild1: {
    // top: -13,
    // left: -19,
    width: 208,
    height: 40,
    position: "absolute",
  },
  maskGroup: {
    marginTop: 24,
    borderWidth:0.5,
    borderColor:Colors.purple,
    borderRadius:5,
    // height:300,
  },
  maskGroupIcon1: {
    height:'102%',
    width:'107.5%',
    left:-19,
    },
  settings1Icon: {
    width: 27,
    height: 27,
    overflow: "hidden",
  },
  myDailyReflection: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsMedium,
    marginLeft: 10,
  },
  button: {
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_98xl,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  pressable: {
    borderRadius: Border.br_47xl,
    height: "100%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  buttons: {
    width: 343,
    height: 50,
    marginTop: 24,
    borderRadius:30,
  },
  groupParent: {
    top: 35,
    alignItems: "center",
  },
  home: {
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.labelColorDarkPrimary,
  },
})
