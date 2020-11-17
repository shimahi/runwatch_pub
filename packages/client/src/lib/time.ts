import dayjs, { Dayjs } from 'dayjs'
import 'dayjs/locale/ja'

dayjs.locale('ja')

export const currentTime = dayjs().format('HH:mm')

/**
 * 時間計算・時間表記フォーマットのヘルパー関数をここに書く
 */

/** 分(number)を「xx時間yy分」の表記に直す */
export const convertMinutesToHour = (minutes: number) => {
  const hour = Math.floor(minutes / 60)
  const remainMinutes = minutes % 60

  if (hour === 0) {
    return `${remainMinutes}分`
  }

  return `${hour}時間${String(remainMinutes).padStart(2, '0')}分`
}

/**  "HH:mm"の文字列から、現在時刻との差分(分)を整数で返す */
export const getDiffFromTimePicker = (value: string) => {
  const [hour, min] = splitHourMinutes(value)
  const inputTime = dayjs().hour(hour).minute(min)
  const diff = calculateTimeDiff(inputTime)

  return diff
}

/**  "HH:mm"の文字列を[hour, min]の配列で返す */
const splitHourMinutes = (value: string) => value.split(':').map((x) => Number(x))

/**  入力値と現在の時刻の差分(分)を返す */
const calculateTimeDiff = (inputTime: Dayjs) => {
  const current = dayjs()

  if (inputTime.hour() === current.hour() && inputTime.minute() === current.minute()) {
    return 0
  }

  let diff = inputTime.diff(current, 'm')

  if (diff <= 0) {
    diff += 24 * 60
  }

  return diff
}
