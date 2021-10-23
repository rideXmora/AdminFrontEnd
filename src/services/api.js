import getInstance from './instance'


export default {
    login: (data) => getInstance().post('/auth/admin/login', data),
    orgAdminRegister: (data) => getInstance().post('/admin/register/orgAdmin', data),
    payment: (data) => getInstance().post('/orgAdmin/setPayment', data),
    passenger: (data) => getInstance().get('/admin/passenger/all', data),
}