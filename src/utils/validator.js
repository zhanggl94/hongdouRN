/**
 * 判断值是否为空(去掉左右两侧空格)
 * @param {string} text 
 * @returns 
 */
export const isNull = text => {
    if (!text.trim()) {
        return true
    }
    return false
}

/**
 * 判断是否为空，并返回message
 * @param {string} text 
 * @param {string} title 
 * @returns 
 */
export const checkNull = (text, title) => {
    if (isNull(text))
        return `请输入${title}`
    return ''
}


export const checkEqual = (oldStr, newStr, title) => {
    if (oldStr !== newStr)
        return `${title}不一致`
    return ''
}


export const valdate = (funcs) => {
    let msg=''
    for(const func in funcs){
        msg = func
    }
}