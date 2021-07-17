import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 90.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 586px) {
    display: none;
  }
`

export const Line = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 0.1rem;
  max-width: 90rem;
  position: absolute;
  top: 0.6rem;
  left: 0;
  right: 0;
  background-color: #e8e8e8;
`

export const Step = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`

type CircleProps = {
  isActive: boolean
}

export const Circle = styled.div<CircleProps>`
  ${({ isActive }) => css`
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    background-color: ${isActive ? '#61CB46' : '#E8E8E8'};
  `}
`

export const Label = styled.span`
  position: absolute;
  top: 1.4rem;
  margin: 1.4rem 0 0;
  font-family: Arial;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.8rem;
  letter-spacing: 0;
  text-align: center;
  white-space: nowrap;
  color: #000000;
`
