import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
  position: relative;
  @media (min-width: 480px) {
    max-width: 728px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`

export const ContainerTitle = styled.h2`
  margin: 0 0 10px;
  color: #333;
  @media screen and (max-width: 586px) {
    text-align: center;
  }
`

type FlexContainerProps = {
  width?: string
  alignItems?: string
  justifyContent?: string
}

export const FlexContainer = styled.div<FlexContainerProps>`
  width: ${({ width }) => width || '100%'};
  display: flex;
  flex-wrap: wrap;
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  &:after {
    content: '';
    flex: auto;
  }
`

type FlexItemProps = {
  lg?: number
  md?: number
  sm?: number
  xs?: number
  margin?: number
  padding?: number
}

export const FlexItem = styled.div<FlexItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  width: ${({ lg }) => (lg ? (100 / 12) * lg : '16.66')}%;
  @media screen and (max-width: 1199px) {
    width: ${({ md }) => (md ? (100 / 12) * md : '20')}%;
  }
  @media screen and (max-width: 991px) {
    width: ${({ sm }) => (sm ? (100 / 12) * sm : '33.33')}%;
  }
  @media screen and (max-width: 586px) {
    width: ${({ xs }) => (xs ? (100 / 12) * xs : '100')}%;
  }
  & > * {
    margin: ${({ margin }) => margin || '0'};
    padding: ${({ padding }) => padding || '0'};
  }
`
