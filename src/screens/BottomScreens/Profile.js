import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../constants/Colors";
import { Color, Border, FontSize, FontFamily, Padding } from "../../../GlobalStyles";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOG_OUT } from "../../redux/const/const";
import { useDispatch } from "react-redux";

const Profile = () => {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [firstname, setFirstname] = React.useState('')
  const [lastname, setLastname] = React.useState('')

  const [avatar, setAvatar] = React.useState('')



  const dispatch = useDispatch()
  const handleImagePicker = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.uri) {
        setSelectedImage(response.uri);
      }
    });
  };




  const getprofile = async () => {

    let token1 = await AsyncStorage.getItem('token')
    console.log(token1, 'token====')


    await fetch('https://ntamtech.com/appuser/app-user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token1}`,
      },

    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson)
        if (responseJson?.success === 1) {

          setFirstname(responseJson?.data?.[0]?.first_name)
          setLastname(responseJson?.data?.[0]?.last_name)
          setAvatar(responseJson?.data?.[0]?.avatar)



        }
        else {
          // alert(responseJson?.error)

          console.log(responseJson?.error)
        }

      })
      .catch(error => {
        console.log(error)
        // alert(responseJson?.error)
        // setError(responseJson?.error)
        // return error;

      })




  };


  React.useEffect(() => {

    getprofile()


  }, [])


  const logout = () => {
    dispatch({
      type: LOG_OUT,
      payload: null
    })
  }

  return (

    <View style={styles.profile}>

      <View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: Colors.purple, fontSize: 22, fontWeight: 'bold', top: -10 }}>Profile</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%', marginHorizontal: 15, }}>
          <View style={{ top: -10, }}>
            <Text style={{ fontSize: 22, fontWeight: '500', letterSpacing: 1, color: Colors.black }}>{firstname} {lastname}</Text>
            <Text style={{ fontSize: 14, letterSpacing: -1 }}>Personal account</Text>
          </View>
          <View>
            <TouchableOpacity onPress={handleImagePicker}>
              <View style={styles.profileImageContainer}>
                {selectedImage ? (
                  <Image style={styles.profileImage} source={{ uri: selectedImage }} />
                ) : (
                  <Image
                    style={styles.profilePlaceholderImage}
                    source={{ uri: avatar }}
                  />
                )}
              </View>
            </TouchableOpacity>
            {/* <TouchableOpacity>
          <View>
          <Image
          style={{height:50,width:50,}}
                    resizeMode="cover"
                    source={require("../../assets/ellipse-2051.png")}
                  />
          </View>
          <View style={{bottom:10,alignItems:'flex-end'}} >
                  <Image
                    resizeMode="cover"
                    source={require("../../assets/group-162751.png")}
                  />
                </View>
                </TouchableOpacity> */}
          </View>
        </View>
        <View style={styles.profileNameAvatarParent}>
          {/* <View style={styles.profileNameAvatar}>
          <View style={styles.frameParent}>
            <View style={styles.frameWrapper}>
              <View style={styles.johnSmithWrapper}>
                <Text style={styles.johnSmith}>John Smith</Text>
              </View>
            </View>
            <View style={styles.avatar}>
              <Text style={[styles.personalAccount, styles.accountLayout]}>
                Personal account
              </Text>
            </View>
          </View>
          <View style={[styles.akAvatarWrapper, styles.balanceFlexBox]}>
            <View style={styles.akAvatarLayout}>
              <View style={[styles.groupParent, styles.akAvatarLayout]}>
                <View style={styles.ellipseParent}>
                  <Image
                    style={styles.ellipseParent}
                    resizeMode="cover"
                    source={require("../../assets/ellipse-2051.png")}
                  />
                  <View style={[styles.accountBalance, styles.accountLayout]}>
                    <View style={styles.balanceFlexBox} />
                  </View>
                </View>
                <View style={styles.groupWrapper}>
                  <Image
                    style={styles.frameChild}
                    resizeMode="cover"
                    source={require("../../assets/group-162751.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View> */}

          <ScrollView style={[styles.content]}>
            <View style={styles.profileParent}>
              <View style={styles.frameGroup}>
                <Pressable
                  onPress={() => navigation.navigate("EditProfile")}
                >
                  <View style={styles.settingsSingle}>
                    <View style={styles.outerContainer}>
                      <View style={styles.iconLabel}>
                        <View style={styles.icon}>
                          <View
                            style={[styles.background, styles.backgroundLayout]}
                          />
                          <Image
                            style={[styles.user03Icon, styles.iconLayout]}
                            resizeMode="cover"
                            source={require("../../../assets/user03.png")}
                          />
                        </View>
                        <Text style={[styles.editProfile, styles.profileClr]}>
                          Edit Profile
                        </Text>
                      </View>
                      <View style={styles.switcher} />
                    </View>
                  </View>
                </Pressable>
                <Pressable
                  style={styles.content}
                  onPress={() => navigation.navigate("ChangePasswordProfile")}
                >
                  <View style={styles.settingsSingle}>
                    <View style={styles.outerContainer}>
                      <View style={styles.iconLabel}>
                        <View style={styles.iconFlexBox}>
                          <View
                            style={[styles.background1, styles.backgroundLayout]}
                          />
                          <Image
                            style={[
                              styles.hugeIconfinanceAndPayment,
                              styles.iconLayout,
                            ]}
                            resizeMode="cover"
                            source={require("../../../assets/hugeiconfinance-and-paymentoutlineshield.png")}
                          />
                        </View>
                        <Text style={[styles.editProfile, styles.profileClr]}>
                          Change password
                        </Text>
                      </View>
                      <View style={styles.switcher} />
                    </View>
                  </View>
                </Pressable>
              </View>
            </View>
            <View style={{ marginBottom: -30 }}></View>
            <View style={styles.frameContainer}>
              <View style={styles.frameGroup}>
                <View style={styles.settingsSingle2} />
                <Pressable
                  style={styles.settingsSingle3}
                  onPress={() => navigation.navigate("TutorialProfile")}
                >
                  <View style={styles.outerContainer}>
                    <View style={styles.iconLabel}>
                      <View style={styles.iconFlexBox}>
                        <View style={styles.backgroundLayout}>
                          <View
                            style={[styles.background2, styles.backgroundLayout]}
                          />
                          <Image
                            style={[styles.videoLesson1Icon, styles.iconLayout]}
                            resizeMode="cover"
                            source={require("../../../assets/videolesson-1.png")}
                          />
                        </View>
                      </View>
                      <Text style={[styles.editProfile, styles.profileClr]}>
                        Tutorial
                      </Text>
                    </View>
                    <View style={styles.switcher} />
                  </View>
                </Pressable>
                <Pressable
                  style={styles.settingsSingle3}
                  onPress={() => navigation.navigate("Support")}
                >
                  <View style={styles.outerContainer}>
                    <View style={styles.iconLabel}>
                      <View style={styles.iconFlexBox}>
                        <View
                          style={[styles.background1, styles.backgroundLayout]}
                        />
                        <Image
                          style={[
                            styles.hugeIconfinanceAndPayment,
                            styles.iconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../../../assets/hugeiconinterfaceoutlinehelp.png")}
                        />
                      </View>
                      <Text style={[styles.editProfile, styles.profileClr]}>
                        Help and Support
                      </Text>
                    </View>
                  </View>
                </Pressable>
                <View style={styles.settingsSingle5} />
                <Pressable
                  style={styles.settingsSingle3}
                  onPress={() => navigation.replace("Login")}
                >
                  <View style={styles.outerContainer}>
                    <View style={styles.iconLabel}>
                      <View style={styles.iconFlexBox}>
                        <View
                          style={[styles.background1, styles.backgroundLayout]}
                        />
                        <Image
                          style={[
                            styles.hugeIconfinanceAndPayment,
                            styles.iconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../../../assets/hugeiconinterfaceoutlinelogout.png")}
                        />
                      </View>
                      <TouchableOpacity onPress={() => { logout() }}>
                        <Text style={[styles.editProfile, styles.profileClr]}>
                          Log out
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Pressable>
                <Pressable
                  style={styles.settingsSingle3}
                  onPress={() => navigation.navigate("DeleteProfile")}
                >
                  <View style={styles.outerContainer}>
                    <View style={styles.iconLabel}>
                      <View style={styles.iconFlexBox}>
                        <View
                          style={[styles.background1, styles.backgroundLayout]}
                        />
                        <Image
                          style={[
                            styles.hugeIconfinanceAndPayment,
                            styles.iconLayout,
                          ]}
                          resizeMode="cover"
                          source={require("../../../assets/hugeiconinterfaceoutlineremovecircle.png")}
                        />
                      </View>
                      <Text style={[styles.editProfile, styles.profileClr]}>
                        Close the account
                      </Text>
                    </View>
                  </View>
                </Pressable>



              </View>

            </View>
          </ScrollView>
        </View>
      </View>

    </View>

  );
};

const styles = StyleSheet.create({

  profile: {
    flex: 1,
    backgroundColor: Colors.yellow,
    paddingHorizontal: 20,
    // height: 400,
    // paddingTop: 20,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 75,
  },
  profilePlaceholderImage: {
    width: 90,
    height: 90,
    borderRadius: 75,
    backgroundColor: '#CCCCCC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeLayout: {
    height: 21,
    width: 54,
    // position: "absolute",
  },
  profilePosition: {
    left: 16,
    // position: "absolute",
  },
  accountLayout: {
    height: 28,
    alignItems: "center",
    // position: "absolute",
  },
  balanceFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  akAvatarLayout: {
    height: 60,
    width: 56,
  },
  profileClr: {
    color: Color.neutral900,
    textAlign: "left",
  },
  backgroundLayout: {
    height: 40,
    width: 40,
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  tabbarPosition: {
    right: "0%",
    // position: "absolute",
  },
  tabsPosition: {
    marginLeft: -187.5,
    left: "50%",
    width: 375,
    // position: "absolute",
  },
  homeLayout: {
    borderRadius: Border.br_81xl,
    // position: "absolute",
  },
  labelTypo1: {
    fontSize: FontSize.size_2xs,
    color: Color.plum_200,
    fontFamily: FontFamily.regularFootnote13pt,
    textAlign: "center",
    fontWeight: "500",
    letterSpacing: 0,
  },
  parentPosition1: {
    top: "50%",
    left: "50%",
    // position: "absolute",
  },
  parentPosition: {
    top: 11,
    alignItems: "center",
    // position: "absolute",
  },
  labelTypo: {
    marginTop: 2,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.regularFootnote13pt,
    textAlign: "center",
    fontWeight: "500",
    letterSpacing: 0,
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
    color: Color.systemBlack,
    height: 20,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 20,
    fontSize: FontSize.defaultBoldSubheadline_size,
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
    left: 24,
  },
  statusBarIphoneXOrNewe: {
    height: 44,
    width: 375,
    left: 0,
    top: 0,
    // position: "absolute",
    overflow: "hidden",
  },
  profile1: {
    marginTop: -13,
    marginLeft: -26.5,
    fontSize: FontSize.size_lg,
    color: Color.mediumpurple,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    left: "50%",
    top: "50%",
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 0,
    // position: "absolute",
  },
  profileWrapper: {
    top: 44,
    width: 343,
    height: 44,
  },
  johnSmith: {
    fontSize: FontSize.size_9xl,
    lineHeight: 36,
    color: Color.mainBlack100,
    textAlign: "left",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    flex: 1,
  },
  johnSmithWrapper: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  frameWrapper: {
    alignSelf: "stretch",
    flex: 1,
  },
  personalAccount: {
    marginLeft: -85.75,
    color: Color.neutral700,
    display: "flex",
    fontFamily: FontFamily.regularFootnote13pt,
    height: 28,
    lineHeight: 18,
    fontSize: FontSize.defaultRegularFootnote_size,
    textAlign: "left",
    width: 172,
    left: "50%",
    fontWeight: "500",
    top: 0,
  },
  avatar: {
    marginTop: 8,
    alignSelf: "stretch",
    flex: 1,
  },
  frameParent: {
    width: 172,
    alignSelf: "stretch",
  },
  ellipseParent: {
    height: 56,
    width: 56,
    left: 0,
    top: 0,
    // position: "absolute",
  },
  accountBalance: {
    top: 15,
    left: 14,
    width: 29,
    justifyContent: "center",
  },
  frameChild: {
    width: 20,
    height: 20,
  },
  groupWrapper: {
    top: 40,
    left: 33,
    flexDirection: "row",
    // position: "absolute",
  },
  groupParent: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  akAvatarWrapper: {
    alignSelf: "stretch",
    flexDirection: "row",
    flex: 1,
  },
  profileNameAvatar: {
    height: 63,
    flexDirection: "row",
    alignItems: "center",
    width: 343,
  },
  profile2: {
    lineHeight: 18,
    fontSize: FontSize.defaultRegularFootnote_size,
    color: Color.neutral900,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 16,
    // position: "absolute",
    top: 0,
  },
  background: {
    top: 2,
    left: 2,
    backgroundColor: Color.lavender,
    borderRadius: Border.br_xl,
    width: 40,
    // position: "absolute",
  },
  user03Icon: {
    left: 10,
    top: -30,
    width: 24,
    // position: "absolute",
    overflow: "hidden",
  },
  icon: {
    width: 44,
    height: 44,
  },
  editProfile: {
    fontFamily: FontFamily.interRegular,
    width: 252,
    marginLeft: 8,
    height: 25,
    display: "flex",
    alignItems: "center",
    color: Color.neutral900,
    lineHeight: 20,
    fontSize: FontSize.defaultBoldSubheadline_size,
  },
  iconLabel: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginBottom: 5,
  },
  switcher: {
    display: "none",
    width: 51,
    height: 31,
  },
  outerContainer: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    flexDirection: "row",
    alignItems: "center",
    width: 375,
  },
  settingsSingle: {
    flexDirection: "row",
    alignItems: "center",
    width: 375,
  },
  background1: {
    zIndex: 0,
    backgroundColor: Color.lavender,
    borderRadius: Border.br_xl,
    width: 40,
  },
  hugeIconfinanceAndPayment: {
    zIndex: 1,
    left: 10,
    top: 10,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  iconFlexBox: {
    padding: Padding.p_3xs,
    width: 44,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    height: 44,
  },
  content: {
    marginTop: 0,
    height: 370,
    // marginBottom:50,
  },
  frameGroup: {
    top: 22,
    left: 0,
    position: "absolute",
  },
  profileParent: {
    height: 130,
    width: 375,
  },
  settingsSingle2: {
    display: "none",
    alignItems: "center",
    width: 375,
  },
  background2: {
    backgroundColor: Color.lavender,
    borderRadius: Border.br_xl,
    width: 40,
    left: 0,
    top: 0,
    position: "absolute",
  },
  videoLesson1Icon: {
    marginTop: -12,
    marginLeft: -12,
    left: "50%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  settingsSingle3: {
    // marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    width: 375,
  },
  settingsSingle5: {
    display: "none",
    // marginTop: 16,
    alignItems: "center",
    width: 375,
  },
  support: {
    lineHeight: 18,
    fontSize: FontSize.defaultRegularFootnote_size,
    color: Color.neutral900,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  securityMenus: {
    top: 0,
  },
  frameContainer: {
    height: 250,
    // marginTop: 32,
    width: 375,
  },
  profileNameAvatarParent: {
    top: -20,
    alignItems: "center",
    left: 0,
    // position: "absolute",
  },
  navChild: {
    height: "11.82%",
    width: "23.2%",
    top: "0%",
    bottom: "88.18%",
    left: "76.8%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    width: 134,
    height: 5,
    left: "50%",
    backgroundColor: Color.labelColorDarkPrimary,
  },
  homeindicator: {
    top: 65,
    height: 32,
  },
  homeIcon: {
    overflow: "hidden",
  },
  label: {
    marginTop: 1,
    color: Color.plum_200,
  },
  homeParent: {
    top: 14,
    left: 21,
    justifyContent: "center",
    alignItems: "center",
    // position: "absolute",
  },
  tabbarHome: {
    width: 74,
    height: 64,
  },
  smileParent: {
    marginTop: -20.12,
    marginLeft: -14,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
  },
  tabbarHome1: {
    width: 76,
    height: 64,
  },
  label2: {
    color: Color.plum_200,
  },
  searchRefractionParent: {
    marginTop: -19.12,
    marginLeft: -21.5,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
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
    height: 15,
    color: Color.plum_200,
    width: 51,
  },
  vectorParent: {
    left: 11,
    width: 51,
  },
  tabbarHomeChild: {
    top: 4,
    backgroundColor: Color.plum_300,
    width: 55,
    height: 55,
    left: 10,
  },
  label4: {
    color: Color.plum_100,
  },
  iconlycurvedprofileParent: {
    left: 22,
    justifyContent: "center",
  },
  tabbarHomeParent: {
    justifyContent: "center",
    flexDirection: "row",
    left: 0,
    top: 0,
    // position: "absolute",
  },
  tabs: {
    height: 65,
    top: 0,
    overflow: "hidden",
  },
  tabbar: {
    height: "88.18%",
    top: "11.82%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.purple,
    width: "100%",
  },
  nav: {
    top: 702,
    height: 110,
    width: 375,
    left: 0,
    // position: "absolute",
  },
  profile: {
    // borderRadius: Border.br_11xl,
    // height: 812,
    // overflow: "hidden",
    // width: "100%",
    flex: 1,
    // marginTop:20,
    backgroundColor: Colors.white,
  },
});

export default Profile;
