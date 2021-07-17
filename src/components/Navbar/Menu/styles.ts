import styled, { css } from 'styled-components'

type ContainerProps = {
  avatar: string
}

export const Container = styled.div<ContainerProps>`
  ${({ avatar }) => css`
    z-index: 2;
    margin: 0 0 0 auto;
    width: 3.481rem;
    height: 3.521rem;
    border-radius: 50%;
    background: url(${avatar});
    cursor: pointer;
  `}
`
