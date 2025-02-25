import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout'; // Make sure Layout is defined
import HomePage from './Pages/Home';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />, // Ensure Layout is correctly imported
      children: [
        {
          path: '/',
          element: <HomePage />
        }
      ]
    }
  ]
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
