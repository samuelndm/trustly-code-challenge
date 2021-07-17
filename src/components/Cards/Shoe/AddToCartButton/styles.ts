import styled, { css } from 'styled-components'

export const Container = styled.button`
  ${({ theme }) => css`
    height: 4.17rem;
    width: 27.56rem;
    max-width: 100%;
    border-radius: 0.45rem;
    background-color: ${theme.colors.primary.base};
    color: ${theme.colors.white};
    cursor: pointer;

    font-family: 'Open Sans', sans-serif;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.9rem;
    letter-spacing: 0em;
    text-align: center;

    &:hover {
      background-color: ${theme.colors.primary.dark};
    }
  `}
`
