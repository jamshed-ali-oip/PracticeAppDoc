import axios from 'axios';
import {base_Url} from '../../config/config';
import * as types from '../const/const';
import AsyncStorage from '@react-native-async-storage/async-storage';
import instance from '../../config/httpservice';
// import { LOG_IN } from "../const/const";

// ***************************Auth Screen ************************************
export const userLogin = data => async dispatch => {
  try {
    const response = await axios.post(`${base_Url}/appuser/login`, data);
    if (response) {
      await AsyncStorage.setItem('Token', response?.data?.access_token);
      dispatch({
        type: types.LOG_IN,
        payload: response?.data?.access_token,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const Register = (data, navigation) => async dispatch => {
  try {
    const response = await axios.post(`${base_Url}/appuser/register`, data);

    if (response) {
      dispatch({
        type: types.ACTIVATION_TOKEN,
        payload: response?.data?.activation_token,
      });
      navigation.navigate('VerifyEmail');
    }
  } catch (error) {
    console.log('EROROROOR', error);
  }
};
export const Activating = data => async dispatch => {
  try {
    const response = await axios.post(`${base_Url}/appuser/activate`, data);

    if (response) {
      dispatch({
        type: types.LOG_IN,
        payload: response?.data?.msg,
      });
    }
  } catch (error) {
    console.log('EROROROOR', JSON.stringify(error));
  }
};
export const setreflection = (data, navigation) => async dispatch => {
  // console.log("object",data)
  try {
    const response = await instance.post(`/appuser/daily-reflection`, data);
    if (response) {
      navigation.navigate('DailyReflection1');
    }
    // alert("hogya")
  } catch (error) {
    console.log(JSON.stringify(error));
  }
};
export const getreflection = (data) => async dispatch => {
    // console.log("object",data)
    try {
      const response = await instance.get(`/appuser/daily-reflections?dated=${data}`);
      if (response) {
        return response
      }
      // alert("hogya")
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };
  export const painscaleSet = (data, navigation) => async dispatch => {
    console.log("object",data)
    try {
      const response = await instance.post(`/appuser/pain-assessment`, data);
      if (response) {
        navigation.navigate('PainAnalog');
      }
      // alert("hogya")
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };
  export const UpdateProfile = (data,navigation) => async dispatch => {
    console.log("object",data)
    try {
      const response = await instance.put(`/appuser/app-user`, data);
      if (response) {
        navigation.navigate("Tab2")
      }
      
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };
  export const ChangePassword = (data,navigation) => async dispatch => {
    console.log("object",data)
    try {
      const response = await instance.patch(`/appuser/app-user`, data);
      if (response) {
        navigation.navigate("Tab2")
      }
      
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };
  export const Allservey = (data) => async dispatch => {
    // console.log("object",data)
    try {
      const response = await instance.get(`/appuser/health-surveys?content_type=English`);
      if (response) {
        return response
      }
      // alert("hogya")
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };
  export const post_Records_of_health = (data, navigation) => async dispatch => {
    console.log("object",data)
    try {
      const response = await instance.post(`/appuser/myrecords`, data);
      if (response) {
        navigation.navigate('Tab2');
      }
      // alert("hogya")
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };
  export const get_Records_of_health = (body) => async dispatch => {
//  alert(date1,date2)   
    try {
      const response = await instance.get(`/appuser/myrecords?from_date=${body?.date1}&till_date=${body?.date2}`);
      if (response) {
       return response
      }
      // alert("hogya")
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };