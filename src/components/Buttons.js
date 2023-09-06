import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

const Buttons = () => {
  return (
    <View>
    <LinearGradient
      style={[styles.buttons, styles.buttonsPosition]}
      locations={[0, 1]}
      colors={["#bf6bbb", "#716eaa"]}
      useAngle={true}
      angle={180}
    >
      <TouchableOpacity
        style={[styles.pressable, styles.parentFlexBox]}
        // onPress={() => navigation.navigate("Relax1")}
      >
        <View >
          <Text style={styles.button1}>Start The Journey</Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
    </View>
  )
}

export default Buttons

const styles = StyleSheet.create({
    buttonsPosition: {
        borderRadius:40,
        width: 343,
        alignSelf:'center',
        position: "absolute",
      },
      buttons: {
        top: '165%',
        height: 49,
      },
      pressable: {
        borderRadius: Border.br_47xl,
        height: "100%",
        backgroundColor: "transparent",
        width: "100%",
      },
      parentFlexBox: {
        alignItems: "center",
        justifyContent: "center",
      },
      button1: {
        fontSize: FontSize.size_base,
        fontFamily: FontFamily.poppinsSemibold,
        color: Color.labelColorDarkPrimary,
        fontWeight: "bold",
        textAlign: "center",
        lineHeight: 20,
      },
})