import { useEffect, useState } from 'react'
import { SafariClock } from 'components/atoms'
import { useTime, useQueryVariables, useHasRequestedOnce } from 'contexts'
import { useRefetch, getDiffFromTimePicker } from 'lib'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import { SerializedStyles } from '@emotion/core'
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers'
import tw, { css } from 'twin.macro'

type MuiTimePickerProps = {
  cssProps?: SerializedStyles
  breakFirstView?: boolean
}

export const MuiTimePicker = ({ cssProps, breakFirstView }: MuiTimePickerProps) => {
  const [time, setTime] = useTime()
  const { dispatch } = useRefetch()
  const [variables] = useQueryVariables()
  const [selectedDate, setSelectedDate] = useState<any>(new Date())
  const [_, setHasRequestedOnce] = useHasRequestedOnce()
  useEffect(() => {
    const newDate = new Date()

    setSelectedDate(newDate.setHours(Number(time.split(':')[0]), Number(time.split(':')[1])))
  }, [time])

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date)
    const hour = date?.getHours()
    const min = `${date?.getMinutes()}`.padStart(2, '0')
    const newTime = `${hour}:${min}`
    setTime(newTime)
    const minutes = getDiffFromTimePicker(newTime)
    dispatch({
      ...variables,
      minutes,
      offset: 0,
    })
    if (!breakFirstView) return
    setHasRequestedOnce(true)
  }

  return (
    <div css={[muiTimePicker, cssProps]}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardTimePicker
          value={selectedDate}
          keyboardIcon={<SafariClock />}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
          ampm={false}
        />
      </MuiPickersUtilsProvider>
    </div>
  )
}

const muiTimePicker = css`
  max-width: 224px;
  border: solid 2px #e2e2ed;
  ${tw`rounded-md p-2`}
  .MuiSvgIcon-root {
    fill: inherit;
    transform: scale(1.3);
  }
  .MuiInput-underline:before {
    display: none;
  }
  .MuiIconButton-label {
    transform: scale(1.2);
  }
  .MuiInputBase-input {
    ${tw`text-baseColor font-poppins font-bold tracking-widest w-full text-4xl text-center`}
  }
`
