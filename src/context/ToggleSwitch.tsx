import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'
import { DefaultTheme } from 'styled-components'
import theme from '../theme'

interface IToggle {
  themeMode: DefaultTheme
  toggleMode: boolean
  setToggleMode: Dispatch<SetStateAction<boolean>>
}

interface IToggleProvider {
  children: ReactNode
}

export const ToggleSwitch = createContext<IToggle>({} as IToggle)

export function ToggleSwitchProvider({ children }: IToggleProvider) {
  const [toggleMode, setToggleMode] = useState<boolean>(true)

  const themeMode = toggleMode ? theme.dark : theme.light

  const value = {
    toggleMode,
    setToggleMode,
    themeMode
  }

  return(
    <ToggleSwitch.Provider value={value}>
      {children}
    </ToggleSwitch.Provider>
  )
}