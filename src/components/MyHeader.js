import React from 'react'
import { View, StyleSheet, TouchableOpacity,Image, ImageBackground } from 'react-native'
import { Badge, Surface, Text, Title } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'
import Colors from '../constants/Colors';
import LinearGradient from "react-native-linear-gradient";
import { Border, Color, FontFamily, FontSize, Padding } from "../../GlobalStyles";


const IconSize = 24;

const AppHeader = ({route, navigation}) => {

	// const navigate = (route) => navigation.navigate(route)

	// const LeftView = () => (
	// 	<View style={styles.view}>
	// 		<View style={{marginTop:20,}}>
			
	// 	</View>
	// 		{/* {menu && <TouchableOpacity onPress={onPressMenu}>
	// 			<Feather name="menu" size={IconSize} color={iconColor} />
	// 		</TouchableOpacity>}
	// 		{back && <TouchableOpacity onPress={onPressBack}>
	// 			<Feather name="arrow-left" size={IconSize} color={iconColor} />
	// 		</TouchableOpacity>} */}
	// 	</View>
	// )
	// const RightView = () => (
	// 	rightComponent ? rightComponent :
	// 		<View style={[styles.view, styles.rightView]}>
	// 			{optionalBtn && <TouchableOpacity style={styles.rowView} onPress={optionalBtnPress}>
	// 				<Feather name={optionalBtn} size={IconSize} color={iconColor} />
	// 				{optionalBadge && <Badge style={{ position: 'absolute', top: -5, right: -10 }}>{optionalBadge}</Badge>}
	// 			</TouchableOpacity>}
	// 			{right !== '' && <TouchableOpacity onPress={onRightPress}>
	// 				<Feather name={right} size={IconSize} color={iconColor} />
	// 			</TouchableOpacity>}
	// 		</View>
	// )
	// const TitleView = () => (
	// 	<View style={styles.titleView}>
	// 		<Title style={{ color: iconColor, textAlign: titleAlight }}>{title}</Title>
	// 	</View>
	// )
	return (
		<Surface style={[styles.header,]}>
			<ImageBackground
        style={{height:'120%',width:'100%'}}
        resizeMode="cover"
        source={require("../../assets/image-4.png")}
      >
		 <View style={[styles.frameParent, styles.parentPosition2]}>
        <View style={styles.frameGroup}>
          <View style={styles.groupWrapper}>
            <Image
              style={styles.groupIcon}
              resizeMode="contain"
              source={require("../../assets/group.png")}
            />
          </View>
		  <View style={{marginLeft:5,}}>
          <Text style={styles.title}>
            <Text style={styles.welcomeBack}>
              <Text style={styles.welcomeBack1}>  Welcome Back</Text>
              <Text style={styles.text1}>{` 
`}</Text>
            </Text>
            <Text style={styles.text1}>
              <Text style={styles.johnSmith1}>John Smith</Text>
            </Text>
          </Text>
		  </View>
        </View>
		<TouchableOpacity
		>
        <Image
          style={styles.bell01Icon}
          resizeMode="cover"
          source={require("../../assets/bell01.png")}
        />
		</TouchableOpacity>
      </View>
		</ImageBackground>
			{/* <LeftView />
			<TitleView />
			<RightView /> */}
			
			
		</Surface>
	)
}

export default AppHeader

const styles = StyleSheet.create({
	header: {
		height: 125,
		elevation: 4,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
	},
	view: {
		marginHorizontal: 16,
		alignItems: 'center',
		flexDirection: 'row',
	},
	titleView: {
		flex: 1,
	},
	rightView: {
		justifyContent: 'flex-end',
	},
	rowView: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 10,
	},
	parentPosition2: {
		left: 16,
		alignItems: "center",
		position: "absolute",
	  },
	  frameParent: {
		top: 45,
		// height:'40%',
		width: '90%',
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		// backgroundColor:'white'
	  },
	  frameGroup: {
		alignItems: "center",
		flexDirection: "row",
	  },
	  groupWrapper: {
		alignItems: "center",
	  },
	  groupIcon: {
		width: 60,
		height: 60,
		// backgroundColor:'red'
	  },
	  title: {
		// letterSpacing: "-0.32%",
		marginLeft: 8,
		textAlign: "left",
	  },
	  welcomeBack1: {
		color: "#f6bbff",
		
	  },
	  welcomeBack: {
		fontFamily: FontFamily.satoshiVariableMedium,
		fontWeight: "500",
		fontSize: FontSize.defaultBoldSubheadline_size,
		
	  },
	  text1: {
		color: Color.labelColorDarkPrimary,
	  },
	  johnSmith1: {
		fontSize: FontSize.size_5xl,
		lineHeight: 24,
		fontWeight: "700",
		fontFamily: FontFamily.satoshiVariableBold,
		color:Colors.white,
	  },
	  bell01Icon: {
		width: 30,
		height: 30,
		overflow: "hidden",
	  },
})