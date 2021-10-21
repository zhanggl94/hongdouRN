import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button } from '@ant-design/react-native'
import commonStyle from '../../utils/commonStyle'
import { checkNull } from '../../utils/validator'
import HDInputItem from '../../components/HDInputItem'
import { Actions } from 'react-native-router-flux'

const Signup = () => {
    // 用户名
    const [userName, setUserName] = useState('')
    // 用户名错误信息
    const [userNameErrorMsg, setUserNameErrorMsg] = useState(null)
    // 密码
    const [password, setPassword] = useState('')
    // 密码名错误信息
    const [passwordErrorMsg, setPasswordErrorMsg] = useState(null)
    // 确认密码
    const [confirmPassword, setconfirmPassword] = useState('')
    // 确认密码名错误信息
    const [confirmPasswordErrorMsg, setconfirmPasswordErrorMsg] = useState(null)

    // 注册事件
    const handleSignup = () => {
        console.log(('username', userName));
        const checkUserNameErrorMsg = checkNull(userName, '用户名')
        const checkPasswordErrorMsg = checkNull(password, '密码')

        checkUserNameErrorMsg !== userNameErrorMsg ? setUserNameErrorMsg(checkUserNameErrorMsg) : ''
        checkPasswordErrorMsg !== passwordErrorMsg ? setPasswordErrorMsg(checkPasswordErrorMsg) : ''

        if (checkUserNameErrorMsg || checkPasswordErrorMsg) {
            return false
        }


    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>注册</Text>
            </View>
            <View>
                <HDInputItem placeholder="请输入用户名" clear value={userName} onChange={text => setUserName(text)} required={true} errorMsg={userNameErrorMsg} >用户名</HDInputItem>
            </View>
            <View>
                <HDInputItem placeholder="请输入密码" clear type="password" value={password} onChange={text => setPassword(text)} required={true} errorMsg={passwordErrorMsg}>密码</HDInputItem>
            </View>
            <View>
                <HDInputItem placeholder="请再次输入密码" clear type="password" value={password} onChange={text => setPassword(text)} required={true} errorMsg={passwordErrorMsg}>确认密码</HDInputItem>
            </View>
            <View style={styles.signupButton}>
                <Button type="primary" onPress={() => handleSignup()}>注册</Button>
            </View>
            <View style={styles.signinText}>
                <Text>已有账号？去</Text>
                <Text style={commonStyle.linkText} onPress={() => Actions.signin()}>登录</Text>
                <Text>吧</Text>
            </View>
        </View>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 20,
        paddingTop: 80,
    },
    header: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#158EE9',
    },
    signupButton: {
        marginTop: 20,
    },
    signinText: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    }
})