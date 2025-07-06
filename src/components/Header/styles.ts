import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 18rem 2rem;
  gap: 20px;
  nav {
    display: flex;
    gap: 0.5rem;
  }
  @media (max-width: 1200px) {
    padding: 2rem 4rem 2rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 1rem;
    gap: 10px;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12.06rem;
  height: 100%;
  gap: 12px;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
  }
`

export const LocationActionContainer = styled.div`
  width: 8.93rem;
  height: 2.37rem;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  gap: 6px;
  svg {
    opacity: 10%;
    color: ${(props) => props.theme.purple};
  }
  @media (max-width: 480px) {
    width: 100%;
    font-size: 0.9rem;
  }
`

export const CartActionContainer = styled.div`
  width: 2.37rem;
  height: 2.37rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${(props) => props.theme['yellow-light']};
  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`
export const CartCounter = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  margin-top: -28px;
  margin-left: 35px;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 50px;
  background-color: ${(props) => props.theme['yellow-dark']};
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme.white};
  }
  @media (max-width: 480px) {
    margin-left: 20px;
    margin-top: -20px;
    width: 16px;
    height: 16px;
    p {
      font-size: 12px;
    }
  }
`
