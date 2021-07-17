import styled from 'styled-components'

export const Container = styled.div`
  height: 37.3rem;
  width: 29.822rem;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const Info = styled.div`
  padding: 1.4rem 1.081rem 1.115rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0.6rem 1.6rem rgba(0, 0, 0, 0.05);
`

export const Description = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.8rem;
  letter-spacing: 0;
  text-align: center;
  color: #000000;
`

export const Values = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 586px) {
    & > * {
      margin: 0.5rem 0;
    }
  }
`
