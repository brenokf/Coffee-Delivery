import styled from 'styled-components'

export const OrderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 4px;
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
    margin-bottom: 40px;
  }
`

export const OrderInfoStructure = styled.div`
  --radius-1: 6px;
  --radius-2: 36px;
  --border-width: 1px;

  background: linear-gradient(to right, orange, purple);
  border-radius: var(--radius-1) var(--radius-2);
  padding: var(--border-width);
`
export const OrderInfoInsideStructure = styled.div`
  display: flex;
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
`
export const OrderInfoPersonalInformation = styled.div`
  width: 526px;
  height: 270px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 40px;
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
  width: 354px;
`
export const Time = styled(OrderInfoTitleProps)`
  width: 185px;
`
export const Payment = styled(OrderInfoTitleProps)`
  width: 206px;
`
