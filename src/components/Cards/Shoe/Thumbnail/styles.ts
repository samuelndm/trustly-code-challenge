import styled from 'styled-components'

export const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  border-radius: 0.45rem;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
    cursor: -moz-zoom-in;
    cursor: -webkit-zoom-in;
    cursor: zoom-in;
  }
`

export const ImageFullResolution = styled.img`
  width: 100%;
  height: auto;
  max-width: 60rem;
  max-height: 60rem;
  border-radius: 0.45rem;
`
