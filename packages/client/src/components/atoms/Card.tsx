import { convertMinutesToHour, chardecode } from 'lib'
import tw, { css } from 'twin.macro'

type CardProps = {
  title: string
  eyecatch: string
  synopsis: string
  total_minutes: number
  url?: string
}

export const Card = ({ title, eyecatch, synopsis, url, total_minutes }: CardProps) => {
  const credit = synopsis.split(/©|\(C\)|\(c\)|（C）|（c）|（Ｃ）|（ｃ）|©/)[1]

  const cutTitle = title.replace('(dアニメストア)', '').replace('（フジテレビオンデマンド）', '')

  return (
    <div tw="xs:w-full w-1/2 p-2 pb-4 lg:w-1/3 xl:(w-1/4 p-3) xxl:w-1/5">
      <a href={url || ''} className="group" target="_blank" rel="noreferrer" css={card}>
        <div tw="relative">
          <picture>
            <img tw="xs:h-48 h-40 sm:h-32 lg:h-48 w-full object-cover object-center" src={eyecatch} alt={title} />
          </picture>
          <div tw="absolute right-0 bottom-0 text-white bg-pink-600 group-active:bg-pink-500 sm:group-hover:bg-pink-500 px-1 text-xs">
            {convertMinutesToHour(total_minutes)}
          </div>
        </div>
        <div>
          <div tw="px-3 py-2 text-base tracking-wide font-bold text-white bg-gray-900 group-active:bg-gray-800 sm:group-hover:bg-gray-800">
            <h1 css={cardContent__title}>{cutTitle}</h1>
          </div>
          <p css={cardContent__synopsis}>{chardecode(synopsis)}</p>
          <div css={cardContent__credit}>{credit && <span>&copy;{credit}</span>}</div>
        </div>
      </a>
    </div>
  )
}

const card = css`
  ${tw`h-full pb-10 relative block rounded-md overflow-hidden block no-underline text-current bg-baseColor border border-gray-700 border-2 border-solid shadow-md transform duration-150 ease-in-out active:(border-pink-500 scale-101 ) sm:hover:(border-pink-500 scale-101)`}
`

const cardContent__title = css`
  ${tw`font-noto`}
  line-height: 1.35em;
  display: -webkit-box;
  overflow: hidden;
  font-size: 0.9375rem;
  height: 2.7rem;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const cardContent__synopsis = css`
  ${tw`leading-normal p-4 text-sm overflow-hidden relative overflow-hidden text-gray-400 group-active:text-white sm:group-hover:text-white`}
  display: -webkit-box;
  height: 9rem;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
`

const cardContent__credit = css`
  ${tw`absolute w-full flex items-center flex-wrap w-full text-gray-600 py-1 bottom-0 no-underline inline-flex items-end justify-center`}
  span {
    font-size: 9px;
    letter-spacing: 0.5px;
    transform: scale(0.9);
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`
