import styled from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 544px;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2.5rem 20rem 2.5rem;

  img {
    margin-left: 145px;
    max-width: 476px;
    max-height: 360px;
  }
  @media (max-width: 900px) {
  }
`
export const BackgroundContainer = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  max-height: 34rem;
  z-index: -1;
  background-size: cover;
  -webkit-filter: blur(50px);
  background:
    url(src/assets/Vector-10.svg) 10% 100% no-repeat,
    url(src/assets/Vector-9.svg) 45% 43% no-repeat,
    url(src/assets/Vector-8.svg) 50.2% 95% no-repeat,
    url(src/assets/Vector-7.svg) 75.6% 98.5% no-repeat,
    url(src/assets/Vector-6.svg) 14.9% 47% no-repeat,
    url(src/assets/Vector-5.svg) 89.8% 99% no-repeat,
    url(src/assets/Vector-4.svg) 89% 49% no-repeat,
    url(src/assets/Vector-3.svg) 45% 63% no-repeat,
    url(src/assets/Vector-2.svg) 57% 70% no-repeat,
    url(src/assets/Vector-1.svg) 27% 95% no-repeat;
`

export const InformationContainer = styled.div`
  max-width: 588px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  /* padding: 4rem 0 0 0;
  margin-right: 2rem; */
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 30px 0 20px;
  padding: 0 0 2.4rem;
  gap: 1rem;
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 48px;
    font-weight: 800;
    line-height: 130%;
  }
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 400 bold;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ContainerOptiosIntens = styled.div`
  display: flex;
  max-width: 567px;
  max-height: 84px;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
`
export const ItenOption = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-right: 5%;
  span {
    font-family: 'Roboto', sans-serif;
    line-height: 130%;
    font-size: 16px;
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
  }
`
const TYPE_COLORS = {
  Brand: 'yellow-dark',
  Yellow: 'yellow',
  Black: 'base-text',
  Purple: 'purple',
}

interface ItenPropsColor {
  itemColor: keyof typeof TYPE_COLORS
}

export const IconItem = styled.div<ItenPropsColor>`
  display: flex;
  padding: 8px;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${(props) => props.theme[TYPE_COLORS[props.itemColor]]};
  color: ${(props) => props.theme.white};
`
