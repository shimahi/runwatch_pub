import 'twin.macro'

export const Clock = ({ disabled }: { disabled: boolean }) => {
  return (
    <svg
      id="inu"
      data-name="inu"
      xmlns="http://www.w3.org/2000/svg"
      width="26.397"
      height="26.397"
      viewBox="0 0 26.397 26.397"
      tw="mr-4"
    >
      <path
        id="p1"
        data-name="p1"
        d="M13.2,0A13.2,13.2,0,1,0,26.4,13.2,13.214,13.214,0,0,0,13.2,0Zm0,23.255A10.056,10.056,0,1,1,23.255,13.2,10.067,10.067,0,0,1,13.2,23.255Z"
        transform="translate(0 0)"
        fill={disabled ? '#718196' : '#fff'}
      />
      <path
        id="p2"
        data-name="p2"
        d="M159.76,115.758a1.2,1.2,0,0,0-1.2,1.2v5.414l-3.818,3.818a1.2,1.2,0,1,0,1.691,1.691l4.518-4.518v-6.4A1.2,1.2,0,0,0,159.76,115.758Z"
        transform="translate(-146.436 -109.79)"
        fill={disabled ? '#718196' : '#fff'}
      />
    </svg>
  )
}
