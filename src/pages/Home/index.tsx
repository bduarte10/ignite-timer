import { HandPalm, Play } from 'phosphor-react'
import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { CountdownStartBtn, HomeContainer, StopCountdownBtn } from './styles'
import { NewCycleForm } from './NewCycleForm'
import { Countdown } from './Countdown'
import { CyclesContext } from '../../contexts/CyclesContext'

interface FormData {
  task: string
  minutesAmount: number
}

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<FormData>({
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })
  const { handleSubmit, reset, watch } = newCycleForm

  function handleCreateNewCycle(data: FormData) {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form
        onSubmit={handleSubmit(handleCreateNewCycle)}
        action="">
        <FormProvider {...newCycleForm}>
          <p>Cadastre uma nova tarefa e inicie o ciclo:</p>
          <NewCycleForm />
        </FormProvider>
        <Countdown />
        {activeCycle ? (
          <StopCountdownBtn
            onClick={interruptCurrentCycle}
            type="button">
            <HandPalm size={24} />
            interromper
          </StopCountdownBtn>
        ) : (
          <CountdownStartBtn
            type="submit"
            disabled={isSubmitDisabled}>
            <Play size={24} />
            Começar
          </CountdownStartBtn>
        )}
      </form>
    </HomeContainer>
  )
}
