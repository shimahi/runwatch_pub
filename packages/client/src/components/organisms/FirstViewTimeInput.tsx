import { TimePicker } from 'components/molecules'
import { useHasRequestedOnce, useTime } from 'contexts'
import { sm, md, xxl, currentTime, useAgent } from 'lib'
import tw, { css } from 'twin.macro'

export const FirstViewTimeInput = () => {
  const [_, setHasRequestedOnce] = useHasRequestedOnce()
  const [time] = useTime()
  const agent = useAgent()

  const notInputYet = time === currentTime

  return (
    <div tw="mt-10 flex flex-col w-full lg:(flex-row items-start w-auto) justify-around ">
      <div tw="relative">
        <TimePicker cssProps={timePicker(agent)} isClockWhite />
        {notInputYet && (
          <p
            tw="text-pink-500 mt-1 text-center lg:(text-left) mx-auto text-sm"
            css={(agent === 'ios' || agent === 'android') && tw`sm:mt-4`}
          >
            予定の時間を入力してください
          </p>
        )}
        {(agent === 'ios' || agent === 'android') && <div css={timePicker__bg} />}
      </div>

      <button
        tw="text-white font-bold rounded-lg bg-teal-500 hover:bg-teal-400 flex items-center justify-center px-4 sm:px-16 mt-8 whitespace-no-wrap lg:(mt-0 ml-8) xl:(ml-16 px-12 text-xl) disabled:(text-gray-600 bg-teal-200) "
        css={css`
          min-height: 4.5rem;
          width: 100%;
          max-width: 280px;
          margin: auto;
          ${md} {
            height: 5.7rem;
          }
          ${xxl} {
            height: 6.72rem;
            min-width: 360px;
          }
        `}
        onClick={() => {
          setHasRequestedOnce(true)
        }}
        disabled={notInputYet}
      >
        時間までの作品を探す
      </button>
    </div>
  )
}

const timePicker = (agent: string) => {
  let mobileStyle = css``
  let safariFirefoxStyle = css``

  if (agent === 'ios' || agent === 'android') {
    mobileStyle = css`
      ${tw`text-white mx-auto block pb-0  max-w-xs text-6xl tracking-wider`}
      border: none;
      &::-webkit-calendar-picker-indicator {
        display: none;
      }
    `
  }

  if (agent === 'safari' || agent === 'firefox') {
    safariFirefoxStyle = css`
      .MuiSvgIcon-root {
        fill: inherit;
        margin-right: 32px;
        transform: scale(1.5);
        margin-top: 2px;
      }
      .MuiInputBase-input {
        ${tw`text-white tracking-widest w-full text-5xl -mt-2`}
        padding-bottom: 3;
        padding-top: 4px;
        ${agent === 'firefox' && 'position: relative; top: 6px;'}
        ${xxl} {
          padding-top: 1px;
          padding-bottom: 5px;
          ${tw`text-6xl`}
        }
      }

      svg {
        filter: invert(100%) sepia(100%) saturate(2%) hue-rotate(250deg) brightness(1242506%) contrast(101%);
      }
    `
  }

  return css`
    ${tw`relative z-10 text-white tracking-widest w-full text-4xl leading-none max-w-md text-center lg:px-16 pt-5 pb-3 rounded-lg sm:(text-5xl)  xxl:text-6xl`}

    ${agent !== 'ios' &&
    agent !== 'android' &&
    css`
      border: solid 2px rgba(255, 255, 255, 0.07);
      background-color: rgba(255, 255, 255, 0.07);
      &:hover {
        border: solid 2px rgba(255, 255, 255, 0.1);
        background-color: rgba(255, 255, 255, 0.1);
      }
    `}


    width: 22.5rem;
    transition: 0.2s;
    ${xxl} {
      width: 27rem;
    }

    &::-webkit-calendar-picker-indicator {
      transform: scale(0.85);
    }
    ${mobileStyle};
    ${safariFirefoxStyle};
  `
}

const timePicker__bg = css`
  ${tw`absolute block rounded-lg h-20 `}
  width: 100%;
  max-width: 330px;
  border: solid 2px rgba(255, 255, 255, 0.07);
  background-color: rgba(255, 255, 255, 0.07);
  &:active {
    border: solid 2px rgba(255, 255, 255, 0.1);
    background-color: rgba(255, 255, 255, 0.1);
  }
  z-index: 1;
  top: 10px;
  ${sm} {
    top: 4px;
  }

  left: 0;
  right: 0;
  margin: auto;
`
