import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/Home';
import Layout from './Layout';
import Contact from './Pages/Contact';
import Resources from './Pages/Resources';
import SafeZones from './Pages/SafeZones';
import HelplineNumbers from './Components/Helpline';
import Legal from './Components/Legal';
import Signin from './Pages/Signin';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<HomePage/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/resources' element={<Resources/>}/>
      <Route path='/safe-locations' element={<SafeZones/>}/>
      <Route path='/helpline' element={<HelplineNumbers/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/legal' element={<Legal/>}/>
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
