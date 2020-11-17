import { useIsMobile, sm } from 'lib'
import { css } from 'twin.macro'
import { animateScroll } from 'react-scroll'

export const Logo = () => {
  const isMobile = useIsMobile()

  return (
    <div
      onClick={() => {
        if (isMobile) animateScroll.scrollToTop()
      }}
      tw="font-poppins font-bold text-base text-pink-500"
      css={css`
        ${sm} {
          font-size: 2.1rem;
        }
      `}
    >
      RunWatch
    </div>
  )
}
