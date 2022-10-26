import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Components/Home/Home';
import Main from './Layout/Main';
import Login from './Components/Shared/Login/Login';
import Signup from './Components/Shared/Signup/Signup'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
          {
              path: '/',
              element: <Home></Home>
          },
          {
            path: '/login',
            element: <Login></Login>
          },
          {
            path: '/signup',
            element: <Signup></Signup>
          }
      ]
  }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
