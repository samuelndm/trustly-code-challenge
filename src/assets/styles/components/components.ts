import styled, { css } from 'styled-components'

type FlexContainerProps = {
  width?: string
  alignItems?: string
  justifyContent?: string
}

type FlexItemProps = {
  lg?: number
  md?: number
  sm?: number
  xs?: number
  margin?: string
  padding?: string
}

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
  position: relative;
  @media (min-width: 480px) {
    max-width: 72.8rem;
  }
  @media (min-width: 992px) {
    max-width: 96rem;
  }
  @media (min-width: 1200px) {
    max-width: 114rem;
  }
`

export const ContainerTitle = styled.h2`
  margin: 0 0 1rem;
  color: #333;
  @media screen and (max-width: 586px) {
    text-align: center;
  }
`

export const FlexContainer = styled.div<FlexContainerProps>`
  ${({ width, alignItems, justifyContent }) => css`
    width: ${width || '100%'};
    display: flex;
    flex-wrap: wrap;
    align-items: ${alignItems || 'center'};
    justify-content: ${justifyContent || 'center'};
    &:after {
      content: '';
      flex: auto;
    }
  `}
`

export const FlexItem = styled.div<FlexItemProps>`
${({ lg, md, sm, xs, margin, padding }) => css`
display: flex;
align-items: center;
justify-content: center;
height: auto;
width: ${lg ? (100 / 12) * lg : '16.66'}%;
@media screen and (max-width: 1199px) {
  width: ${md ? (100 / 12) * md : '20'}%;
}
@media screen and (max-width: 991px) {
  width: ${sm ? (100 / 12) * sm : '33.33'}%;
}
@media screen and (max-width: 586px) {
  width: ${xs ? (100 / 12) * xs : '100'}%;
}
& > * {
  margin: ${margin || '0'};
  padding: ${padding || '0'};
  `}
}
`
