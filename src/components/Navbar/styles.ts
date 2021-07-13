import styled, { css } from 'styled-components'
import { componentsDefaultStyles } from 'assets/styles'

export const Container = styled.div`
  ${({ theme }) => css`
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: ${theme.navbar.height};
    background-color: ${theme.navbar.backgroudColor};
  `}
`

export const Content = styled(componentsDefaultStyles.Container)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-family: Arial;
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.weight.normal};
    line-height: 3rem;
    letter-spacing: 0;
    text-align: center;
  `}
`
