import * as React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {
  Padding,
  Color,
  Border,
  FontSize,
  FontFamily,
} from '../../../GlobalStyles';
import {FlatList} from 'react-native-gesture-handler';

const Tutorial = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          {/* <View style={[styles.statusBarIphoneXOrNewe, styles.timePosition]}>
        <Image
          style={styles.rightSideIcon}
          resizeMode="cover"
          source={require("../../assets/right-side2.png")}
        />
        <View style={[styles.leftSide, styles.timeLayout]}>
          <View style={[styles.time, styles.timeLayout]}>
            <Text style={[styles.text, styles.textLayout]}>9:41</Text>
          </View>
        </View>
      </View> */}
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <View style={{}}>
              <Image
                style={{width: 220, height: 220}}
                resizeMode="contain"
                source={require('../../../assets/group1.png')}
              />
            </View>
            <Text style={styles.takingCareOf}>
              taking care of everyone’s needs
            </Text>
          </View>

          <View style={{width: '80%', marginTop: 10}}>
            <View
              style={{
                backgroundColor: Color.whitesmoke_300,
                padding: 20,
                borderRadius: 10,
              }}>
              <View style={{}}>
                <Text style={{margin: 2, color: 'black'}}>
                  • Welcome to your trusted companion for enhancing your mental
                  well-being during your oncology journey
                </Text>
                <Text style={{margin: 2, color: 'black'}}>
                  • Circle care is a trusted, informative, and supportive
                  platform that patients and caregivers can rely on to help
                  improve patient's quality of life.
                </Text>

                <Text style={{margin: 2, color: 'black'}}>
                  • It's a platform that helps them assess their physical and
                  psychological condition and gives them the tips and support
                  they need.
                </Text>
                <Text style={{margin: 2, color: 'black'}}>
                  • On contrary to the majority of health mobile applications ,
                  Circle Care provides both mental health and oncological
                  support, in addition to regular symptoms assessments, also
                  some practical tools to make their life better.
                </Text>
                <Text style={{margin: 2, color: 'black'}}>
                  • This application combines the two parts that both genders
                  need, the rational and emotional ones. It empowers both
                  genders in the ways they need and provide them both the type
                  of support they are willing to accept.
                </Text>

                <Image
                  style={{width: '100%', marginTop: 10, borderRadius: 10}}
                  resizeMode="cover"
                  source={require('../../../assets/rectangle-22608.png')}
                />
              </View>
            </View>
          </View>
          <View style={{width: '80%', marginTop: 20}}>
            <View
              style={{
                backgroundColor: Color.whitesmoke_300,
                padding: 20,
                borderRadius: 10,
              }}>
              <View style={{}}>
                <Text style={{margin: 2, color: 'black'}}>
                  • To begin, let's get you started with the app.
                </Text>
                <Text style={{margin: 2, color: 'black'}}>
                  • Download Circle care from the App Store or Google Play
                  Store.
                </Text>
                <Text style={{margin: 2, color: 'black'}}>
                  • Sign up with your email and create a secure password.
                </Text>
                <Text style={{margin: 2, color: 'black'}}>
                  • This is your app's home screen.
                </Text>
                <Text style={{margin: 2, color: 'black'}}>
                  • Access different sections through the menu at the bottom.
                </Text>
                <Text style={{margin: 2, color: 'black'}}>
                  • Swipe left and right to explore various features.
                </Text>
                <Text style={{margin: 2, color: 'black'}}>
                  • Explore the app's key features: .
                </Text>
                <Text style={{margin: 2, color: 'black'}}>
                  • Goal Setting: Set personalized mental health goals.
                </Text>
                <Text style={{margin: 2, color: 'black'}}>
                  • Mood Tracking& Assessment: Monitor your emotional and mental
                  well-being
                </Text>
                <Text style={{margin: 2, color: 'black'}}>
                  • CBT Exercises: Access cognitive behavior therapy tools.
                </Text>
                <Text style={{margin: 2, color: 'black'}}>
                  • Mindfulness: Practice relaxation and mindfulness exercises.
                </Text>
                <Text style={{margin: 2, color: 'black'}}>
              
                •	Make Circle care truly yours!





                </Text>
                <Text style={{margin: 2, color: 'black'}}>
                •	Personalize your goals, preferences, and reminders in the settings menu.
                </Text>
                <Text style={{margin: 2, color: 'black'}}>
                •	The Initial phase, only filled once
                </Text>
                <Text style={{margin: 2, color: 'black'}}>
                •	Adjusting the App options to fit the needs.
                </Text>
                <Text style={{margin: 2, color: 'black'}}>
                •	Building reliance
                </Text>
                <Image
                  style={{width: '100%', marginTop: 10, borderRadius: 10}}
                  resizeMode="cover"
                  source={require('../../../assets/rectangle-226081.png')}
                />
              </View>
            </View>
          </View>
          <View style={{width: '80%', marginTop: 20}}>
            <View
              style={{
                backgroundColor: Color.whitesmoke_300,
                padding: 20,
                borderRadius: 10,
              }}>
              <View style={{}}>
                <Text style={{margin: 2, color: 'black'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Text>
                <Image
                  style={{width: '100%', marginTop: 10, borderRadius: 10}}
                  resizeMode="cover"
                  source={require('../../../assets/rectangle-226082.png')}
                />
              </View>
            </View>
          </View>
          <View style={{marginTop: 10, marginBottom: 10, width: '80%'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SplashScreen')}>
              <View style={{}}>
                <LinearGradient
                  style={styles.buttons}
                  locations={[0, 1]}
                  colors={['#bf6bbb', '#716eaa']}
                  useAngle={true}
                  angle={180}>
                  <View style={styles.button}>
                    <Text style={[styles.button1, styles.textLayout]}>
                      Done
                    </Text>
                  </View>
                </LinearGradient>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  groupSpaceBlock: {
    padding: Padding.p_xl,
    backgroundColor: Color.whitesmoke_300,
    borderRadius: Border.br_mid,
  },
  rightSideIcon: {
    top: 17,
    right: 15,
    width: 67,
    height: 11,
    // position: "absolute",
  },
  takingCareOf: {
    fontSize: FontSize.size_17xl,
    lineHeight: 35,
    fontFamily: FontFamily.AllisonRegular,
    color: Color.crimson_100,
    marginTop: 8,
    width: 343,
    textAlign: 'center',
  },
  frameParent: {
    marginTop: 30,
    // top: 55,
    // left: 16,
    alignItems: 'center',
    // position: "absolute",
  },
  loremIpsumDolor: {
    fontSize: FontSize.size_sm,
    lineHeight: 19,
    fontFamily: FontFamily.regularFootnote13pt,
    color: Color.dimgray_100,
    textAlign: 'left',
    width: 280,
    fontWeight: '500',
  },
  groupFrame: {
    marginTop: 24,
  },
  button1: {
    fontSize: FontSize.size_base,
    fontWeight: '600',
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.labelColorDarkPrimary,
    textAlign: 'center',
  },
  button: {
    // alignSelf: 'stretch',
    // paddingHorizontal: Padding.p_98xl,
    paddingVertical: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    borderRadius: Border.br_47xl,
    height: 40,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    // width: '100%',
    alignItems: 'center',
  },
  buttonsWrapper: {
    marginTop: 24,
    alignItems: 'center',
    marginBottom: 40,
  },
});

export default Tutorial;
