import styled from 'styled-components'

export const OrderInfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 32px;
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 32px;
    font-weight: 800;
    color: ${(props) => props.theme['yellow-dark']};
  }
  span {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0;
  }
  @media (max-width: 600px) {
    h1 {
      font-size: 24px;
    }
    span {
      font-size: 16px;
    }
  }
`

export const OrderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
`

export const OrderInfoStructure = styled.div`
  --radius-1: 6px;
  --radius-2: 36px;
  --border-width: 1px;

  background: linear-gradient(to right, orange, purple);
  border-radius: var(--radius-1) var(--radius-2);
  padding: var(--border-width);
  @media (max-width: 600px) {
    border-radius: 8px;
    padding: 2px;
  }
`
export const OrderInfoInsideStructure = styled.div`
  display: flex;
  height: auto;
  background: white;
  border-radius: calc(var(--radius-1) - var(--border-width))
    calc(var(--radius-2) - var(--border-width));
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 32px;
    font-weight: 800;
    color: ${(props) => props.theme['yellow-dark']};
  }
  span {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }
  @media (max-width: 600px) {
    border-radius: 8px;
    h1 {
      font-size: 20px;
    }
    span {
      font-size: 14px;
    }
  }
`
export const OrderInfoPersonalInformation = styled.div`
  width: 526px;
  min-height: 270px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 40px;
  @media (max-width: 600px) {
    width: 90vw;
    min-height: auto;
    padding: 16px 4px;
    gap: 8px;
  }
`

const TYPE_COLORS = {
  Brand: 'yellow-dark',
  Yellow: 'yellow',
  Purple: 'purple',
}

interface ItenPropsColor {
  itemColor: keyof typeof TYPE_COLORS
}

const OrderInfoTitleProps = styled.div<ItenPropsColor>`
  height: 42px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  margin-bottom: 0;
  span {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.background};
    background: ${(props) => props.theme[TYPE_COLORS[props.itemColor]]};
    width: 32px;
    height: 32px;
    padding: 8px;
    border-radius: 100px;
  }
`

export const Local = styled(OrderInfoTitleProps)`
  width: 100%;
  height: auto;
  padding-bottom: 20px;
  align-items: flex-start;
  span {
    word-break: break-word;
    white-space: normal;
    width: 100%;
    display: block;
    overflow-wrap: break-word;
    line-height: 1.4;
  }
  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 2px;
  }
`
export const Time = styled(OrderInfoTitleProps)`
  width: 185px;
  height: auto;
  padding-bottom: 20px;
  @media (max-width: 600px) {
    width: 90vw;
    margin-bottom: 2px;
  }
`
export const Payment = styled(OrderInfoTitleProps)`
  width: 206px;
  height: auto;
  padding-bottom: 20px;
  @media (max-width: 600px) {
    width: 90vw;
    margin-bottom: 6px;
  }
`
