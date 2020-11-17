import tw, { css, styled } from 'twin.macro'

export const Select = styled.select(({ agent }: { agent: string }) => {
  const arrowOffset =
    agent === 'safari' || agent === 'firefox' || agent === 'ios' || agent === 'edge' ? '9.5px' : '7.5px'

  return css`
    ${tw`w-56 rounded-md bg-gray-800 text-white focus:text-pink-500 hover:opacity-75`}
    font-weight: 600;
    position: relative;
    display: block;
    cursor: pointer;
    padding: 1.1rem 1rem;
    padding-left: 1.5rem;
    background-image: linear-gradient(45deg, transparent 50%, #4a5568 50%),
      linear-gradient(135deg, #4a5568 50%, transparent 50%), linear-gradient(to right, #e2e8f0, #e2e8f0);
    background-position: calc(100% - 20px) calc(1em + ${arrowOffset}), calc(100% - 15px) calc(1em + ${arrowOffset}),
      100% 0;
    background-size: 5px 8px, 5px 8px, 2.8em 3.9em;
    background-repeat: no-repeat;
    [data-whatinput='mouse'] &:focus {
      color: white;
    }
  `
})
