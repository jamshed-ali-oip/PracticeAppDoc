import { FIRST_FORM,SECOND_FORM,THIRD_FORM,FOURTH_FORM } from "./signupType"

export const firstform = (payload) => {
    // console.log("payload", payload)
    return{
        type:FIRST_FORM,
        payload:payload
    }
}

export const secondform = (payload) => {
    
    return{
        type:SECOND_FORM,
        payload:payload
    }
}

export const thirdform = (payload) => {
    return{
        type:THIRD_FORM,
        payload:payload
    }
}

export const fourthform = (payload) => {
    return{
        type:FOURTH_FORM,
        payload:payload
    }
}


