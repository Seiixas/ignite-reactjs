import { createContext, useEffect, useState } from 'react'
import { HandPalm, Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { differenceInSeconds } from 'date-fns'

import * as zod from 'zod'

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'

import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesContextType {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  markCurrentCycleAsFinished(): void
}

export const CyclesContext = createContext({} as CyclesContextType)

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function markCurrentCycleAsFinished() {
    setCycles((prev) =>
      prev.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else return cycle
      }),
    )
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  function createNewCycle({ task, minutesAmount }: NewCycleFormData) {
    const newCycleId = String(new Date().getTime())

    const newCycle: Cycle = {
      id: newCycleId,
      task,
      minutesAmount,
      startDate: new Date(),
    }

    setCycles((prev) => [...prev, newCycle])
    setActiveCycleId(newCycleId)
    setAmountSecondsPassed(0)

    reset()
  }

  function handleInterruptCycle() {
    setCycles((prev) =>
      prev.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else return cycle
      }),
    )
    setActiveCycleId(null)
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(createNewCycle)} action="">
        <CyclesContext.Provider
          value={{ activeCycle, activeCycleId, markCurrentCycleAsFinished }}
        >
          <NewCycleForm />
          <Countdown />
        </CyclesContext.Provider>
        {activeCycle ? (
          <StopCountdownButton onClick={handleInterruptCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Iniciar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
