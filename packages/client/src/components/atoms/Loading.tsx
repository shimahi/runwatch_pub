import { sm } from 'lib'
import { css, keyframes } from '@emotion/core'

export const Loading = () => (
  <div css={loading}>
    <i />
    <i />
    <i />
    <i />
    <i />
    <i />
    <i />
    <i />
    <i />
  </div>
)

const bounceDelay = keyframes`{
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`

const loading = css`
  margin: 30px auto;
  width: 100%;
  padding: 0 10%;
  max-width: 300px;
  display: flex;
  justify-content: space-between;
  ${sm} {
    padding: 0;
  }
  & > i {
    display: block;
    background-color: #cef;
    border-radius: 100%;
    animation: ${bounceDelay} 1.4s infinite ease-in-out both;
    width: 10px;
    height: 10px;
    ${sm} {
      width: 12px;
      height: 12px;
    }

    &:nth-of-type(1) {
      background-color: #87f;
      animation-delay: -0.64s;
    }
    &:nth-of-type(2) {
      animation-delay: -0.56s;
      background-color: #09f;
    }
    &:nth-of-type(3) {
      animation-delay: -0.48s;
      background-color: #3cf;
    }
    &:nth-of-type(4) {
      animation-delay: -0.4s;
      background-color: #3f9;
    }
    &:nth-of-type(5) {
      animation-delay: -0.32s;
      background-color: #3fc;
    }
    &:nth-of-type(6) {
      animation-delay: -0.24s;
      background-color: #ff9;
    }
    &:nth-of-type(7) {
      animation-delay: -0.16s;
      background-color: #fc3;
    }
    &:nth-of-type(8) {
      animation-delay: -0.08s;
      background-color: #f93;
    }
    &:nth-of-type(9) {
      background-color: #f69;
    }
  }
`
