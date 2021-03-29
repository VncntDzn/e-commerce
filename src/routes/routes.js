
import { Home, PaymentMain } from 'pages';
import Protected from 'pages/Protected';
import { Signin, Signup } from 'pages/auth/';

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
        auth: false
    },
    {
        name: 'Protected',
        component: Protected,
        path: '/protected',
        auth: true
    },
]

export default routes;