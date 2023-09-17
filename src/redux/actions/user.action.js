import axios from 'axios';
import {base_Url} from '../../config/config';
import * as types from '../const/const';
import AsyncStorage from '@react-native-async-storage/async-storage';
import instance from '../../config/httpservice';
import {Alert} from 'react-native';
// import { LOG_IN } from "../const/const";

// ***************************Auth Screen ************************************
export const userLogin = (data,setLoginError) => async dispatch => {
  try {
    const response = await axios.post(`${base_Url}/appuser/login`, data);
    if (response) {
      await AsyncStorage.setItem('Token', response?.data?.access_token);
      dispatch({
        type: types.LOG_IN,
        payload: response?.data?.access_token,
      });
      dispatch({
        type: types.PROFILE,
        payload: response?.data?.user,
      });
      console.log("Login===================",response?.data?.user)
    }
  } catch (error) {
    setLoginError("Invalid Email or Password")
    // Alert.alert('Message', 'Invalid Email or Password', [
    //   {text: 'OK', onPress: () => console.log('OK Pressed')},
    // ]);
    // console.log(JSON.stringify(error));
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
    // Alert.alert('Message', error?.response?.data?.error, [
    //   {text: 'OK', onPress: () => console.log('OK Pressed')},
    // ]);
    console.log(JSON.stringify(error));
    console.log('EROROROOR', JSON.stringify(error?.response?.data?.error));
  }
};
export const Activating = data => async dispatch => {
  try {
    const response = await axios.post(`${base_Url}/appuser/activate`, data);

    if (response) {
      dispatch({
        type: types.LOG_IN,
        payload: response?.data?.access_token,
      });
      dispatch({
        type: types.PROFILE,
        payload: response?.data?.user,
      });
    }
  } catch (error) {
    console.log('EROROROOR', JSON.stringify(error.response));
  }
};
export const setreflection = (data, navigation) => async dispatch => {
  // console.log("object",data)
  try {
    const response = await instance.post(`/appuser/daily-reflection`, data);
    if (response) {
      navigation.navigate('Tab2');
    }
    // alert("hogya")
  } catch (error) {
    console.log(JSON.stringify(error));
  }
};
export const getreflection = data => async dispatch => {
  // console.log("object",data)
  try {
    const response = await instance.get(
      `/appuser/daily-reflections?dated=${data}`,
    );
    if (response) {
      return response;
    }
    // alert("hogya")
  } catch (error) {
    console.log(JSON.stringify(error));
  }
};
export const painscaleSet = (data, navigation) => async dispatch => {
  console.log('object', data);
  try {
    const response = await instance.post(`/appuser/pain-assessment`, data);
    if (response) {
      console.log(response?.data);
      navigation.navigate('PainAnalog');
    }
    // alert("hogya")
  } catch (error) {
    console.log(JSON.stringify(error?.response?.data));
  }
};
export const UpdateProfile = (data, navigation) => async dispatch => {
  console.log('object', data);
  try {
    const response = await instance.put(`/appuser/app-user`, data);
    if (response) {
      navigation.navigate('Tab2');
    }
  } catch (error) {
    console.log(JSON.stringify(error));
  }
};
export const ChangePassword = (data, navigation) => async dispatch => {
  console.log('object', data);
  try {
    const response = await instance.patch(`/appuser/app-user`, data);
    if (response) {
      navigation.navigate('Tab2');
    }
  } catch (error) {
    console.log(JSON.stringify(error));
  }
};
export const Allservey = data => async dispatch => {
  // console.log("object",data)
  try {
    const response = await instance.get(
      `/appuser/health-surveys?content_type=English`,
    );
    if (response) {
      return response;
    }
    // alert("hogya")
  } catch (error) {
    console.log(JSON.stringify(error));
  }
};
export const post_Records_of_health = (data, navigation) => async dispatch => {
  console.log('object', data);
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
export const get_Records_of_health = body => async dispatch => {
  //  alert(date1,date2)
  try {
    const response = await instance.get(
      `/appuser/myrecords?from_date=${body?.date1}&till_date=${body?.date2}`,
    );
    if (response) {
      return response;
    }
    // alert("hogya")
  } catch (error) {
    console.log(JSON.stringify(error));
  }
};
export const get_Records_Body = body => async dispatch => {
  //  alert(date1,date2)
  console.log(body);
  try {
    const response = await instance.get(
      `/appuser/pain-assessment?from_date=${body?.date1}&till_date=${body?.date2}`,
    );
    if (response) {
      return response;
    }
    // alert("hogya")
  } catch (error) {
    console.log(JSON.stringify(error));
  }
};
export const Disover = () => async dispatch => {

  try {
    const response = await instance.get(`/appuser/articles?content_type=English&article_type=Article`);
    if (response) {
      return response;
    }
  } catch (error) {
    console.log(JSON.stringify(error));
  }
};
export const getDailyTask = body => async dispatch => {
  //  alert(date1,date2)
  console.log(body);
  try {
    const response = await instance.get(
      
      `/appuser/daily-tasks?from_date=${body?.date1}&to_date=${body?.date2}&task_type=Article&content_type=English`,
    );
    if (response) {
      return response;
    }
    // alert("hogya")
  } catch (error) {
    console.log(JSON.stringify(error?.response));
  }
};
export const CompleteDailyTask = (body,setModalVisible) => async dispatch => {
  //  alert(date1,date2)
  console.log(body);
  try {
    const response = await instance.patch(
      
      `/appuser/complete-task/${body}`,
    );
    if (response) {
      setModalVisible(true);
      setTimeout(() => {
        setModalVisible(false);
      }, 2000);
    }
    // alert("hogya")
  } catch (error) {
    console.log(JSON.stringify(error?.response));
  }
};
export const RemoveDailyTask = (body) => async dispatch => {
  //  alert(date1,date2)
  console.log(body);
  try {
    const response = await instance.patch(
      
      `/appuser/remove-task/${body}`,
    );
    if (response) {
      alert("removed")
      // setModalVisible(true);
      // setTimeout(() => {
      //   setModalVisible(false);
      // }, 2000);
    }
    // alert("hogya")
  } catch (error) {
    console.log(JSON.stringify(error?.response));
  }
};
export const Questions = (id) => async dispatch => {

  try {
    const response = await instance.get(`/appuser/health-survey/${id}`);
    if (response) {
      return response;
    }
  } catch (error) {
    console.log(JSON.stringify(error));
  }
};
export const forgetPass = (body,navigation) => async dispatch => {

  try {
    const response = await instance.post(`/appuser/forgot`,body);
    if (response) {
      navigation.navigate('OTP')
      console.log("response: " + JSON.stringify(response));
    }
  } catch (error) {
    console.log(JSON.stringify(error));
  }
};
export const OTTP = (body,navigation) => async dispatch => {

  try {
    const response = await instance.post(`/appuser/verifyotp`,body);
    if (response) {
      navigation.navigate("CreateNewPassword")
      console.log("response: " + JSON.stringify(response));
    }
  } catch (error) {
    console.log(JSON.stringify(error?.response));
  }
};
export const createNewPass = (body,navigation) => async dispatch => {

  try {
    const response = await instance.patch(`/appuser/reset`,body);
    if (response) {
      navigation.navigate('Login')
      console.log("response: " + JSON.stringify(response));
    }
  } catch (error) {
    console.log(JSON.stringify(error?.response));
  }
};
export const deleteReflection = (Id) => async dispatch => {

  try {
    const response = await instance.delete(`/appuser/daily-reflection/${Id}`);
    if (response) {
     
    }
  } catch (error) {
    console.log(JSON.stringify(error?.response));
  }
};
export const deleteaccount = (body,navigation,setError) => async dispatch => {

  try {
    const response = await instance.patch(`/appuser/app-user-delete`,body);
    if (response) {
     navigation?.navigate("Tab2")
    }
  } catch (error) {
    setError(error?.response?.msg)
    console.log(JSON.stringify(error?.response));
  }
};
export const CareApi = () => async dispatch => {

  try {
    const response = await instance.get(`appuser/cares?content_type=English`);
    if (response) {
    return response?.data
    }
  } catch (error) {
    setError(error?.response?.msg)
    console.log(JSON.stringify(error?.response));
  }
};