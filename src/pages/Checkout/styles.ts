import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2.5rem 20rem 2.5rem;
  h4 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  form {
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (max-width: 1200px) {
    padding: 2.5rem 2rem 2.5rem;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 0.5rem;
    form {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (max-width: 600px) {
    padding: 1rem 0.2rem;
    h4 {
      font-size: 16px;
    }
  }
`
