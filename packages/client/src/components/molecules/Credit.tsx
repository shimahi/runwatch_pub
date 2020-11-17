import React, { useState } from 'react'
import { Modal } from 'components/atoms'
import 'twin.macro'

export const Credit = () => {
  const [tosModal, setTosModal] = useState(false)
  const [privacyModal, setPrivacyModal] = useState(false)

  return (
    <>
      <div tw="flex text-gray-500 text-xs">
        <div onClick={() => setTosModal(true)} tw="mr-5 hover:text-gray-400 cursor-pointer">
          利用規約
        </div>
        <div onClick={() => setPrivacyModal(true)} tw="hover:text-gray-400 cursor-pointer">
          プライバシーポリシー
        </div>
      </div>
      <div tw="text-xs text-gray-500 mt-2">&copy; 2020 STUDIO REAR</div>

      {tosModal && (
        <Modal isModal={tosModal} closeFunc={setTosModal}>
          <section tw="sm:p-6 sm:pt-4 text-gray-700 mx-auto">
            <h2 tw="text-base sm:text-2xl text-center flex items-center justify-center">
              <i tw="font-bold block h-1 w-4 sm:w-8 bg-teal-500 mr-3 sm:mr-12" /> <span> 利用規約</span>
              <i tw="font-bold block h-1 w-4 sm:w-8 bg-teal-500 ml-3 sm:ml-12" />
            </h2>

            <p tw="mt-12 text-sm sm:text-base">
              RunWatchへのアクセスおよび閲覧等のサービスの利用について、運営主体であるStudio
              Rear（以下「当社」といいます。）は以下を定めます。
            </p>

            <p tw="mt-4">1. コンテンツの知的財産権は権利所有者に所属します。</p>
            <p tw="mt-4">2. 運営は本コンテンツに関し、いかなる保証をするものでもありません。</p>
            <p tw="mt-4">
              3.
              当社サイト並びに、当社サイトからリンクしている第三者のサイト及び当社サイトへリンクしている第三者のサイトの内容について、その誤り及び内容に基づいて被った損害についても一切責任を負わないものといたします。
            </p>
            <p tw="mt-4">
              5. 当社は予告無しに何時でも本コンテンツの変更・削除等をする権利を有します。
              本コンテンツの変更、削除等により発生するいかなる損害に対しても一切責任を負わないものといたします。
            </p>
            <p tw="mt-4">
              6.
              RunWatchは非公式のサービスです。当サイトに掲載された情報による損失については責任を負いかねます。ライブの最新情報については、ライブ主催者の公式ホームページにてお確かめください。
            </p>
            <p tw="mt-4">
              7. RunWatchを構成するシステム・サーバーに悪影響を与える行為を禁じます。
              また、RunWatch運営及び利用者にとって著しく不利益となる行為を禁じます。
            </p>
            <p tw="mt-4">8.当社は予告無しに本規約を変更することがあります。</p>
          </section>
        </Modal>
      )}
      {privacyModal && (
        <Modal isModal={privacyModal} closeFunc={setPrivacyModal}>
          <section tw="sm:p-6 sm:pt-4 text-gray-700 mx-auto">
            <h2 tw="text-lg sm:text-2xl text-center flex items-center justify-center">
              <i tw="font-bold block h-1 w-4 sm:w-8 bg-teal-500 mr-3 sm:mr-12" />{' '}
              <span tw="whitespace-no-wrap">プライバシーポリシー</span>
              <i tw="font-bold block h-1 w-4 sm:w-8 bg-teal-500 ml-3 sm:ml-12" />
            </h2>
            <h3 tw="mt-4">要約</h3>
            <ul tw="text-sm sm:text-base mt-3 ml-3 sm:ml-6">
              <li>
                利用状況の分析のため、Google Analyticsを使用してトラフィック（アクセス）のデータを取得しています。
              </li>
              <li>サイト体験の向上のためにSessionStorageを使用し、検索情報を一時的にブラウザに保存しております。</li>
              <li>運営が無断でユーザーの個人情報を第三者に開示することはありません。</li>
            </ul>
            <h4 tw="mt-10 mb-3">Cookie</h4>
            <p tw="text-sm sm:text-base">
              Cookieは、Webサイトにアクセスしたときに閲覧したページ、クリックした広告、設定など、ユーザーがページ内で行う行動を記録するためにコンピュータ、またはその他のデバイスに配置された小さなテキストファイルのことです。当サイトではサイトの分析と改善のためにCookieを利用しています。トラフィックデータ収集にはGoogle
              Analyticsが使用されています。ユーザーはブラウザの設定によりCookieの送信を拒否することができます。データは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
            </p>
            <h4 tw="mt-10 mb-3">Session Storage </h4>
            <p tw="text-sm sm:text-base">
              SessionStorageとは、ウェブサイトがウェブブラウザに文字と数字の小さなファイルを保存するための標準化された技術です。
              <br />
              当サイトでは、サイトの利便性のためにSessionStorageを使用し、ユーザーの検索情報を一時的にブラウザに保存しております。このデータはユーザーのブラウザ内でのみ利用され、当サイトがデータを入手・利用することはありません。
              <br />
              SessionStorageファイルはブラウザ（またはタブ）を閉じると、自動的に削除されます。
            </p>
          </section>
        </Modal>
      )}
    </>
  )
}
