import { AllPost, Favorites, Home, UserProfile, Signin, Signup, ForgotPassword, SinglePost, Orders, Credits, NotFound } from 'pages';

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
        name: 'User Profile',
        component: UserProfile,
        path: '/profile/:email',
        auth: true
    },
    {
        name: 'All Post',
        component: AllPost,
        path: '/all-posts',
        auth: true
    },
    {
        name: 'Single Post',
        component: SinglePost,
        path: '/product/single-post/:docID',
        auth: true
    },
    {
        name: 'Orders',
        component: Orders,
        path: '/checkout',
        auth: true
    },
    {
        name: 'Credits',
        component: Credits,
        path: '/credits',
        auth: false
    },
    {
        name: 'Favorites',
        component: Favorites,
        path: '/favorites',
        auth: false
    },
    {
        name: 'Not Found',
        component: NotFound,
        path: '*',
        auth: false
    },
]


export default routes;