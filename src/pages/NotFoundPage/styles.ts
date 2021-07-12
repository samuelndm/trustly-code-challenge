import styled, { css } from 'styled-components'
import { FaSadCry } from 'react-icons/fa'
import { pagesDefaultStyles, componentsDefaultStyles } from 'assets/styles'

export const Container = styled(pagesDefaultStyles.PageContainer)`
  justify-content: center;
`

export const Content = styled(componentsDefaultStyles.Container)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Title = styled(pagesDefaultStyles.PageTitle)`
  ${({ theme }) => css`
    margin: 0 10px;
    color: ${theme.colors.primary.dark};
  `}
`

export const sadIcon = styled(FaSadCry)`
  ${({ theme }) => css`
    font-size: 50px;
    color: ${theme.colors.primary.dark};
  `}
`
