import { useEffect } from 'react'
import 'twin.macro'
import tsuraiImage from 'assets/tsurai.jpg'

export const Error = () => {
  useEffect(() => {
    return () => {
      sessionStorage.clear()
    }
  })

  return (
    <section tw="text-white p-16 px-6">
      <img src={tsuraiImage} alt="" tw="mt-8 w-5/6 mx-auto max-w-md" />
      <h2 tw="text-3xl mt-6 text-center">Error...</h2>
      <p tw="mt-6 mx-auto sm:text-lg sm:text-center">
        残念ながら通信エラーが発生しました。
        <br /> ネット環境をご確認の上、もう一度アクセスしてください。
      </p>
    </section>
  )
}
