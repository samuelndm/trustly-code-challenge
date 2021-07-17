import styled from 'styled-components'
import * as CheckoutStyle from '../styles'

export const Container = styled(CheckoutStyle.Block)`
  margin: 3rem 0;
  width: 100%;
`

export const Content = styled.div`
  margin: 0 0 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  & > * {
    padding: 0 1.5rem 0;
  }

  @media screen and (max-width: 586px) {
    width: 100%;
    margin: 0;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const SubTitle = styled(CheckoutStyle.SubTitle)``

export const Summary = styled(CheckoutStyle.Summary)``

export const Value = styled.span`
  font-family: Open Sans;
  font-size: 3.351rem;
  font-style: normal;
  font-weight: 400;
  line-height: 4.351rem;
  letter-spacing: 0;
  text-align: left;
`
