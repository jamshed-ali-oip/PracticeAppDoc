import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Color,
  FontFamily,
  Border,
  FontSize,
  Padding,
} from '../../../GlobalStyles';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {CareApi} from '../../redux/actions/user.action';

const Care = () => {
  const navigation = useNavigation();
  const [state, setState] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    data();
  }, []);
  const data = async () => {
    const data = await dispatch(CareApi());
    console.log('careee+++++++++', data?.data);
    setState(data?.data);
  };
  return (
    <View style={styles.videosKnowledgeBase}>
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {state?.map((i, ind) => (
            <View style={styles.groupParent}>
              <Pressable
                style={styles.maskLayout}
                onPress={() => navigation.navigate('Preview',{data:i})}>
                <View style={styles.maskShadowBox} />
                <View style={[styles.rectangleParent, styles.parentPosition]}>
                  <Image
                    style={[styles.frameChild, styles.childLayout]}
                    resizeMode="cover"
                    source={{uri:i?.media_url}}
                  />
                  <View style={styles.caloriesParent}>
                    <Text style={styles.calories}>{i?.article_type?.toUpperCase()}</Text>
                    <Text style={[styles.calories1, styles.caloriesSpaceBlock]}>
                     {i?.title?.toUpperCase()}
                    </Text>
                    <Text style={[styles.calories2, styles.caloriesSpaceBlock]}>
                     {i?.description?.slice(0,120)}...
                    </Text>
                  </View>
                </View>
              </Pressable>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navPosition: {
    width: 375,
    left: 0,
    position: 'absolute',
  },
  parentPosition2: {
    left: 16,
    alignItems: 'center',
    position: 'absolute',
  },
  separatorLayout: {
    display: 'none',
    backgroundColor: Color.separatorColorLightWithTransparency,
    borderRadius: 0,
    width: '0.57%',
    position: 'absolute',
  },
  labelTypo1: {
    width: 147,
    display: 'flex',
    textAlign: 'center',
    fontFamily: FontFamily.regularFootnote13pt,
    fontWeight: '500',
    fontSize: 13,
    left: 8,
    height: 15,
    top: '50%',
    letterSpacing: 0,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  parentPosition: {
    top: 13,
    position: 'absolute',
  },
  childLayout: {
    width: 115,
    height: 110,
  },
  caloriesSpaceBlock: {
    marginTop: 5,
    width: 195,
    textAlign: 'left',
  },
  maskLayout: {
    height: 136,
    width: 343,
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  timeLayout: {
    height: 21,
    width: 54,
    position: 'absolute',
  },
  tabsPosition: {
    marginLeft: -187.5,
    left: '50%',
    width: 375,
    position: 'absolute',
  },
  homeLayout: {
    borderRadius: Border.br_81xl,
    position: 'absolute',
  },
  timePosition: {
    left: 0,
    top: 0,
  },
  parentPosition1: {
    top: '50%',
    left: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  labelTypo: {
    marginTop: 2,
    color: Color.plum_200,
    fontSize: FontSize.size_2xs,
    textAlign: 'center',
    fontFamily: FontFamily.regularFootnote13pt,
    fontWeight: '500',
    letterSpacing: 0,
  },
  image4Icon: {
    height: 180,
    top: 0,
  },
  videosKnowledgeBaseChild: {
    // top: 100,
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowRadius: 50,
    elevation: 50,
    height: 943,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    width: 375,
    left: 0,
    position: 'absolute',
    backgroundColor: Color.labelColorDarkPrimary,
    borderRadius: Border.br_11xl,
  },
  iconMagnifyingglass: {
    width: 16,
    height: 16,
  },
  placeholder: {
    fontSize: FontSize.defaultRegularBody_size,
    lineHeight: 22,
    fontFamily: FontFamily.defaultRegularBody,
    color: Color.labelColorLightSecondary,
    marginLeft: 6,
    textAlign: 'left',
    letterSpacing: 0,
    flex: 1,
  },
  searchfield: {
    backgroundColor: Color.fillColorLightTertiary,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_6xs,
    flexDirection: 'row',
    width: 343,
    borderRadius: Border.br_3xs,
    alignItems: 'center',
  },
  separator: {
    height: '55.87%',
    top: '20.95%',
    right: '1.73%',
    bottom: '23.18%',
    left: '97.7%',
  },
  label: {
    marginTop: -8.13,
    lineHeight: 19,
    color: Color.neutral900,
    height: 15,
  },
  segmentedpickerOption: {
    borderColor: 'rgba(0, 0, 0, 0.04)',
    borderWidth: 0.5,
    height: 43,
    borderStyle: 'solid',
    borderRadius: 48,
    flex: 1,
    backgroundColor: Color.labelColorDarkPrimary,
  },
  separator1: {
    height: '57.14%',
    top: '21.43%',
    right: '1.15%',
    bottom: '21.43%',
    left: '98.28%',
  },
  label1: {
    marginTop: -6.69,
    color: Color.dimgray_400,
    height: 15,
  },
  segmentedpickerOption1: {
    alignSelf: 'stretch',
    flex: 1,
  },
  segmentedpicker: {
    backgroundColor: Color.whitesmoke_100,
    width: 328,
    height: 46,
    padding: 2,
    marginTop: 16,
    borderRadius: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  maskShadowBox: {
    borderWidth: 1,
    borderColor: '#f1f1f1',
    elevation: 40,
    shadowRadius: 40,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: Border.br_base,
    left: '-0.15%',
    bottom: '-0.37%',
    right: '-0.15%',
    top: '-0.37%',
    width: '100.29%',
    height: '100.74%',
    borderStyle: 'solid',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: 'absolute',
    backgroundColor: Color.labelColorDarkPrimary,
  },
  frameChild: {
    height: 110,
    borderRadius: Border.br_3xs,
    width: 115,
  },
  calories: {
    fontSize: FontSize.size_3xs,
    fontWeight: '600',
    fontFamily: FontFamily.boldFootnote13pt,
    width: 195,
    color: Color.gray_100,
    textAlign: 'left',
  },
  calories1: {
    fontSize: FontSize.size_base,
    lineHeight: 15,
    textTransform: 'uppercase',
    fontWeight: '900',
    fontFamily: FontFamily.satoshiVariableBlack,
    color: Color.dimgray_200,
  },
  calories2: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.generalSansVariableRegular,
    color: Color.gray_100,
    marginTop: 5,
  },
  caloriesParent: {
    marginLeft: 8,
  },
  rectangleParent: {
    left: 13,
    flexDirection: 'row',
  },
  maskGroup: {
    marginTop: 12,
  },
  groupChild: {
    height: 110,
    borderRadius: Border.br_3xs,
    width: 115,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  playIcon: {
    top: 43,
    left: 45,
    position: 'absolute',
    overflow: 'hidden',
  },
  rectangleParent2: {
    height: 110,
  },
  groupParent: {
    marginTop: 16,
  },
  searchfieldParent: {
    // top: 155,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightSideIcon: {
    top: 17,
    right: 15,
    width: 67,
    height: 11,
    position: 'absolute',
  },
  text: {
    top: 1,
    fontSize: FontSize.defaultBoldSubheadline_size,
    lineHeight: 20,
    fontFamily: FontFamily.interMedium,
    height: 20,
    color: Color.labelColorDarkPrimary,
    width: 54,
    textAlign: 'center',
    fontWeight: '500',
    letterSpacing: 0,
    left: 0,
    position: 'absolute',
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
    overflow: 'hidden',
  },
  title: {
    fontSize: FontSize.size_13xl,
    letterSpacing: -0.1,
    fontWeight: '700',
    fontFamily: FontFamily.satoshiVariableBold,
    color: Color.labelColorDarkPrimary,
    textAlign: 'left',
  },
  bell01Icon: {
    width: 30,
    height: 30,
    overflow: 'hidden',
  },
  titleParent: {
    top: 60,
    width: 342,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  navChild: {
    height: '11.86%',
    width: '26.13%',
    top: '0%',
    right: '33.87%',
    bottom: '88.14%',
    left: '40%',
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    width: 134,
    height: 5,
    left: '50%',
    backgroundColor: Color.labelColorDarkPrimary,
  },
  homeindicator: {
    top: 65,
    height: 32,
    left: '50%',
  },
  homeIcon: {
    overflow: 'hidden',
  },
  label2: {
    marginTop: 1,
    color: Color.plum_200,
    fontSize: FontSize.size_2xs,
    textAlign: 'center',
    fontFamily: FontFamily.regularFootnote13pt,
    fontWeight: '500',
    letterSpacing: 0,
  },
  homeParent: {
    top: 14,
    left: 21,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  tabbarHome: {
    width: 74,
    height: 64,
  },
  smileParent: {
    marginTop: -20.12,
    marginLeft: -14,
    left: '50%',
  },
  tabbarHome1: {
    width: 76,
    height: 64,
  },
  tabbarHomeChild: {
    top: 5,
    left: 10,
    backgroundColor: Color.plum_300,
    width: 55,
    height: 55,
  },
  label4: {
    color: Color.plum_100,
    fontSize: FontSize.size_2xs,
    textAlign: 'center',
    fontFamily: FontFamily.regularFootnote13pt,
    fontWeight: '500',
    letterSpacing: 0,
  },
  searchRefractionParent: {
    marginTop: -19.12,
    marginLeft: -21.5,
    left: '50%',
  },
  tabbarHome2: {
    width: 75,
    height: 64,
  },
  vectorIcon: {
    width: 25,
    height: 25,
  },
  label5: {
    width: 51,
    height: 15,
  },
  vectorParent: {
    top: 11,
    left: 11,
    width: 51,
    alignItems: 'center',
    position: 'absolute',
  },
  iconlycurvedprofileParent: {
    left: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabbarHomeParent: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
  },
  tabs: {
    height: 65,
    left: '50%',
    top: 0,
    overflow: 'hidden',
  },
  tabbar: {
    height: '88.49%',
    top: '11.51%',
    right: '0%',
    bottom: '0%',
    left: '0%',
    backgroundColor: Color.purple,
    position: 'absolute',
    width: '100%',
  },
  nav: {
    bottom: 0,
    height: 110,
  },
  videosKnowledgeBase: {
    // height: 1075,
    overflow: 'hidden',
    width: '100%',
    // flex: 1,
    backgroundColor: Color.labelColorDarkPrimary,
    borderRadius: Border.br_11xl,
    marginBottom: 130,
    alignItems: 'center',
  },
});

export default Care;
