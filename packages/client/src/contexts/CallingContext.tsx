// Apolloのloadingとは別にローディングアイコンを呼び出したいので、アクションに応じて呼び出してローディングアイコンを表示するコンテクストを作った

import { createContext, useContext } from 'react'

export const callingInitialState = false

export const CallingContext = createContext<[boolean, (state: boolean) => void]>([callingInitialState, () => {}])

export const useCalling = () => {
  const [callig, setCalling] = useContext(CallingContext)

  return [callig, setCalling] as const
}
