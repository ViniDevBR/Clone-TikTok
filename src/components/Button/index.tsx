import { ReactNode } from 'react'
import { ButtonContainer } from './styles'

interface IButton {
  children: ReactNode
  width?: string
  height?: string
  variant?: 'secondary' | 'terciary'
}

export function Button(props: IButton) {
  return(
    <ButtonContainer width={props.width} height={props.height} variant={props.variant}>
      {props.children}
    </ButtonContainer>
  )
}