import {createBrowserRouter} from "react-router-dom" ; 
import Login from "./componants/Guest/intropages/Login";
import Signup from "./componants/Guest/intropages/Signup";
import Users from "./views/Usres";
import Notfound from "./views/Notfound";
import DefaultLayout from "./componants/DefaultLayout";
import GuestLayout from "./componants/Guest/GuestLayout";
import Dashboard from "./views/Dashboard";
import Account from "./componants/profile/Account";
import DOD from "./views/DOD";
import FunnelLibrary from "./views/FunnelLibrary";
import FunnelBonunses from "./views/FunnelBounses";
import MakeMony from "./views/MakeMony";
import AccountView from "./componants/profile/AccountView";
import AccountEdite from "./componants/profile/edite";
import AccountSetting from "./componants/profile/Setting";
import Payments from "./componants/profile/Payments.jsx";

const router = createBrowserRouter ( [
{
    path: '/' , 
    element : <DefaultLayout /> ,
    children : [ 
        {
            path : '/' , 
            element :  <Dashboard/>
        },
        {
            path:'/Users' , 
            element: <Users/>
        } ,
        {
            path:'/Dashboard' , 
            element: <Dashboard/>
        }
        ,
        {
            path:'/Account/' , 
            element: <Account/> , 
            children : [
                {
                    path:'/Account/View' , 
                    element: <AccountView/>
                } , 
                {
                    path:'/Account/' , 
                    element: <AccountView/>
                } , 
                {
                    path:'/Account/edite' , 
                    element: <AccountEdite/>
                }
                , 
                {
                    path:'/Account/Settings' , 
                    element: <AccountSetting />
                }
                , 
                {
                    path:'/Account/Payments' , 
                    element: <Payments />
                }
            ]
        }
        ,
        {
            path:'/DOD' , 
            element: <DOD/>
        }
        ,
        {
            path:'/FunnelLibrary' , 
            element: <FunnelLibrary/>
        }
        ,
        {
            path:'/FunnelBonunses' , 
            element: <FunnelBonunses/>
        },
        {
            path:'/MakeMoney' , 
            element: <MakeMony/>
        }
    ]
} , 

{
path :'/' , 
element:<GuestLayout /> , 
children : [
    {
        path:'/login' , 
        element: <Login/>
    } , 
    {
        path:'/signup' , 
        element: <Signup/>
    }
]
},
 
{
    path:'*' , 
    element: <Notfound/>
} , 
]); 

export default router ;  