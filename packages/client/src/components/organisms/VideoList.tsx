import { Card, Loading } from 'components/atoms'
import { FirstView, Error, NoHit } from 'components/organisms'
import { useVideos, useHasRequestedOnce, useCalling, useTime } from 'contexts'
import { useRefetch, useAgent, useTotalCount } from 'lib'
import tw, { css } from 'twin.macro'
import { InView } from 'react-intersection-observer'

export const VideoList = () => {
  const { loading, error, paginate } = useRefetch()
  const [calling] = useCalling()
  const [hasRequestedOnce] = useHasRequestedOnce()
  const agent = useAgent()
  const [videos] = useVideos()
  const count = useTotalCount()
  const [time] = useTime()

  if (!hasRequestedOnce) return <FirstView />
  if (error && !videos.length) return <Error />

  if ((loading && !videos.length) || calling)
    return (
      <div tw="h-screen flex items-center">
        <Loading />
      </div>
    )

  if (!loading && !videos.length) return <NoHit />

  return (
    <section tw="text-gray-700 min-h-full">
      <div css={videoList(agent)}>
        {(agent === 'ios' || agent === 'android') && (
          <div tw="mx-2 mb-1 text-right">
            <p tw="text-white text-sm">
              {time}までに全話視聴できる作品が
              <br /> <span tw="font-bold text-pink-500 mr-1">{count.toLocaleString()}</span>件見つかりました。
            </p>
          </div>
        )}
        <div tw="flex flex-wrap">
          {videos.map((video) => {
            if (!video) return
            const { id, title, eyecatch, synopsis, total_minutes, amazon } = video

            if (!amazon) return

            const { processed_url } = amazon

            return (
              <Card
                key={id}
                title={title}
                url={processed_url}
                eyecatch={eyecatch || ''}
                total_minutes={total_minutes}
                synopsis={synopsis}
              />
            )
          })}
        </div>
        {!!videos.length && (
          <InView
            as="div"
            onChange={(inView) => {
              if (inView) paginate()
            }}
          >
            {loading && videos.length && <Loading />}
          </InView>
        )}
      </div>
    </section>
  )
}

const videoList = (agent: string) => css`
  ${tw`px-3 pt-8 pb-8 sm:px-4  mx-auto`}
  ${(agent === 'ios' || agent === 'android') && tw`pt-20`}
`
