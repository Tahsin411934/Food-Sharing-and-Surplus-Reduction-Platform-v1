import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layout/Root";
import Login from "../Auth/Login/Login";
import Signup from "../Auth/SignUp/Signup";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import AddFood from "../Pages/AddFood/AddFood";
import HomeLayout from "../Layout/HomeLayout";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import MyFoods from "../Pages/MyFoods/MyFoods";
import MyFoodRequest from "../Pages/MyFoodRequest/MyFoodRequest";
import UpdateFood from "../Pages/UpdateFood/UpdateFood";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement:<ErrorPage/>,
      children: [
        {
          path: "/",
          element: <HomeLayout/>
        },
        {
          path:"/login",
          element: <Login></Login>
        },
        {
          path: "/signUp",
          element: <Signup/>
        },
        {
          path: "/AvailableFoods",
          element: <AvailableFoods></AvailableFoods>,
          loader: ()=>fetch('https://food-sharing-website-server-beta.vercel.app/Food/available' )
        },
        {
          path: "/AddFood",
          element:<PrivateRoute><AddFood/></PrivateRoute> 
        },
        {
          path:"/viewDetails/:id",
          element: <PrivateRoute><ViewDetails/></PrivateRoute> ,
         loader: ({params})=> fetch(`https://food-sharing-website-server-beta.vercel.app/Foods/${params.id}`, {credentials: 'include'} )
        }, 
        {
          path:"/MyFoods/:email",
          element:<PrivateRoute><MyFoods/></PrivateRoute> ,
         loader: ({params})=> fetch(`https://food-sharing-website-server-beta.vercel.app/allFood/${params?.email}` , {credentials: 'include'})
        },
        {
          path:"/MyFoodsRequest/:email",
          element:<PrivateRoute><MyFoodRequest/></PrivateRoute> ,
          loader: ({params})=> fetch(`https://food-sharing-website-server-beta.vercel.app/MyRequestFoods/${params.email} ` , {credentials: 'include'})
        },
        {
          path:"/MyFoods/request/:id",
          element:<PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>  ,
          loader: ({params})=> fetch(`https://food-sharing-website-server-beta.vercel.app/Foods/${params.id}`)
        },
        {
          path:"/req",
          element: <Req
        }
      ]
    },
  ]);



export default router;