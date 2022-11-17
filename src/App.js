import logo from './logo.svg';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './views/Home'
import LoginScreen from './views/LoginScreen'
import SignupScreen from "./views/SignupScreen";
import Categories from "./views/Categories";
import Profil from "./views/Profil";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path:'home',
    element: <Home/>
  },
  {
    path: 'connexion',
    element: <LoginScreen/>
  },
  {
    path: 'profil',
    element: <Profil />
  },
  {
    path: 'categories',
    element: <Categories/>
  },
  {
    path: 'signup',
    element: <SignupScreen  />
  }



])

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
