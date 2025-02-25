import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>

      </Route>
    )
  ) 

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
