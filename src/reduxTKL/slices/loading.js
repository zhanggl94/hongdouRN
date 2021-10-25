import { createSlice } from '@reduxjs/toolkit'

const initialState = false

// 判断是否需要显示加载组件
export const slice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        // 开始加载
        startLoading: () => {
            return true
        },
        // 结束加载
        finishLoading: () => {
            return false
        }
    }
})

// 导出actions
export const { startLoading, finishLoading } = slice.actions

// 导出selectLoading属性
export const selectLoading = state => state.loadingReducer

export default slice.reducer