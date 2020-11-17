import { useState, ChangeEvent } from 'react'
import { useIsMobile } from 'lib'
import tw, { css } from 'twin.macro'
import checkIcon from 'assets/check.svg'

type CheckboxProps = {
  id: string
  label: string
  onChange: ({ target: { checked } }: ChangeEvent<HTMLInputElement>) => void
  checked: boolean
  disabled: boolean
}

export const Checkbox = ({ id, onChange, checked, disabled, label }: CheckboxProps) => {
  const [focus, setFocus] = useState(false)
  const isMobile = useIsMobile()

  return (
    <label htmlFor={id} css={checkbox(checked, focus, isMobile)}>
      <input
        type="checkbox"
        id={id}
        onChange={onChange}
        disabled={disabled}
        checked={checked}
        tw="opacity-0 w-0"
        onFocus={() => {
          setFocus(true)
        }}
        onBlur={() => {
          setFocus(false)
        }}
        onClick={(e) => {
          e.currentTarget.blur()
        }}
      />
      {label}
    </label>
  )
}

const checkbox = (checked: boolean, focus: boolean, isMobile: boolean) => {
  const color = checked ? tw`bg-teal-500 hover:bg-teal-400 text-white` : tw`bg-opacity-0 text-teal-500`

  const rect = css`
    &:before {
      content: '';
      ${tw`border-2 border-solid border-teal-500 block absolute w-6 h-6 z-10`}
      background-color: ${checked ? 'white' : 'none'};
      left: 1rem;
      top: 0.8rem;
    }
  `

  const checkMark =
    checked &&
    css`
      &:after {
        ${tw`block absolute w-6 h-6 z-10`}
        content: '';
        background-image: url(${checkIcon});
        left: 1.25rem;
        top: 1.2rem;
      }
    `

  return css`
    ${rect}
    ${checkMark}
    ${color}
    ${isMobile && tw`text-white`}
    ${tw`w-56  rounded-md border-2 border-solid border-teal-500 hover:border-teal-400 cursor-pointer whitespace-no-wrap block relative font-bold`}
    &:hover {
      &::before {
        ${tw`border-teal-400`}
      }
    }
    padding: 0.8rem 1rem;
    padding-left: 3rem;
    ${focus && 'color: rgba(237,100,166)'}
  `
}
