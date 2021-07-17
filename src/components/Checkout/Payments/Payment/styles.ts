import styled, { css } from 'styled-components'

type ContainerProps = {
  isSelected: boolean
}

export const Container = styled.li<ContainerProps>`
  ${({ isSelected }) => css`
    margin: 0 0 1.521rem;
    padding: 2.5rem 3.1rem 2.5rem 2.415rem;
    width: 100%;
    height: 7.5rem;
    max-height: 7.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    background: #ffffff;
    border-radius: 1.088rem;
    border: ${isSelected ? '1px solid #5DAC50' : 'none'};
    cursor: pointer;
  `}
`

export const Title = styled.h5`
  font-family: Open Sans;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.2rem;
  letter-spacing: 0;
  text-align: left;
  color: #535353;
`

export const Banner = styled.img`
  width: auto;
  height: 100%;
`

export const Discount = styled.span`
  position: absolute;
  top: -1rem;
  left: 4rem;
  height: 1.8rem;
  width: 7.69rem;
  border-radius: 0.208rem;
  background: #ffcc00;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Open Sans;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.3rem;
  letter-spacing: 0;
  text-align: center;
  color: #9e7d27;
`
