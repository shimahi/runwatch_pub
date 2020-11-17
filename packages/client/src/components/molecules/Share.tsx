import { useIsMobile, useAgent } from 'lib'
import 'twin.macro'
import twitterIcon from 'assets/icon_twitter.svg'
import facebookIcon from 'assets/icon_facebook.svg'
import hatebuIcon from 'assets/icon_hatebu.svg'
import lineIcon from 'assets/icon_line.svg'

const PAGE_URL = 'https://runwatch.app'

export const Share = () => {
  const isMobile = useIsMobile()
  const agent = useAgent()

  return (
    <div tw="flex justify-between w-full">
      <a
        tw="hover:opacity-75"
        href={`https://twitter.com/intent/tweet?text=アニメを探しています...%0a%0a&hashtags=RunWatch&url=${PAGE_URL}`}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={twitterIcon}
          alt="Twitterでシェア"
          width={isMobile ? '48px' : '40px'}
          height={isMobile ? '48px' : '40px'}
        />
      </a>
      <a
        tw="hover:opacity-75"
        href={`https://www.facebook.com/sharer/sharer.php?u=${PAGE_URL}`}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={facebookIcon}
          alt="Facebookでシェア"
          width={isMobile ? '48px' : '40px'}
          height={isMobile ? '48px' : '40px'}
        />
      </a>
      <a
        tw="hover:opacity-75"
        href={`https://b.hatena.ne.jp/entry/${PAGE_URL}`}
        data-hatena-bookmark-layout="touch"
        title="このエントリーをはてなブックマークに追加"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={hatebuIcon}
          alt="このエントリーをはてなブックマークに追加"
          width={isMobile ? '48px' : '40px'}
          height={isMobile ? '48px' : '40px'}
        />
      </a>
      <a
        tw="hover:opacity-75"
        href={
          agent === 'ios' || agent === 'android'
            ? `http://line.me/R/msg/text/?${PAGE_URL}`
            : `https://timeline.line.me/social-plugin/share?url=${PAGE_URL}`
        }
        target="_blank"
        rel="noreferrer"
      >
        <img src={lineIcon} alt="LINEで送る" width={isMobile ? '48px' : '40px'} height={isMobile ? '48px' : '40px'} />
      </a>
    </div>
  )
}
