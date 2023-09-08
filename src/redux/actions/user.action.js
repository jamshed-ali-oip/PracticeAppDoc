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



