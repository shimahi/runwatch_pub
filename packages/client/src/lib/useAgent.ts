import { isMobile } from 'react-device-detect'

export const useAgent = () => {
  const userAgent = window.navigator.userAgent.toLowerCase()

  if (isMobile) {
    const isIOS = userAgent.indexOf('safari') !== -1

    return isIOS ? 'ios' : 'android'
  }

  if (userAgent.indexOf('msie') !== -1 || userAgent.indexOf('trident') !== -1) {
    return 'ie'
  }
  if (userAgent.indexOf('edge') !== -1) {
    return 'edge'
  }
  if (userAgent.indexOf('chrome') !== -1) {
    return 'chrome'
  }
  if (userAgent.indexOf('safari') !== -1) {
    return 'safari'
  }
  if (userAgent.indexOf('firefox') !== -1) {
    return 'firefox'
  }
  if (userAgent.indexOf('opera') !== -1) {
    return 'opera'
  }

  return 'other'
}
