import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable,TouchableOpacity,Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../../../GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";
import Colors from '../../constants/Colors';

const {height, width} = Dimensions.get('window');

const BottomHome = () => {
  const navigation = useNavigation();

  return (
    <View style={{alignItems:'center',marginTop:10,height:height}}>
<ScrollView showsVerticalScrollIndicator={false}>
    <View>
   
    <TouchableOpacity onPress={() => navigation.navigate('MyHealthSurvey')}>
    <View style={[styles.maskGroup, styles.maskGroupLayout]}>
      <View style={[styles.mask, styles.maskPosition]} />
      
      <View style={[styles.layerX00201Parent, styles.parentPosition]}>
        <Image
          style={styles.layerX00201Icon}
          resizeMode="cover"
          source={require("../../../assets/onlinesurvey.png")}
        />
        <Text style={styles.calories}>{`My Health Survey`}</Text>
      </View>
      <Image
        style={styles.maskGroupChild}
        resizeMode="cover"
        source={require("../../../assets/vector-2185.png")}
      />
      <Image
        style={styles.maskGroupItem}
        resizeMode="cover"
        source={require("../../../assets/vector-2186.png")}
      />
      <Image
        style={styles.maskGroupInner}
        resizeMode="cover"
        source={require("../../../assets/vector-2187.png")}
      />
      <Image
        style={styles.maskGroupChild1}
        resizeMode="cover"
        source={require("../../../assets/vector-2188.png")}
      />
    </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>navigation.navigate('DailyTask1')}>
    <View style={[styles.maskGroup, styles.maskGroupLayout]}>
      <View style={[styles.mask, styles.maskPosition]} />



      
      <View style={[styles.layerX00201Parent, styles.parentPosition]}>
        <Image
          style={styles.layerX00201Icon}
          resizeMode="cover"
          source={require("../../../assets/layer-x0020-1.png")}
        />
        <Text style={styles.calories}>{`Today Engagement`}</Text>
      </View>



      <Image
        style={styles.maskGroupChild}
        resizeMode="cover"
        source={require("../../../assets/vector-2185.png")}
      />
      <Image
        style={styles.maskGroupItem}
        resizeMode="cover"
        source={require("../../../assets/vector-2186.png")}
      />
      <Image
        style={styles.maskGroupInner}
        resizeMode="cover"
        source={require("../../../assets/vector-2187.png")}
      />
      <Image
        style={styles.maskGroupChild1}
        resizeMode="cover"
        source={require("../../../assets/vector-2188.png")}
      />
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Recordandprog')}>
    <View style={[styles.maskGroup, styles.maskGroupLayout]}>
      <View style={[styles.mask, styles.maskPosition]} />
      
      <View style={[styles.layerX00201Parent, styles.parentPosition]}>
        <Image
          style={styles.layerX00201Icon}
          resizeMode="cover"
          source={require("../../../assets/kanban.png")}
        />
        <Text style={styles.calories}>{`MY RECORDS & PROGRESS`}</Text>
      </View>
      <Image
        style={styles.maskGroupChild}
        resizeMode="cover"
        source={require("../../../assets/vector-2185.png")}
      />
      <Image
        style={styles.maskGroupItem}
        resizeMode="cover"
        source={require("../../../assets/vector-2186.png")}
      />
      <Image
        style={styles.maskGroupInner}
        resizeMode="cover"
        source={require("../../../assets/vector-2187.png")}
      />
      <Image
        style={styles.maskGroupChild1}
        resizeMode="cover"
        source={require("../../../assets/vector-2188.png")}
      />
    </View>
    </TouchableOpacity>

    
    
    <LinearGradient
      style={styles.buttons}
      locations={[0, 1]}
      colors={["#bf6bbb", "#716eaa"]}
      useAngle={true}
      angle={180}
    >
      <TouchableOpacity
        style={styles.pressable}
        onPress={()=>navigation.navigate('DailyReflection1')}
        
      >
        <View style={styles.button}>
          <View style={styles.frameGroup}>
            <Image
              style={styles.settings1Icon}
              resizeMode="cover"
              source={require("../../../assets/settings-1.png")}
            />
            <Text style={[styles.myDailyReflection, styles.textTypo]}>
              My Daily Reflection
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  </View>
  </ScrollView>
  </View>
  );
};

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
        // position: "absolute",
      },
      maskGroupLayout1: {
        maxHeight: "100%",
        maxWidth: "100%",
        // position: "absolute",
        overflow: "hidden",
      },
      parentPosition: {
        top: 29,
        alignItems: "center",
        flexDirection: "row",
        // position: "absolute",
      },
      maskGroupLayout: {
        height: 120,
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
        // position: "absolute",
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
        // position: "absolute",
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
        // position: "absolute",
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
        // position: "absolute",
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
        // height: "100%",
        // width: "113.98%",
        // top: "-19.75%",
        // right: "-6.99%",
        // bottom: "-25.74%",
        // left: "-6.99%",
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
        width:150,
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
        width: 50,
        height: 64,
      },
      layerX00201Parent: {
        left: 40,
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
        marginTop: 20,
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
        // alignSelf: "stretch",
        paddingHorizontal: Padding.p_98xl,
        paddingVertical: 0,
        justifyContent: "center",
        alignItems: "center",
        // flex: 1,
        width:400,
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
});

export default BottomHome;
