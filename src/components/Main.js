import React from 'react'
import Signup from './Signup'
import Search from './Search'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import EmployeeData from './EmployeeData'

const Main = () => {
    const appRouter= createBrowserRouter([
        {
            path:"/" ,
            element:<Signup/>,
        },
        {
            path:"/Search" ,
            element:<Search/>
        },
        {
            path:"/employee" ,
            element:<EmployeeData/>
        }
    ])
    return (
    <div>
          <RouterProvider router={appRouter}/>
    </div>

    )


}

export default Main
