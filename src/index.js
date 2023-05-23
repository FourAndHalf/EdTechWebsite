import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom';


import App from './App';



    
    
        
        const router = createBrowserRouter(
          createRoutesFromElements(
            <Route path='/' element={<App/>}>
              <Route index element={<Home/>}/>
              
              <Route path='about' element={<About/>}/>
              
          
              
              
              </Route>
          
              
          
          
           
          
          )
          
          )
          const root = ReactDOM.createRoot(document.getElementById('root'));
          root.render(
           
            <RouterProvider router ={router}/>
          
          );
                    
        
        
          
         
        
 
