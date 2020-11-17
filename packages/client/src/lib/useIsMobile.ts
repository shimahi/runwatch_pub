import { useMedia } from 'react-use'
import { isMobile as isDeviceMobile } from 'react-device-detect'

export const useIsMobile = () => {
  // iPadはSPとして扱う
  const isMobile = useMedia('(max-width: 768px)')
  if (isDeviceMobile) return true

  return isMobile
}
