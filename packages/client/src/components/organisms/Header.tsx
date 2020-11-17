import React, { useState, useEffect } from 'react'
import { Logo } from 'components/atoms'
import { TimePicker } from 'components/molecules'
import { NavigationSP } from 'components/organisms'
import { useHasRequestedOnce } from 'contexts'
import tw, { css } from 'twin.macro'

export const Header = () => {
  const [hasRequestedOnce] = useHasRequestedOnce()

  const [scrolling, setScrolling] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)

  // コピペ: https://stackoverflow.com/questions/57453141/using-react-hooks-to-update-w-scroll#answer-57453199

  useEffect(() => {
    // FIXME: 型わからん
    const onScroll = (e: any) => {
      setScrollTop(e.target.documentElement.scrollTop)
      setScrolling(e.target.documentElement.scrollTop > scrollTop && e.target.documentElement.scrollTop > 70)
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollTop])

  if (!hasRequestedOnce) return <></>

  return (
    <header
      tw="flex justify-between items-center px-4 py-3 sm:px-8 bg-baseColor w-full"
      css={css`
        border-bottom: solid 4px white;
        z-index: 5;
        left: 0;
        top: ${scrolling ? '-100px' : '0'};
        position: fixed;
        transition: top 0.5s;
      `}
    >
      <Logo />
      <div tw="relative md:-ml-20">
        <TimePicker cssProps={header__timePicker} />
        <div css={header__timePicker__bg} />
      </div>

      <NavigationSP />
    </header>
  )
}

const header__timePicker = css`
  ${tw`text-white font-normal text-lg tracking-wider block -ml-4 relative`}
  border-bottom: none;
  width: 7rem;
  border: none;
  &::-webkit-calendar-picker-indicator {
    display: none;
  }
`

const header__timePicker__bg = css`
  ${tw`absolute block bg-gray-800 rounded-md w-20 h-8`}
  z-index: -1;
  left: -3rem;
  right: 0;
  margin: auto;
  top: 0.45rem;
`
