import service from './index'

export default {
    // login(params) {
    //     return service.post('/user/login',params)
    // },
    // 获取首页数据
    getDataHome() {
        return service.get('/recommend')
    },
    // 搜索
    getDataSearch(value) {
        return service.get('/search')
    },
    // 分类查询
    getDataQuery(id) {
        return service.get('/classification?mallSubId=${id}')
    },
    // 查询获取购物车数据
    getDataCart() {
        return service.get('/getCard')
    },
    // 单个商品详情
    getDataSingle() {
        return service.get('/goods/one?id=${id}')
    },
    //  查询用户订单数量
    getDataUser() {
        return service.get('/myOrder/orderNum')
    },
    //  获取登录注册默认验证码
    getDataCode() {
        return service.get('/verify')
    },
    // 查询用户收货地址
    getDataCustomer() {
        return service.get('/getAddress')
    },
    // 查询默认收货地址
    getDataDefault() {
        return service.get('/getDefaultAddress')
    },
    // 查询我的收藏
    getDataCollection() {
        return service.get('/collection/list')
    },
    // 订单查询
    getDataOrquery() {
        return service.get('/getMyOrder')
    },
    // 查询已评价
    getDataEvaluated() {
        return service.get('/alreadyEvaluated')
    },
    // 查询未评价
    getDataNotEvaluated() {
        return service.get('/tobeEvaluated')
    },
    // 购物车加减商品
    getEditCart(count, id, mallPrice) {
        return service.post('/editCart', {
            count,
            id,
            mallPrice
        })
    },
    // 购物车商品删除
    getDeleteShop(id) {
        return service.post('/deleteShop', {
            id
        })
    },
    // 购物车支付页面
    getder(address, tel, orderld, totalPrice, idDirect, count) {
        return service.post('/order', {
            address,
            tel,
            orderld,
            totalPrice,
            idDirect,
            count
        })
    },
    // 收藏单个商品
    getCollection(goods) {
        return service.post('/collection', {
            goods
        })
    },
    // 取消收藏
    getCancelCollection(id) {
        return service.post('/cancelCollection', {
            id
        })
    },
    // 查询商品是否已收藏
    getIsCollection(id) {
        return service.post('/isCollection', {
            id
        })
    },
    // 加入购物车
    getAddShop(id) {
        return service.post('/addShop', {
            id
        })
    },
// 退出登录
    getLoginOut() {
        return service.post('/loginOut')
    },
    // 获取用户信息
    getQueryUser() {
        return service.post('/queryUser')
    },
    // 修改保存用户信息
    getSaveUser() {
        return service.post('/saveUser', {
            year,
            month,
            day,
            id,
            nickname
        })
    },
    // 商品评论
    getGoodsOne() {
        return service.post('/goodsOne/comment', {
            id,
            rate,
            content,
            anonymous,
            _id,
            order_id,
            image
        })
    },
    // 设置默认收货地址
    getSetDefaultAddress() {
        return service.post('/setDefaultAddress',{
            id
        })
    },
    // 增加收货地址
    getName() {
        return service.post('/address', {
            name,
            tel,
            address,
            isDefault,
            province,
            city,
            county,
            addressDetail,
            areaCode,
            id
        })
    },
    // 删除地址
    getDeleteAddress() {
        return service.post('/deleteAddress',{
            id
        })
    },
    // 注册
    getRegister() {
        return service.post('/register',{
            nickname,
            password,
            verify
        })
    },
    // 登录
    getLogin() {
        return service.post('/login',{
            nickname,
            password,
            verify
        })
    },
    // 查询单条评论
    getEluateOne() {
        return service.post('/evaluateOne',{
            id,
            _id
        })
    }
}
