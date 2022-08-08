import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import {
  CountdownContainer,
  CountdownStartBtn,
  FormContainer,
  HomeContainer,
  InputTask,
  MinutesAmount,
  Separator,
} from './styles'

export function Home() {
  const { register, handleSubmit } = useForm()
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <InputTask
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para seu projeto"
          />
          <datalist id="task-suggestions">
            <option value="projeto 1" />
            <option value="projeto 2" />
            <option value="projeto 3" />
            <option value="projeto 4" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmount
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />
          <span>minutos</span>
        </FormContainer>
        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <CountdownStartBtn type="submit">
          <Play size={24} />
          Começar
        </CountdownStartBtn>
      </form>
    </HomeContainer>
  )
}
