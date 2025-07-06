import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './layout/Root.tsx';
import Products from './components/pages/Products.tsx';
import Home from './components/pages/Home.tsx';
import { Provider } from 'react-redux';
import store from './redux/store.ts';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/products",
        element: <Products/>
      }
    ]
  },
]);




createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Provider store={store}>
      <RouterProvider router={router} />
     </Provider>
  </StrictMode>,
)
