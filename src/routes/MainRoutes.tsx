import { lazy } from 'react';

// project import
import Loadable from '../components/Loadable';
import MainLayout from '../layout/MainLayout';
import AuthGuard from '../utils/route-guard/AuthGuard';

// render - page
const Home = Loadable(lazy(() => import('../pages/home')));
const Register = Loadable(lazy(() => import('../pages/register')));
const Leads = Loadable(lazy(() => import('../pages/leads')));
const LeadsEdit = Loadable(lazy(() => import('../pages/leadsedit')));
const Negotiate = Loadable(lazy(() => import('../pages/negotiate')));
const Clients = Loadable(lazy(() => import('../pages/clients')));
const Prepare = Loadable(lazy(() => import('../pages/prepare')));
const Contract = Loadable(lazy(() => import('../pages/contract')));
const Vehicle = Loadable(lazy(() => import('../pages/vehicle')));
const Schedule = Loadable(lazy(() => import('../pages/schedule')));
const Agendado = Loadable(lazy(() => import('../pages/agendado')));

const MainRoutes = {
    path: '/',
    children: [
        {
            path: '/',
            element: (
                // <AuthGuard>
                    <MainLayout/>
                // </AuthGuard>
            ),
            children: [
       
                {
                    path: 'home',
                    element: <Home />
                },
                {
                    path: 'register',
                    element: <Register />
                },
                {
                    path: 'leads',
                    element: <Leads />
                },
                {
                    path: 'leadsedit',
                    element: <LeadsEdit />
                },
                {
                    path: 'negotiate',
                    element: <Negotiate />
                },
                {
                    path: 'clients',
                    element: <Clients />
                },
                {
                    path: 'prepare',
                    element: <Prepare />
                },
                {
                    path: 'contract',
                    element: <Contract />
                },
                {
                    path: 'vehicle',
                    element: <Vehicle />
                },
                {
                    path: 'schedule',
                    element: <Schedule />
                },
                {
                    path: 'agendado',
                    element: <Agendado />
                },
        
            ]
        }
    ],
    
}

export default MainRoutes;