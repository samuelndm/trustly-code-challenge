import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  padding: 0 1.7rem;
  width: 11.53rem;
  height: 3.481rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1.7425rem;
  background-color: #eaeaea;
  cursor: pointer;
  opacity: 1;

  &:hover {
    background-color: ${darken(0.03, '#eaeaea')};
  }
`

export const ArrowIcon = styled.img`
  height: 1.74rem;
  width: 1.74rem;
`

export const Title = styled.p`
  ${({ theme }) => css`
    font-family: Arial;
    font-size: 2.2rem;
    font-style: normal;
    font-weight: ${theme.font.weight.normal};
    line-height: 2.5rem;
    letter-spacing: 0;
    text-align: left;
  `}
`
