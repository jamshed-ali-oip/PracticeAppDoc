import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable,Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../../../GlobalStyles";
import languageChange from "./LanguageChange";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../../constants/Colors";
const {height,width}=Dimensions.get("window")
const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      {/* <View style={[styles.statusBarIphoneXOrNewe, styles.timePosition]}>
        <Image
          style={styles.rightSideIcon}
          resizeMode="cover"
          source={require("../../assets/right-side2.png")}
        />
        <View style={[styles.leftSide, styles.timeLayout]}>
          <View style={[styles.time, styles.timeLayout]}>
            <Text style={[styles.text, styles.textTypo]}>9:41</Text>
          </View>
        </View>
      </View> */}
      <View style={{alignItems:'center',justifyContent:'center'}}>
        <View style={{alignItems:'center'}}>
          <View>
            <Image
             style={{
              width:width*0.7,
               height:height*0.24,
              // backgroundColor:"red"
              }}
              resizeMode="contain"
              source={require("../../../assets/logos/ntlogo.png")}
            />
          </View>
          <Text style={styles.takingCareOf}>
            taking care of everyone’s needs
          </Text>
        </View>
        <View style={{marginTop:100,marginBottom:10,width:'80%'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('LanguageChange')}>
              <View style={{}}>
                <LinearGradient
                  style={styles.buttons}
                  locations={[0, 1]}
                  colors={['#bf6bbb', '#716eaa']}
                  useAngle={true}
                  angle={180}>
                  <View style={styles.button}>
                    <Text style={{width:100,textAlign:'center',color:Colors.white,fontWeight:'bold'}}>
                      Get Started
                    </Text>
                  </View>
                </LinearGradient>
              </View>
            </TouchableOpacity>
          </View>
      </View>
      <View style={{position:'absolute',bottom:10,}}>
        <Text style={styles.poweredBy}>Powered by <Text style={{color:'black',fontWeight:'bold'}}>NTAM Group</Text></Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timePosition: {
    left: 0,
    top: 0,
  },
  timeLayout: {
    height: 21,
    width: 54,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
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
    fontSize: FontSize.defaultBoldSubheadline_size,
    letterSpacing: 0,
    color: Color.systemBlack,
    height: 20,
    textAlign: "center",
    lineHeight: 20,
    width: 54,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 0,
  },
  time: {
    borderRadius: Border.br_5xl,
    left: 0,
    top: 0,
  },
  leftSide: {
    top: 12,
    left: 24,
  },
  statusBarIphoneXOrNewe: {
    width: 375,
    height: 44,
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon: {
    width: 196,
    height: 228,
  },
  frameGroup: {
    alignItems: "center",
  },
  takingCareOf: {
    fontSize: FontSize.size_17xl,
    lineHeight: 35,
    fontFamily: FontFamily.AllisonRegular,
    color: Color.crimson_100,
    marginTop: 8,
    width: 343,
    textAlign: "center",
  },
  button1: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.labelColorDarkPrimary,
    textAlign: "center",
    lineHeight: 20,
  },
  button: {
    alignSelf: "stretch",
    // paddingHorizontal: Padding.p_98xl,
    paddingHorizontal:'30%',
    paddingVertical: 10,
    // flex: 1,
  },
  pressable: {
    borderRadius: Border.br_47xl,
    height: "100%",
    backgroundColor: "transparent",
    // width: "100%",
  },
  buttons: {
    height: 40,
    // marginTop: 150,
    // width: '100%',
    borderRadius:40,
  },
  frameParent: {
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    // position: "absolute",
  },
  poweredBy: {
    color: Color.gray_100,
  },
  ntamGroup: {
    color: Color.darkslategray_400,
  },
  poweredByNtamContainer: {
    marginLeft: -48.5,
    top: 794,
    left: "50%",
    fontSize: FontSize.size_5xs,
    lineHeight: 18,
    textAlign: "center",
  },
  login: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.labelColorDarkPrimary,
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default SplashScreen;
