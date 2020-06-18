import service from './index'

export default {
    login(params) {
        return service.post('/user/login',params)
    },
    getDataHome() {
        return service.get('/recommend')
    }
}