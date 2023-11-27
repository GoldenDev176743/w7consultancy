import { lazy } from 'react';

// project import
import Loadable from '../components/Loadable';
import AuthLayout from '../layout/AuthLayout';
import GuestGuard from '../utils/route-guard/GuestGuard';
// import GuestGuard from 'utils/route-guard/GuestGuard';

// render - page
const Login = Loadable(lazy(() => import('../pages/Login')))

const LoginRoutes = {
    path: '/',
    children: [
        {
            path: '/',
            element: (
                // <GuestGuard>
                    <AuthLayout/>
                // </GuestGuard>
            ),
            children: [
                {
                    path: '/',
                    element: <Login />
                }
            ]
        }
    ],
   
}

export default LoginRoutes;