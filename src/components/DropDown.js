import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput,
    ImageBackground,
    SafeAreaView,
    Keyboard
  } from 'react-native';
  import React, {useState, useCallback} from 'react';
//   import Ionicons from 'react-native-vector-icons/Ionicons';
//   import {Fonts} from '../utils/Fonts';
  
  import DropDownPicker from 'react-native-dropdown-picker';

  const DropDown = ({navigation,props,placeholder,style,items,open,value,setOpen,setValue,setItems,onPress,marginLeft,marginRight,dropDownContainerStyle,height,onChangeValue}) => {



    return (

<>
<DropDownPicker
      maxHeight={120}
      placeholder={placeholder?placeholder:'hahha'}
      placeholderStyle={{color: open ? 'black' : 'lightgrey'}}
      
      items={items}
      containerStyle={{height: 40, width: '90%', alignSelf:  'center'}}
      textStyle={{ color: value === null ? 'lightgrey' : 'black'}}
      style={{
        
        backgroundColor: open ? '#F6F6F6' : 'transparent',
        borderColor:  'lightgrey',
        borderRadius: 10,
        marginTop:10,
        height:55,
        marginLeft:marginLeft ? marginLeft :0,
        marginRight:marginRight ? marginRight :0,
        
...style
      }}
      
      listItemLabelStyle={{color: open ? 'black' : 'lightgrey', }}
      onOpen={() => Keyboard.dismiss()}


      open={open}
      value={value}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      // onSelectItem={items => {
      //   console.log(items.label);
      // }}
      onChangeValue={onChangeValue}
      onPress={()=>onPress()}


      dropDownContainerStyle={{
        backgroundColor: '#FFFF',
        borderColor: 'transparent',
        height: height ? height : 100,
        zIndex:999999,
        position: 'absolute',
        
      }}
      listMode='SCROLLVIEW'
    
    />
</>



);
};

export default DropDown;

const styles = StyleSheet.create({});