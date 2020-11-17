import { createContext, useContext } from 'react'
import { GetVideosQuery } from 'types/graphql'

type VideosContextType = GetVideosQuery['videos']

const storagedVideos = sessionStorage.getItem('videos')

export const videosInitialState: VideosContextType = storagedVideos ? JSON.parse(storagedVideos) : []

export const VideosContext = createContext<[VideosContextType, (state: VideosContextType) => void]>([
  videosInitialState,
  () => {},
])

export const useVideos = () => {
  const [videos, setVideos] = useContext(VideosContext)

  return [videos, setVideos] as const
}
