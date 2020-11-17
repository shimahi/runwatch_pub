import { createContext, useContext, useEffect } from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/ja'

dayjs.locale('ja')

const storagedTime = sessionStorage.getItem('time')

export const timeInitialState = storagedTime ? JSON.parse(storagedTime) : dayjs().format('HH:mm')

export const TimeContext = createContext<[string, (state: string) => void]>([timeInitialState, () => {}])

export const useTime = () => {
  const [time, setTime] = useContext(TimeContext)

  useEffect(() => {
    const [hour, min] = time.split(':')
    if (Number(hour) > 24 || Number(min) > 60) {
      setTime(`${Number(hour) % 24}:${String(min).padStart(2, '0')}`)
    }
  }, [time, setTime])

  return [time, setTime] as const
}
