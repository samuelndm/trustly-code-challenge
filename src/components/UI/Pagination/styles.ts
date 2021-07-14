import styled, { css } from 'styled-components'
import {
  FaAngleDoubleLeft,
  FaChevronLeft,
  FaChevronRight,
  FaAngleDoubleRight,
} from 'react-icons/fa'

type ContainerProps = {
  color?: string
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, color }) => css`
    margin: 20px 0;
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    --pagination-color: ${color || theme?.colors?.primary?.dark || '#31217C'};
  `}
`

export const Icon = styled.i`
  ${({ theme }) => css`
    margin: 0 5px;
    padding: 10px 14px;
    cursor: pointer;
    background-color: transparent;

    &:hover {
      border-radius: 3px;
      background-color: ${theme?.colors?.primary?.dark || '#31217C'};
      color: #fff;
      transition: background-color 2s ease-int-out;
    }

    @media screen and (max-width: 350px) {
      padding: 10px;
    }
  `}
`

export const FirstPageIcon = styled(FaAngleDoubleLeft)`
  ${Icon}
`

export const PrevPageIcon = styled(FaChevronLeft)`
  ${Icon}
`

export const NextPageIcon = styled(FaChevronRight)`
  ${Icon}
`

export const LastPageIcon = styled(FaAngleDoubleRight)`
  ${Icon}
`
