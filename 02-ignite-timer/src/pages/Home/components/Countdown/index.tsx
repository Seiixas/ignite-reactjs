import { useState } from 'react'
import { CountdownContainer, TwoDotsSeparator } from './styles'

interface CountdownProps {
  activeCycle: any
}

export function Countdown({ activeCycle }: CountdownProps) {
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)
  const secondsOfCycle = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsDifference >= secondsOfCycle) {
          setCycles((prev) =>
            prev.map((cycle) => {
              if (cycle.id === activeCycleId) {
                return { ...cycle, finishedDate: new Date() }
              } else return cycle
            }),
          )

          setAmountSecondsPassed(secondsOfCycle)

          clearInterval(interval)
        } else setAmountSecondsPassed(secondsDifference)
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, secondsOfCycle, activeCycleId])

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
function useEffect(arg0: () => () => void, arg1: any[]) {
  throw new Error('Function not implemented.')
}

function differenceInSeconds(arg0: Date, startDate: any) {
  throw new Error('Function not implemented.')
}

function setCycles(arg0: (prev: any) => any) {
  throw new Error('Function not implemented.')
}
