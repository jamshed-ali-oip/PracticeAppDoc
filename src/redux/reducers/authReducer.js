import * as types from "../const/const"

const InitialState = {
  Access_token: null,
  formone: {},
  formtwo: {},
  formthree: {},
  activation_token: null

};

const authReducer = (state = InitialState, action) => {
  console.log("here", action.type)
  switch (action.type) {
    case types.LOG_IN:
      console.log(action.payload);
      return {
        ...state,
        Access_token: action.payload,
      };

    case types.LOG_OUT:
      console.log(action.payload);
      return {
        ...state,
        Access_token: action.payload,
      };
    case types.FORMONE:
      console.log(action.payload);
      return {
        ...state,
        formone: action.payload,
      };
    case types.FORMTWO:
      console.log(action.payload);
      return {
        ...state,
        formtwo: action.payload,
      };
    case types.FORMTHREE:
      console.log(action.payload);
      return {
        ...state,
        formthree: action.payload,
      };
    case types.ACTIVATION_TOKEN:
      console.log(action.payload);
      return {
        ...state,
        activation_token: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
