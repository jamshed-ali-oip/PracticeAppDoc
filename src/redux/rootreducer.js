import { combineReducers } from 'redux';
import SignupReducar from './Signup/signupReducer';

const rootReducar = combineReducers({    
    signup:SignupReducar,
})

export default rootReducar