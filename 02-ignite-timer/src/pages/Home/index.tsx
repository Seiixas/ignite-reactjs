import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  TwoDotsSeparator,
  StartCountdownButton,
  TaskInput,
  MinutesAmountInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="task"
            list="task-suggestions"
            placeholder="Digite um nome para o seu projeto"
          />
          <datalist id="task-suggestions">
            <option value="Projeto 1"></option>
            <option value="Projeto 2"></option>
            <option value="Projeto 3"></option>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            max={60}
            min={5}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <TwoDotsSeparator>:</TwoDotsSeparator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type="submit">
          <Play size={24} />
          Iniciar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
