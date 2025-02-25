import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { DefaultLayout, VerticalLayout, HorizontalLayout, DetachedLayout, FullLayout } from 'layouts';
import PrivateRoute from './PrivateRoute';
import Root from './Root';
import { LayoutTypes } from 'appConstants';
import { useRedux } from 'hooks';

// lazy load all the views

const Login2 = React.lazy(() => import('pages/account/Login2'));
const Logout2 = React.lazy(() => import('pages/account/Logout2'));
const Register2 = React.lazy(() => import('pages/account/Register2'));
const Confirm2 = React.lazy(() => import('pages/account/Confirm2'));
const ForgetPassword2 = React.lazy(() => import('pages/account/ForgetPassword2'));
const LockScreen2 = React.lazy(() => import('pages/account/LockScreen2'));

//Home
const Home = React.lazy(() => import('pages/home/home'));


// - ecommece pages
const EcommerceProducts = React.lazy(() => import('pages/apps/Ecommerce/Products'));



const loading = () => <div className=""></div>;

type LoadComponentProps = {
    component: React.LazyExoticComponent<() => JSX.Element>;
};

const LoadComponent = ({ component: Component }: LoadComponentProps) => (
    <Suspense fallback={loading()}>
        <Component />
    </Suspense>
);

const AllRoutes = () => {
    const { appSelector } = useRedux();

    const { layout } = appSelector((state) => ({
        layout: state.Layout,
    }));

    const getLayout = () => {
        let layoutCls: React.ComponentType = VerticalLayout;

        switch (layout.layoutType) {
            case LayoutTypes.LAYOUT_HORIZONTAL:
                layoutCls = HorizontalLayout;
                break;
            case LayoutTypes.LAYOUT_DETACHED:
                layoutCls = DetachedLayout;
                break;
            case LayoutTypes.LAYOUT_FULL:
                layoutCls = FullLayout;
                break;
            default:
                layoutCls = VerticalLayout;
                break;
        }
        return layoutCls;
    };
    let Layout = getLayout();

    return useRoutes([
        { path: '/intranet/', element: <Root /> },
        {
            // public routes
            path: '/intranet/',
            element: <DefaultLayout />,
            children: [
                {
                    path: 'account',
                    children: [
                        { path: 'login2', element: <LoadComponent component={Login2} /> },
                        { path: 'register2', element: <LoadComponent component={Register2} /> },
                        { path: 'confirm2', element: <LoadComponent component={Confirm2} /> },
                        { path: 'forget-password2', element: <LoadComponent component={ForgetPassword2} /> },
                        { path: 'lock-screen2', element: <LoadComponent component={LockScreen2} /> },
                        { path: 'logout2', element: <LoadComponent component={Logout2} /> },
                    ],
                },
            ],
        },
        {
            // auth protected routes
            path: '/intranet/',
            element: <PrivateRoute roles={'Admin'} component={Layout} />,
            children: [
                {
                    path: 'home',
                    element: <LoadComponent component={Home} />,
                },
                {
                    path: 'apps',
                    children: [
                        {
                            path: 'ecommerce',
                            children: [
                                {
                                    path: 'products',
                                    element: <LoadComponent component={EcommerceProducts} />,
                                },
                            ],
                        },

                    ],
                },
            ],
        },
    ]);
};

export { AllRoutes };
