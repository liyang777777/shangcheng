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
        return service.get('/v1/verify')
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
    }
}
   