/**
 * 加载共通组件
 * 使用reduxTKL来控制组件是否显示
 */
import { ActivityIndicator } from '@ant-design/react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { Text, View, StyleSheet } from 'react-native'
import { selectLoading } from '../../reduxTKL/slices/loading'

const Loading = ({ loadingText = '加载中...' }) => {
    const isLoading = useSelector(selectLoading)
    return (
        isLoading ? <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" />
            <Text style={styles.loadingText}>{loadingText}</Text>
        </View> : <></>
    )
}

export default Loading

const styles = StyleSheet.create({
    loadingContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 999,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.8,
        backgroundColor: '#cccccc',
    },
    loadingText: {
        marginTop: 10,
        color: '#000000'
    },
})