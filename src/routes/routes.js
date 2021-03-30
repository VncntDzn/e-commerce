
import { Home, PaymentMain } from 'pages';
import Protected from 'pages/Protected';
import { Signin, Signup } from 'pages/auth/';
import { NotFound } from 'pages'

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/',
        auth: false
    },
    {
        name: 'Signin',
        component: Signin,
        path: '/auth/signin',
        auth: false
    },
    {
        name: 'Signup',
        component: Signup,
        path: '/auth/signup',
        auth: false
    },
    {
        name: 'Payment',
        component: PaymentMain,
        path: '/payment',
        auth: true
    },
    {
        name: 'Protected',
        component: Protected,
        path: '/protected',
        auth: true
    },
    {
        name: 'Not Found',
        component: NotFound,
        path: '*',
        auth: false
    },

]


export default routes;