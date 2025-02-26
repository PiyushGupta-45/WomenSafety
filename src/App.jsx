import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/Home';
import Layout from './Layout';
import Contact from './Pages/Contact';
import Resources from './Pages/Resources';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<HomePage/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/resources' element={<Resources/>}/>
      
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
