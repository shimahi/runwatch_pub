import { NavigationPC, Header, VideoList } from 'components/organisms'
import { useIsMobile, md } from 'lib'
import tw, { css } from 'twin.macro'

export const IndexTemplate = () => {
  const isMobile = useIsMobile()

  return (
    <main>
      <article
        css={
          !isMobile &&
          css`
            @media (min-width: 2000px) {
              width: 2000px;
              margin: auto;
            }
          `
        }
        tw="relative md:flex md:h-screen"
      >
        {isMobile ? (
          <Header />
        ) : (
          <div
            tw="sm:fixed sm:h-screen"
            css={css`
              ${md} {
                width: 280px;
              }
            `}
          >
            <NavigationPC />
          </div>
        )}
        <div
          tw="w-full"
          css={
            !isMobile &&
            css`
              ${tw`min-h-screen`}
              ${md} {
                margin-left: 280px;
              }
            `
          }
        >
          <VideoList />
        </div>
      </article>
    </main>
  )
}
