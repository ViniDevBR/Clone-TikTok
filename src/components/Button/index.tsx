import { ButtonContainer } from './styles'

interface IButton {
  title: string
  variant?: 'secondary'
}

export function Button(props: IButton) {
  return(
    <ButtonContainer variant={props.variant}>
      <p>
        {props.title}
      </p>
    </ButtonContainer>
  )
}