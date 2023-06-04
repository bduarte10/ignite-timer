import { useContext, useEffect } from 'react'
import { CyclesContext } from '../../../contexts/CyclesContext'
import { CountdownContainer, Separator } from './styles'

export function Countdown() {
  const {
    activeCycle,
    markCurrentCycleAsFinished,
    secondsPassed,
    setAmountSecondsPassed,
    isPaused,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number

    if (activeCycle && !isPaused) {
      const secondsDifference = secondsPassed
      const remainingSeconds = totalSeconds - secondsDifference

      if (remainingSeconds <= 0) {
        markCurrentCycleAsFinished()
        setAmountSecondsPassed(totalSeconds)
      } else {
        interval = setInterval(() => {
          setAmountSecondsPassed(secondsDifference + 1)
        }, 1000)
      }
    }

    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    secondsPassed,
    totalSeconds,
    isPaused,
    markCurrentCycleAsFinished,
    setAmountSecondsPassed,
  ])

  const currentSeconds = activeCycle ? totalSeconds - secondsPassed : 0
  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60
  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    } else {
      document.title = 'PomoTasks'
    }
  }, [minutes, seconds, activeCycle])

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
