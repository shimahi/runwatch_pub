import { useHasRequestedOnce, useTime } from 'contexts'
import { useTimePicker } from 'lib'
import tw, { css, styled } from 'twin.macro'
import { SerializedStyles } from '@emotion/core'

type TimePickerProps = {
  breakFirstView?: boolean
  isClockWhite?: boolean
  cssProps?: SerializedStyles
}

const LATENCY = 600

export const DefaultTimePicker = ({ breakFirstView = false, isClockWhite = false, cssProps }: TimePickerProps) => {
  const [hasRequestedOnce, setHasRequestedOnce] = useHasRequestedOnce()
  const latency = breakFirstView || hasRequestedOnce ? LATENCY : 0

  const [time] = useTime()
  const { inputEl, timePickerDispatch } = useTimePicker(latency)

  const handleChange = () =>
    (async () => {
      if (!inputEl.current) return
      const { value } = inputEl.current

      if (!value || !value.match(/:/)) {
        inputEl.current.value = time

        return
      }
      timePickerDispatch()
    })().then(() => {
      if (!breakFirstView) return
      setTimeout(() => {
        setHasRequestedOnce(true)
      }, LATENCY)
    })

  return (
    <TimePickerInput
      type="time"
      ref={inputEl}
      onChange={handleChange}
      css={cssProps}
      required
      isClockWhite={isClockWhite}
    />
  )
}

const TimePickerInput = styled.input(
  ({ isClockWhite = false }: { isClockWhite?: boolean }) => css`
    ${tw`text-center rounded-md tracking-wider max-w-full p-2 w-56 font-bold text-4xl text-baseColor`};
    border: solid 2px #e2e2ed;
    cursor: text;
    &::-webkit-clear-button {
      -webkit-appearance: none;
      display: none;
    }
    &::-ms-clear {
      display: none;
    }
    &::-webkit-calendar-picker-indicator {
      filter: ${isClockWhite && 'invert(100%) brightness(100%) '};
      transition: 0.2s;
      &:hover {
        cursor: pointer;
        opacity: 0.85;
        filter: invert(60%) sepia(85%) saturate(2571%) hue-rotate(297deg) brightness(99%) contrast(88%);
      }
    }
  `,
)
