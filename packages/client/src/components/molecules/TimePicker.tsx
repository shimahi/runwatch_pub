import { DefaultTimePicker, MuiTimePicker } from 'components/atoms'
import { useAgent } from 'lib'
import 'twin.macro'
import { SerializedStyles } from '@emotion/core'

type TimePickerProps = {
  breakFirstView?: boolean
  isClockWhite?: boolean
  cssProps?: SerializedStyles
}

export const TimePicker = ({ breakFirstView = false, isClockWhite = false, cssProps }: TimePickerProps) => {
  const agent = useAgent()

  return agent === 'safari' || agent === 'firefox' ? (
    <MuiTimePicker cssProps={cssProps} breakFirstView={breakFirstView} />
  ) : (
    <DefaultTimePicker cssProps={cssProps} isClockWhite={isClockWhite} breakFirstView={breakFirstView} />
  )
}
