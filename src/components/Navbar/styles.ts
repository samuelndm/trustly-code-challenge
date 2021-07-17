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
  position: relative;
`
