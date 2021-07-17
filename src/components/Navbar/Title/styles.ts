import styled, { css } from 'styled-components'

export const Container = styled.h1`
  ${({ theme }) => css`
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: auto;
    font-family: Arial;
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.weight.normal};
    line-height: 3rem;
    letter-spacing: 0;
    text-align: center;
    z-index: 0;
  `}
`
