const baseUrl = {
    signin: '/signin', // 登陆
    signup: '/signup', // 注册
    userEdit: '/user/edit', // 修改用户信息
    billType: { // 账单类型
        select: '/billtype/select',
        create: '/billtype/create',
        edit: '/billtype/edit',
        delete: '/billtype/delete',
    },
    payType: { // 支付类型
        select: '/paytype/select',
        create: '/paytype/create',
        edit: '/paytype/edit',
        delete: '/paytype/delete',
    },
    carBrand: { // 汽车品牌
        select: '/carbrand/select',
        create: '/carbrand/create',
        edit: '/carbrand/edit',
        delete: '/carbrand/delete',
    },
    car: { // 汽车信息
        select: '/car/select',
        create: '/car/create',
        edit: '/car/edit',
        delete: '/car/delete',
    },
}

export default baseUrl;