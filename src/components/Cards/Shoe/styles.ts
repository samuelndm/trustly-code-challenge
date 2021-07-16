import styled, { css } from 'styled-components'

export const Container = styled.div`
  height: 37.3rem;
  width: 29.822rem;
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
  align-items: center;
  justify-content: space-around;
`

export const Price = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-size: 2.1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.8rem;
  letter-spacing: 0;
  text-align: center;
`

export const Button = styled.button`
  ${({ theme }) => css`
    height: 4.17rem;
    width: 27.56rem;
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
