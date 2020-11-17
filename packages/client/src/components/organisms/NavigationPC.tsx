import { Logo } from 'components/atoms'
import { TimePicker, Filters, Share, Credit } from 'components/molecules'
import { useTime, useHasRequestedOnce } from 'contexts'
import { useTotalCount, currentTime } from 'lib'
import tw, { css } from 'twin.macro'

export const NavigationPC = () => {
  const [hasRequestedOnce] = useHasRequestedOnce()
  const [time] = useTime()
  const count = useTotalCount()

  return (
    <section css={navigationPC}>
      <div tw="flex flex-col items-center justify-center w-full">
        <div tw="mb-16">
          <Logo />
        </div>
        <TimePicker breakFirstView />
        <div tw="text-gray-700 text-xs mt-6 h-1">
          {hasRequestedOnce && time !== currentTime && count > 0 && (
            <p>
              {time}までに全話視聴できる作品が
              <br /> <span tw="font-bold text-pink-500">{count.toLocaleString()}</span>件見つかりました。
            </p>
          )}
        </div>

        <div tw="mt-16">
          <Filters />
        </div>
        <div css={navigationPC__credit}>
          <div tw="mt-16 px-8">
            <Share />
          </div>

          <div tw="mt-8 px-8">
            <Credit />
          </div>
        </div>
      </div>
    </section>
  )
}

const navigationPC = css`
  ${tw`py-6 relative bg-white h-full w-full`}
  @media (max-height: 620px) {
    overflow-y: scroll;
  }
`

const navigationPC__credit = css`
  width: 100%;
  @media (min-height: 640px) {
    position: absolute;
    bottom: 32px;
    left: 0;
  }
`
