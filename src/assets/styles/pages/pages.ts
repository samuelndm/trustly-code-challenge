import styled, { css } from 'styled-components'

export const PageContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: ${theme.page.backgroundColor};
  `}
`

export const PageTitle = styled.h1``
