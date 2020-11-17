import { useState, useEffect } from 'react'
import {
  VideosContext,
  videosInitialState,
  QueryVariablesContext,
  queryVariablesInitialState,
  HasRequestedOnceContext,
  hasRequestedOnceInitialState,
  TimeContext,
  timeInitialState,
  CallingContext,
  callingInitialState,
} from 'contexts'
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client'

const cache = new InMemoryCache()
const link = new HttpLink({
  uri: process.env.HASURA_GRAPHQL_ENDPOINT,
  headers: {
    'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET,
  },
})

const apolloClient = new ApolloClient({
  cache,
  link,
})

type AppProviderProps = {
  children: React.ReactChild
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [videos, setVideos] = useState(videosInitialState)
  const [variables, setVariables] = useState(queryVariablesInitialState)
  const [hasRequestedOnce, setHasRequestedOnce] = useState(hasRequestedOnceInitialState)
  const [time, setTime] = useState(timeInitialState)
  const [calling, setCalling] = useState(callingInitialState)

  useEffect(() => {
    if (!hasRequestedOnce) return
    sessionStorage.setItem('videos', JSON.stringify(videos))
    sessionStorage.setItem('queryVariables', JSON.stringify(variables))
    sessionStorage.setItem('time', JSON.stringify(time))
    sessionStorage.setItem('hasRequestedOnce', JSON.stringify(hasRequestedOnce))
  }, [videos, variables, time, hasRequestedOnce])

  return (
    <ApolloProvider client={apolloClient}>
      <VideosContext.Provider value={[videos, setVideos]}>
        <QueryVariablesContext.Provider value={[variables, setVariables]}>
          <HasRequestedOnceContext.Provider value={[hasRequestedOnce, setHasRequestedOnce]}>
            <TimeContext.Provider value={[time, setTime]}>
              <CallingContext.Provider value={[calling, setCalling]}>{children}</CallingContext.Provider>
            </TimeContext.Provider>
          </HasRequestedOnceContext.Provider>
        </QueryVariablesContext.Provider>
      </VideosContext.Provider>
    </ApolloProvider>
  )
}

export default AppProvider
