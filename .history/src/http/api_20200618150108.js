import service from './index'

export default {
    login(params) {
        return service.post('/user/login',params)
    },
    allArticle() {
        return service.get('/recommend)
    }
}