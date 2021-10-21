import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { InputItem } from '@ant-design/react-native'
import commonStyle from '../../utils/commonStyle'

const HDInputItem = (props) => {
    const { type = 'text', errorMsg, value = '', onChange = {}, placeholder = '', required = false, children = (<></>) } = props

    return (
        <View style={commonStyle.lineBottom}>
            <InputItem type={type} placeholder={placeholder} value={value} onChange={onChange}>
                <View style={styles.inputTitle}>
                    <Text style={styles.inputStar}>{required ? '*' : ''}</Text><Text>{children}：</Text>
                </View>
            </InputItem>
            <View style={styles.errorMsgView}>
                {errorMsg ? <Text style={styles.errorMsgText}>{errorMsg}</Text> : <></>}
            </View>
        </View>
    )
}

export default HDInputItem

const styles = StyleSheet.create({
    inputTitle: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    inputStar: {
        width: 20,
        textAlign: 'right',
        color: '#FF0000'
    },

    errorMsgView: {
        alignItems: 'center',
    },
    errorMsgText: {
        color: '#FF0000',
    }
})