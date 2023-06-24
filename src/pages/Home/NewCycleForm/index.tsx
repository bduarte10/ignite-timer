import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../contexts/CyclesContext'

import { FormContainer, InputTask, MinutesAmount } from './styles'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()
  return (
    <FormContainer>
      <InputTask
        id="task"
        list="task-suggestions"
        placeholder="Nome da tarefa"
        disabled={!!activeCycle}
        {...register('task')}
      />
      <datalist id="task-suggestions">
        <option value="Estudar Javascript" />
        <option value="Estudar React" />
        <option value="Estudar Node" />
        <option value="Estudar React Native" />
      </datalist>

      <MinutesAmount
        type="number"
        id="minutesAmount"
        placeholder="0"
        disabled={!!activeCycle}
        autoComplete="off"
        step={1}
        min={1}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutos</span>
    </FormContainer>
  )
}
