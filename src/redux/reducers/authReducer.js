import { CONSULT_DATA, FORGET_INNER_PASSWORD, ID_CARD_IMAGE, LOG_IN, LOG_OUT, PROFILE_IMAGE, REGISTER, SEND_OTP, SET_PAGE_FOUR, SET_PAGE_ONE, SET_PAGE_THREE, SET_PAGE_TWO } from '../const/const';




const InitialState = {
  credential: {},

};

const authReducer = (state = InitialState, action) => {
  // console.log("here",action.type)
  switch (action.type) {
    // case LOG_IN:
    //   console.log(action.payload);
    //   return {
    //     ...state,
    //     credential: action.payload,
    //   };

    default:
      return state;
  }
};

export default authReducer;
