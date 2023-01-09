//REACT ROUTER DOM
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { Home } from './pages/Home'
import { GlobalStyles } from './styles/globalStyles'

export function App() {

  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </Router>
  )
}
