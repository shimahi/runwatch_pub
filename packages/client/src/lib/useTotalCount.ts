import { useState, useEffect } from 'react'
import { useQueryVariables } from 'contexts'
import { useRefetch } from 'lib'

export const useTotalCount = () => {
  const [totalCount, setTotalCount] = useState(0)
  const [variables] = useQueryVariables()
  const { data } = useRefetch()

  useEffect(() => {
    const countResult = (data && data.videos_aggregate.aggregate && data.videos_aggregate.aggregate.count) || 0

    if (variables.offset === 0) {
      setTotalCount(countResult)
      window.scrollTo(0, 0)
    }
  }, [totalCount, setTotalCount, variables.offset, data])

  return totalCount
}
