import axios from "axios";

// ***************************Auth Screen ************************************
// export const userLogin = (data, setLoading, setError,refRBSheet) => async (dispatch) => {
//   try {
//     setLoading(true)
//     const response = await axios.post(`${base_URL}/user/login`, data)
//     // console.log(response)
//     if (response?.data?.data?.success) {
//       refRBSheet?refRBSheet.current.close():null
//       setTimeout(()=>{
//         setLoading(false)
//         dispatch({
//           type: LOG_IN,
//           payload: response?.data?.data
//         })
//       },200)
//     }
//   }
//   catch (error) {
//     setLoading(false)
//     setError(true)
//     // console.log(error)
//   }
// };


