import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 256px;
  border-radius: 6px 36px;
  margin-bottom: 1rem;
  background: ${(props) => props.theme['base-card']};
  p {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    text-align: center;
    margin-bottom: 2rem;
  }
  span {
    display: flex;
    align-items: baseline;
    gap: 0.225rem;
    font-size: 14px;
    color: ${(props) => props.theme['base-text']};
  }
`

export const TagContainer = styled.div`
  display: flex;
  font-size: 0.625;
  align-items: center;
  justify-content: center;
  gap: 4px;
`
export const Tag = styled.div`
  display: flex;
  font-size: 0.625rem;
  text-transform: uppercase;
  padding: 4px 8px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  font-family: Roboto;
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  margin-bottom: 20px;
`
export const Buy = styled.div`
  display: flex;
  width: 100%;
  padding: 0 24px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 23px;
`
export const Actions = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`
export const Quantity = styled.div`
  display: flex;
  padding: 8px;
  gap: 4px;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }
`

export const AddToCart = styled.button`
  display: flex;
  width: 100%;
  padding: 8px;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;
  border: none;
  cursor: pointer;
  :hover {
    background: ${(props) => props.theme['purple-medium']};
  }
`
