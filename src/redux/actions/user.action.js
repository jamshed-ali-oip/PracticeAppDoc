import axios from "axios";
import { base_Url } from "../../config/config";
import * as types from "../const/const"
// import { LOG_IN } from "../const/const";

// ***************************Auth Screen ************************************
export const userLogin = (data) => async (dispatch) => {
    try {

        const response = await axios.post(`${base_Url}/appuser/login`, data)
        console.log(response)
        // alert("login horaha hai  bhai ")
        console.log("================================================", response?.data?.access_token)

        if (response) {
            dispatch({
                type: types.LOG_IN,
                payload: response?.data?.access_token
            })
            // alert("workng")
        }
    }
    catch (error) {
        // setLoading(false)
        // setError(true)
        console.log(error)
        // alert("nhi horaha")
    }
};
export const Register = (data, navigation) => async (dispatch) => {
    try {

        const response = await axios.post(`${base_Url}/appuser/register`, data)
        // console.log(response)


        if (response) {
            console.log("ppppppppppppppppppppppppppppppppp", response)
            dispatch({
                type: types.ACTIVATION_TOKEN,
                payload: response?.data?.activation_token
            })
            // alert("workng")
            navigation.navigate('VerifyEmail')
        }
    }
    catch (error) {
        // setLoading(false)
        // setError(true)
        console.log("EROROROOR", error)
        // alert("nhi horaha")
    }
};
export const Activating = (data) => async (dispatch) => {
    console.log("00000000000000000000000000000000000000000000000", data)
    try {

        const response = await axios.post(`${base_Url}/appuser/activate`, data)
        // console.log(response)


        if (response) {

            dispatch({
                type: types.LOG_IN,
                payload: response?.data?.msg
            })
            // alert("workng")

        }
    }
    catch (error) {
        // setLoading(false)
        // setError(true)
        console.log("EROROROOR", JSON.stringify(error))
        alert(JSON.stringify(error))
    }
};
// export const registerUser = (data, navigation, setcode, setLoading) => async (dispatch) => {
//     try {
//       console.log(data);
//       const response = await instance.post(`${base_URL}/auth/signup`, data);
//       console.log('register api ', response);
//       const token = response?.data?.data?.tokens?.accessToken
//       console.log("tokennnnn+======>", token)
//       await AsyncStorage.setItem("Token", token);
  
//       if (response?.data) {
//         setcode(response)
//         setLoading(false)
//         // alert("your code is" + response?.data?.data?.token?.shot_code)
//         dispatch({
//           type: types.REGISTER,
//           payload: response?.data,
//         });
//         dispatch({
//           type: types.USER,
//           payload: response?.data?.data?.user,
//         });
//         navigation.navigate("OttpSignup")
//       }
//     } catch (error) {
//       setLoading(false)
//       console.log('registererror', error);
//     }
//   };

// export const VehicleInfoAdd = (data, navigation) => async (dispatch) => {

//     try {
//       const response = await instance.post(`/vehicle`, data);
//       console.log('ottp ', response);
//       if (response?.data) {
//         navigation.navigate("Scanner")
//       }
//     } catch (error) {
//       console.log('ottp', error.response.data);
//     }
  
//   };
