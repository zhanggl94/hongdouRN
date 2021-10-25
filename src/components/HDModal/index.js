import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Modal } from '@ant-design/react-native'

const index = () => {
    return (
        <View>
            <Text>index Page</Text>
        </View>
    )
}

export default index

// 错误信息提示框
export const modalError = errMsg => Modal.alert(
    (<Text style={styles.hdModalError}>错误</Text>), // title
    errMsg, // 错误信息
    [{ 'text': '确定', style: 'ok' }]) // 确定按钮

const styles = StyleSheet.create({
    hdModalError: {
        color: '#FF0000'
    }
})