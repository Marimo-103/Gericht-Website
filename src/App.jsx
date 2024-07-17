import React from 'react'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import BlogDetails from './Pages/BlogDetails';
import ChefDetails from './Pages/ChefDetails';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import FAQ from './Pages/FAQ';
import Service from './Pages/Service';
import Team from './Pages/Team';
import Soon from './Pages/Soon';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blogdetails" element={<BlogDetails />} />
      <Route path="/chefdetails" element={<ChefDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/404" element={<Error />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/service" element={<Service />} />
      <Route path="/team" element={<Team />} />
      <Route path="/commingsoon" element={<Soon />} />
    </Route>
  )
);


const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App