import styled from 'styled-components'

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 448px;
  gap: 8px;
  margin-top: 1rem;
`
export const Right = styled.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px 6px 44px;
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
  }
`
export const CoffeeCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 350px;
  overflow-y: scroll;
  margin-bottom: 50px;
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.2);
  }
`
export const Confirm = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
`
export const Total = styled.div`
  display: flex;
  flex-direction: column;
  p {
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
    margin-bottom: 13.5px;
    span {
      font-size: 1rem;
    }
  }
  h3 {
    font-family: Roboto, serif;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
`

export const Button = styled.button`
  margin-top: 10px;
  padding: 12px 8px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  color: ${(props) => props.theme['white-total']};
  background: ${(props) => props.theme['yellow-medium']};
`
