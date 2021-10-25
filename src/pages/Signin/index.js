import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button, Toast, Modal, Provider } from '@ant-design/react-native'
import commonStyle from '../../utils/commonStyle'
import { checkNull } from '../../utils/validator'
import HDInputItem from '../../components/HDInputItem'
import { Actions } from 'react-native-router-flux'

const Signin = () => {
    // 用户名
    const [userName, setUserName] = useState('')
    // 用户名错误信息
    const [userNameErrorMsg, setUserNameErrorMsg] = useState(null)
    // 密码
    const [password, setPassword] = useState('')
    // 密码错误信息
    const [passwordErrorMsg, setPasswordErrorMsg] = useState(null)

    // 登录事件
    const handleSingin = () => {
        
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
                <Text style={styles.headerText}>登录</Text>
            </View>
            <View>
                <HDInputItem placeholder="请输入用户名" clear value={userName} onChange={text => setUserName(text)} required={true} errorMsg={userNameErrorMsg} >用户名</HDInputItem>
            </View>
            <View>
                <HDInputItem placeholder="请输入密码" clear type="password" value={password} onChange={text => setPassword(text)} required={true} errorMsg={passwordErrorMsg}>密码</HDInputItem>
            </View>
            <View style={styles.signinButton}>
                <Button type="primary" onPress={() => handleSingin()}>登录</Button>
            </View>
            <View style={styles.signupText}>
                <Text>没有账号？</Text>
                <Text style={commonStyle.linkText} onPress={() => Actions.signup()}>先注册吧</Text>
            </View>
        </View>
    )
}

export default Signin

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
    signinButton: {
        marginTop: 20,
    },
    signupText: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    }
})