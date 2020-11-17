import { useState, useEffect, useRef, useCallback, RefObject } from 'react'
import { useTime, useQueryVariables, useVideos } from 'contexts'
import { useRefetch, getDiffFromTimePicker } from 'lib'

export const useTimePicker = (latency = 600) => {
  const inputEl = useTimePickerRef()
  const timePickerDispatch = useTimePickerDispatch(inputEl, latency)

  return { inputEl, timePickerDispatch }
}

// タイムピッカーのDOMをrefオブジェクトとして取得する
const useTimePickerRef = () => {
  const inputEl = useRef<HTMLInputElement>(null)
  const [time] = useTime()

  useEffect(() => {
    if (inputEl && inputEl.current) inputEl.current.value = time
  }, [time])

  return inputEl
}

/**
 * 0.65秒前のvalue値と、現在のvalue値が一致し、かつ、それが前回のクエリ条件とは異なる新しい値のときのみ dispatch を実行する
 * (入力中はクエリの送信をせず、止まったら送信する)
 */

const useTimePickerDispatch = (inputEl: RefObject<HTMLInputElement>, latency = 600) => {
  const [oldValue, setOldValue] = useState('')
  const [lastSubmitValue, setLastSubmitValue] = useState('')
  const [variables] = useQueryVariables()
  const [_, setTime] = useTime()
  const [__, setVideos] = useVideos()
  const { dispatch } = useRefetch()

  useEffect(() => {
    if (!(inputEl && inputEl.current)) return
    const { value } = inputEl.current

    if (value && value === oldValue && value !== lastSubmitValue) {
      const minutes = getDiffFromTimePicker(value)

      setVideos([])
      dispatch({
        ...variables,
        minutes,
        offset: 0,
      })

      setLastSubmitValue(value)
      setTime(value) // グローバルステートの値も更新
    }
  }, [oldValue, inputEl, lastSubmitValue, setTime, dispatch, setVideos, variables])

  // latencyを待ってから、入力値ををoldValueに保持する
  const timePickerDispatch = useCallback(() => {
    if (!(inputEl && inputEl.current)) return
    const { value } = inputEl.current

    setTimeout(() => {
      setOldValue(value)
    }, latency)
  }, [inputEl, latency])

  return timePickerDispatch
}
