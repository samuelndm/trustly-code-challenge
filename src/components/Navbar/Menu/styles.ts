import styled, { css } from 'styled-components'

type ContainerProps = {
  avatar: string
}

export const Container = styled.div<ContainerProps>`
  ${({ avatar }) => css`
    width: 3.481rem;
    height: 3.521rem;
    border-radius: 50%;
    background: url(${avatar});
    cursor: pointer;
  `}
`
