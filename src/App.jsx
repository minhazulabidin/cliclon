import { Helmet } from 'react-helmet'
import './App.css'
import Navbar from './Components/Header/Navbar/Navbar';
import Home from './Pages/Home';

function App() {


  return (
    <>
      <Navbar />
      <Home/>
    </>
  )
}

export default App
