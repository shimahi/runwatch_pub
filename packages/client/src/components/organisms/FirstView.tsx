import { FirstViewTimeInput } from 'components/organisms'
import { sm, lg } from 'lib'
import { css } from '@emotion/core'
import tw from 'twin.macro'

export const FirstView = () => {
  return (
    <section css={firstView}>
      <h1 tw="tracking-wider text-5xl sm:text-6xl lg:text-7xl leading-none">RunWatch</h1>
      <h2 tw="text-pink-500 text-sm sm:text-base md:text-xl lg:text-2xl">the best Anime Video for your rhythm</h2>
      <p tw="text-white leading-loose tracking-wide mt-3 text-sm sm:mt-10 sm:text-center sm:text-base lg:text-lg">
        <span tw="font-bold tracking-normal">RunWatch</span>では、入力した時間までに<u tw="font-bold">全話視聴できる</u>
        <br tw="hidden sm:block xl:hidden" />
        アニメ作品(
        <span tw="font-bold tracking-normal">Prime Video</span>)を探すことができます。
        <br tw="hidden sm:block" />
        スケジュールの合間や、予定のない休日、作業の息抜きなどに
        <br tw="hidden sm:block  xl:hidden" />
        ぴったりの作品を見つけましょう。
      </p>
      <FirstViewTimeInput />
    </section>
  )
}

const firstView = css`
  ${tw`bg-baseColor font-poppins h-screen text-white text-center flex flex-col justify-center items-center`}
  min-height: 660px;
  padding: 0 5% 4rem;
  ${sm} {
    padding: 1rem 4rem 4rem;
  }
  ${lg} {
    padding-bottom: 8rem;
  }
  @media (max-height: 736px) {
    justify-content: flex-start;
    padding-top: 60px;
    min-height: 100vh;
    height: auto;
  }
`
