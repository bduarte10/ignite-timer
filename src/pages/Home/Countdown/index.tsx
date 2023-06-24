import { useContext, useEffect, useRef } from 'react'
import { CyclesContext } from '../../../contexts/CyclesContext'
import { CountdownContainer, ProgressCircle, Separator } from './styles'

export function Countdown() {
  const {
    activeCycle,
    markCurrentCycleAsFinished,
    secondsPassed,
    setAmountSecondsPassed,
    isPaused,
  } = useContext(CyclesContext)
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const progressRef = useRef<SVGCircleElement>(null)

  const secondsDifference = secondsPassed
  const remainingSeconds = totalSeconds - secondsDifference
  useEffect(() => {
    let interval: number

    if (activeCycle && !isPaused) {
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
    remainingSeconds,
    secondsDifference,
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

  useEffect(() => {
    if (progressRef.current) {
      const progress = (secondsPassed / totalSeconds) * 100
      const circumference = 2 * Math.PI * progressRef.current.r.baseVal.value
      const offset = circumference * (1 - progress / 100)
      progressRef.current.style.strokeDasharray = `${circumference}`
      progressRef.current.style.strokeDashoffset = `${offset}`

      if (remainingSeconds <= 0) {
        // Redefine para os valores padrão
        progressRef.current.style.strokeDasharray = `${circumference}`
        progressRef.current.style.strokeDashoffset = '0'
      }
    }
  }, [remainingSeconds, secondsPassed, totalSeconds])

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
      <ProgressCircle>
        <circle
          ref={progressRef}
          cx="50%"
          cy="50%"
          r="48%"
          strokeDashoffset="0"
        />
      </ProgressCircle>
    </CountdownContainer>
  )
}
