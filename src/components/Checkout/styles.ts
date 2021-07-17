import styled, { css } from 'styled-components'

type ImageContainerProps = {
  imageURL: string
}

export const Container = styled.section`
  margin: 8.637rem 0 0;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  & > * {
    margin: 0 1.8rem;
  }
`

export const ImageContainer = styled.div<ImageContainerProps>`
  ${({ imageURL }) => css`
    flex: 1;
    max-width: 53.3rem;
    height: 63.3rem;
    border-radius: 1.088rem;
    background-image: url(${imageURL});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media screen and (max-width: 768px) {
      display: none;
    }
  `}
`

export const Info = styled.div`
  padding: 3rem;
  width: 52%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #f7f7f7;
  border-radius: 1.088rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const Title = styled.h1`
  margin: 0 0 1.9rem;
  font-family: Open Sans;
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3rem;
  letter-spacing: 0;
  text-align: left;
`

export const SubTitle = styled.h2`
  margin: 0 0 0.642rem;
  font-family: Open Sans;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: 0;
  text-align: left;
`

export const Summary = styled.p`
  font-family: Open Sans;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.5rem;
  letter-spacing: 0;
  text-align: left;
  white-space: pre;
  color: #a5a5a5;
`
