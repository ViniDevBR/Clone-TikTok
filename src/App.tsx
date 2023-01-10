//REACT ROUTER DOM
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
//PAGES
import { Home } from './pages/Home'
//STYLED-COMPONENTS
import { GlobalStyles } from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

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
