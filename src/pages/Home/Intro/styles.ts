import styled from 'styled-components'

export const IntroContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-height: 544px;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 18rem 2.5rem;
  box-sizing: border-box;
  overflow: hidden;
  gap: 2rem;
  > img {
    max-width: 476px;
    max-height: 360px;
    width: 100%;
    height: auto;
    display: block;
    flex-shrink: 0;
    flex-grow: 0;
    object-fit: contain;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 1200px) {
    padding: 2.5rem 2rem 2.5rem;
    > img {
      max-width: 350px;
    }
  }
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 0.5rem;
    > img {
      margin: 0 auto;
      max-width: 250px;
      max-height: 200px;
    }
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem 0.2rem;
    > img {
      max-width: 95vw;
      max-height: 120px;
    }
  }
`

export const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-size: cover;
  filter: blur(50px);
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-bottom: 3vw;
  @media (max-width: 900px) {
    max-width: 100vw;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 600px) {
    max-width: 100vw;
    align-items: center;
    text-align: center;
  }
`

export const ContainerOptiosIntens = styled.div`
  display: flex;
  max-width: 567px;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  overflow: visible;
  min-height: 120px;
  @media (max-width: 900px) {
    justify-content: flex-start;
    gap: 12px;
    min-height: 120px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    overflow: visible;
    min-height: unset;
  }
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
    line-height: 1.2;
    padding-top: 8px;
  }
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 400 bold;
    color: ${(props) => props.theme['base-subtitle']};
  }
  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
    h1 {
      font-size: 32px;
      padding-top: 6px;
    }
    p {
      font-size: 16px;
    }
  }
  @media (max-width: 600px) {
    align-items: center;
    text-align: center;
    h1 {
      font-size: 22px;
      padding-top: 4px;
    }
    p {
      font-size: 13px;
    }
  }
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
