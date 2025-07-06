import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  padding: 2.5rem 20rem 2.5rem;
  img {
    margin-top: 10%;
  }
  @media (max-width: 1200px) {
    padding: 2.5rem 2rem 2.5rem;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 0.5rem;
    img {
      margin-top: 2rem;
      max-width: 250px;
      width: 100%;
    }
  }
  @media (max-width: 600px) {
    padding: 1rem 0.2rem;
    img {
      max-width: 95vw;
      max-height: 120px;
    }
  }
`
