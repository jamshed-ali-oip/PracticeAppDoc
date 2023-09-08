import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Appstack from './AppStack'
import Authstack from './AuthStack'
import { useSelector } from 'react-redux'
const Main = () => {
    const token = useSelector((state) => state?.auth?.Access_token)
    // const data = JSON.stringify(token?.auth)
    // alert(token)
    // console.log("===========================================================", token)
    return (
        <>
            {token == null ? <Authstack /> : <Appstack />}
        </>
    )
}

export default Main

const styles = StyleSheet.create({})