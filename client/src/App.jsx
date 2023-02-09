// React
import {useState, useEffect} from 'react';

// Styling
import './sass/Main.scss';

// React Router DOM
import {Route, Routes, useNavigate} from 'react-router-dom';

// Layouts
import Navbar from './layouts/Navbar';

//Pages
import Login from './pages/Login';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    if(!loggedIn) {
      navigate('/login')
    }
  }, [loggedIn, navigate])

  return (
    <div className="App">
        {loggedIn && (<Navbar />)}
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
    </div>
  )
}

export default App
