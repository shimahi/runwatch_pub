import { createContext, useContext } from 'react'

const storagedHasRequestedOnce = sessionStorage.getItem('hasRequestedOnce')

export const hasRequestedOnceInitialState = storagedHasRequestedOnce ? JSON.parse(storagedHasRequestedOnce) : false

export const HasRequestedOnceContext = createContext<[boolean, (state: boolean) => void]>([
  hasRequestedOnceInitialState,
  () => {},
])

/**
 * 一度でもクエリを飛ばしたか？のコンテキストで
 * 初期画面を表示するかしないかの判定に用いる
 */
export const useHasRequestedOnce = () => {
  const [hasRequestedOnce, setHasRequestedOnce] = useContext(HasRequestedOnceContext)

  return [hasRequestedOnce, setHasRequestedOnce] as const
}
