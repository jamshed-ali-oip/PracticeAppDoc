import {
    FIRST_FORM,
    SECOND_FORM,
    THIRD_FORM,
    FOURTH_FORM,
    
  } from './signupType';
  
  const initialState = {
    formone: {
        first_name : '',
        last_name : '',
        gender : '', 
        dob : '',
        marital_status : '', 
        email : '',
        password : ''
    },
  
    formtwo: {
  
        user_type : '', 
        linguistic_prefrences : '', 
        education_level : '',
    },
  
  
    formthree: {
        cancer_type: '', 
        tumor_stage: '', 
        current_cancer_treatment: '', 
        other_conditions: '', 
        severity_of_symptoms : '', 
        regular_checkup_reminders : '',
        regular_doctors_appointments : '',

    },
    formfour: {
        signature : 'value',
        privacy_policy : true,
        send_agreement_to_email : true
    },
   
  };
  
  const SignupReducar = (state = initialState, action) => {
    switch (action.type) {
      case FIRST_FORM:
          console.log('action.payload1', action.payload);
        return {
          ...state,
          formone: action.payload,
        };
        case SECOND_FORM:
          // console.log('action.payload1', action.payload);
        return {
          ...state,
          formtwo: action.payload,
  
  
        };
        
        case THIRD_FORM:
          // console.log('action.payload1', action.payload);
        return {
          ...state,
          formthree: action.payload,
        };
        case FOURTH_FORM:
          // console.log('action.payload1', action.payload);
        return {
          ...state,
          formfour: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default SignupReducar;