import { useContext } from 'react'
import { ToggleSwitch } from '../context/ToggleSwitch'

export function useToggle() {
  const context = useContext(ToggleSwitch)

  return context
}