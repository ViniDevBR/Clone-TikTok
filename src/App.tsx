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
//CONTEXT
import { ToggleSwitch } from './context/ToggleSwitch'
import { ToggleSwitchProvider } from './context/ToggleSwitch'

export function App() {

  return (
    <ToggleSwitchProvider>
      <ToggleSwitch.Consumer>
        {({ themeMode }) => (
          <ThemeProvider theme={themeMode}>
            <Router>
              <GlobalStyles />
              <Routes>
                <Route path='/' element={<Home />}/>
              </Routes>
            </Router>
          </ThemeProvider>
        )}
      </ToggleSwitch.Consumer>
    </ToggleSwitchProvider>
  )
}
