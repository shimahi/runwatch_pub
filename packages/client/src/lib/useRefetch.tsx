import { useQueryVariables, QueryVariables, useVideos, useCalling } from 'contexts'
import { useGetVideosQuery } from 'types/graphql'
import { useMedia } from 'react-use'

/**
 *  「新しいクエリ引数」から
 * 1.variablesの状態コンテキストを更新し
 * 2.hasuraにクエリを送信し
 * 3. クエリの結果からvideosを更新する
 * 関数dispatchと
 *
 * ↑ と同じ要領でvideosを追加する関数paginateと
 * loading, errorを返す
 */

export const useRefetch = () => {
  const isWide = useMedia('(min-width: 1780px)')
  const limit = isWide ? 15 : 12
  const [variables, setVariables] = useQueryVariables()
  const [videos, setVideos] = useVideos()
  const [_, setCalling] = useCalling()

  const { loading, error, refetch, data } = useGetVideosQuery({
    variables,
  })

  const dispatch = (newVariables: QueryVariables) => {
    setCalling(true)
    setVariables({
      ...newVariables,
      limit,
    })
    refetch({
      ...newVariables,
      limit,
    }).then((res) => {
      setCalling(false)
      setVideos(res.data.videos)
    })
  }

  const paginate = () => {
    const newVariables = {
      ...variables,
      offset: variables.offset + limit,
    }
    setVariables(newVariables)
    refetch(newVariables).then((res) => setVideos(videos.concat(res.data.videos)))
  }

  return { loading, error, refetch, data, dispatch, paginate }
}
