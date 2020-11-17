import { createContext, useContext } from 'react'

export type QueryVariables = {
  minutes: number
  limit: number
  offset: number
  containsDanime: boolean
  containsNonPrime: boolean
  minYear: number | null
  maxYear: number | null
}

const storagedVariables = sessionStorage.getItem('queryVariables')

export const queryVariablesInitialState: QueryVariables = storagedVariables
  ? JSON.parse(storagedVariables)
  : {
      minutes: 0,
      offset: 0,
      limit: 12,
      containsDanime: true,
      containsNonPrime: true,
      minYear: null,
      maxYear: null,
    }

export const QueryVariablesContext = createContext<[QueryVariables, (state: QueryVariables) => void]>([
  queryVariablesInitialState,
  () => {},
])

/**
 * クエリを飛ばすための引数を設定するコンテキスト
 *
 * minutes: 時間
 * offset: ページオフセット
 * limit: リクエスト毎で取得する作品数
 * containsDanime: dアニメストアを含むかどうか
 * containsNonPrime: プライム対象外作品(レンタルのみ)を含むかどうか
 *
 */
export const useQueryVariables = () => {
  const [queryVariables, setQueryVariables] = useContext(QueryVariablesContext)

  return [queryVariables, setQueryVariables] as const
}
