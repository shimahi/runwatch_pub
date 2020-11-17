const map: any = { '&nbsp;': ' ', '&lt;': '<', '&gt;': '>', '&amp;': '&', '&quot;': '"', '&apos;': "'", '&copy;': '©' }

/**
 *
 * 特殊文字を一般文字にデコードする
 * https://www.bugbugnow.net/2020/02/HTML-special-character-converter.html
 * FIXME: ↑をコピペで使ってる。コール回数が多いので別の方法ないか検討したい
 * @param src 特殊文字を含む文字列
 */
export const chardecode = (src: string) => {
  const re = /&#x([0-9A-Fa-f]+);|&#(\d+);|&\w+;|[^&]+|&/g
  let text: any = ''
  let m: any
  // eslint-disable-next-line
  while ((m = re.exec(src)) !== null) {
    if (m[0].charAt(0) === '&') {
      if (m[0].length === 1) {
        // ？？？
        text += m[0]
      } else if (m[0].charAt(1) === '#') {
        // 数値文字参照
        if (m[0].charAt(2) === 'x') {
          text += String.fromCharCode(parseInt(m[1], 16))
        } else {
          text += String.fromCharCode(m[2] - 0)
        }
        // eslint-disable-next-line
      } else if (map.hasOwnProperty(m[0])) {
        // 定義済み文字実体参照
        text += map[m[0]]
      } else {
        // 未定義文字実体参照（諦める）
        text += m[0]
      }
    } else {
      // 通常文字列
      text += m[0]
    }
  }

  return text
}
