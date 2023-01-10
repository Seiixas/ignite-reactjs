import { differenceInSeconds } from 'date-fns'
import { useContext, useEffect, useState } from 'react'
import { CyclesContext } from '../..'
import { CountdownContainer, TwoDotsSeparator } from './styles'

export function Countdown() {
  const { activeCycle, activeCycleId, markCurrentCycleAsFinished } =
    useContext(CyclesContext)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const secondsOfCycle = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? secondsOfCycle - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsDifference >= secondsOfCycle) {
          markCurrentCycleAsFinished()
          setAmountSecondsPassed(secondsOfCycle)
          clearInterval(interval)
        } else setAmountSecondsPassed(secondsDifference)
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, secondsOfCycle, activeCycleId, markCurrentCycleAsFinished])

  useEffect(() => {
    if (activeCycle) document.title = `${minutes}:${seconds}`
  }, [minutes, seconds, activeCycle])

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <TwoDotsSeparator>:</TwoDotsSeparator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
