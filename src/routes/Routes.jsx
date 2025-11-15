import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Feedback from "../components/Feedback";
import Treatments from "../components/Treatments";
import Details from "../components/Details";
import PrivateRoute from "../components/PrivateRoute";
import Login from "../components/Login";
import Register from "../components/Register";
import Appointments from "../components/Appointments";

export const routes = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : async () => {
                    const res = await fetch('/service.json');
                    const data = res.json()
                    return data;
                }
            },{
                path : '/client',
                element : <Feedback></Feedback>,
                loader : async () => {
                    const res = await fetch('/happyClients.json');
                    const data = await res.json()
                    return data;
                }
            },{
                path : '/allTreatments',
                element : <Treatments></Treatments>,
                loader : async () => {
                    const res = await fetch('/service.json');
                    const data = await res.json()
                    return data;
                }
            },{
                path : '/details/:ids',
                element : <PrivateRoute>
                    <Details></Details>
                </PrivateRoute>,
                loader : async ({params}) => {
                    const res = await fetch('/service.json');
                    const data = await res.json() 
                    const find = data.find(item => item.id === parseInt(params.ids))
                    return find;
                }
            },{
                path : '/login',
                element : <Login></Login>
            },{
                path : '/register',
                element : <Register></Register>
            },{
                path : '/MyAppointments',

                element : <PrivateRoute>
                    <Appointments></Appointments>

                </PrivateRoute>
            }
        ]
    }
])