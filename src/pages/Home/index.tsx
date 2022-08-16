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

interface FormData {
  task: string
  minutesAmount: number
}

export function Home() {
  const { register, handleSubmit, watch, reset } = useForm<FormData>({
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  function handleCreateNewCycle(data: any) {
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <InputTask
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para seu projeto"
            {...register('task')}
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
            {...register('minutesAmount', { valueAsNumber: true })}
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
        <CountdownStartBtn type="submit" disabled={isSubmitDisabled}>
          <Play size={24} />
          Começar
        </CountdownStartBtn>
      </form>
    </HomeContainer>
  )
}
