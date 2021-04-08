
import { Home, PaymentMain, UserProfile } from 'pages';
import Protected from 'pages/Protected';
import { Signin, Signup, ForgotPassword } from 'pages/auth/';
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
        name: 'Forgot Password',
        component: ForgotPassword,
        path: '/auth/forgot-password',
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
        name: 'User Profile',
        component: UserProfile,
        path: '/profile',
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