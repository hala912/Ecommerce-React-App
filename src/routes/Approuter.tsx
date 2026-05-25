import MainLayout from '../layouts/main_layout/main_layout'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from '../pages/Home';
import Categories from '../pages/Categories';
import Product from '../pages/product';

const router = createBrowserRouter([
  { path: "/",
     element: <MainLayout /> ,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "categories",
        element: <Categories />
      },
      {
        path: "product",
        element: <Product />
      }
    ]
  },
]);

const Approuter = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default  Approuter;