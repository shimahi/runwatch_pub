import { useState } from 'react'
import { TimePicker, Filters, Share, Credit } from 'components/molecules'
import { useAgent } from 'lib'
import tw, { css } from 'twin.macro'
import { slide as Menu } from 'react-burger-menu'
import openMenuIcon from 'assets/open_menu_icon.svg'
import closeMenuIcon from 'assets/close_menu_icon.svg'

export const NavigationSP = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const agent = useAgent()

  return (
    <div css={menuWrapper}>
      <Menu
        isOpen={isNavOpen}
        onOpen={() => setIsNavOpen(true)}
        onClose={() => setIsNavOpen(false)}
        right
        width="100vw"
        customBurgerIcon={<img src={openMenuIcon} alt="メニューを開く" />}
        customCrossIcon={<img src={closeMenuIcon} alt="メニューを閉じる" />}
      >
        <div css={navigationBody}>
          <div tw="h-full w-full p-4 flex flex-col items-center">
            <div tw="relative">
              <TimePicker cssProps={navigationBody__timePicker(agent)} />
              {(agent === 'ios' || agent === 'android') && <div css={timePicker__bg} />}
            </div>

            <div tw="mt-10">
              <Filters />
            </div>

            <div tw="mt-10 w-64 mx-auto">
              <Share />
            </div>
            <div tw="text-center mt-5">
              <Credit />
            </div>
          </div>
        </div>
      </Menu>
    </div>
  )
}
const menuWrapper = css`
  .bm-burger-button {
    position: relative;
    width: 42px;
    height: 35px;
    right: 2%;
    top: 1px;
  }

  .bm-cross-button {
    width: 42px !important;
    height: 42px !important;
    top: 16px !important;
    right: 16px !important;
  }

  .bm-menu-wrap {
    transition: all 0.2s ease 0s !important;
    top: 0;
  }
`

const navigationBody = css`
  ${tw`bg-baseColor w-full min-h-screen md:pt-32`}
`

const navigationBody__timePicker = (agent: string) => css`
  ${tw`text-white mt-10 mx-auto block pb-1 text-5xl tracking-wider text-center`}
  border: none;

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
  &::-webkit-calendar-picker-indicator {
    display: none;
  }
  @media (max-width: 374px) {
    ${tw`mt-8 pb-0 text-4xl`}
  }
`

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
  top: 2.8rem;
  @media (max-width: 374px) {
    height: 4.5rem;
    top: 2.1rem;
  }
  left: 0;
  right: 0;
  margin: auto;
`
