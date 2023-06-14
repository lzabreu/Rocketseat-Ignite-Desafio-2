import styled from 'styled-components'

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 640px;
  gap: 8px;
  margin-top: 1rem;
`
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
`
export const OrderTitle = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 1rem;
  border-radius: 6px;
  padding: 2.5rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 2.5rem 2.5rem 2.5rem;
  div {
    display: flex;
    gap: 12px;
  }
`
export const Payment = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding: 0 2.5rem 2.5rem 2.5rem;
  align-items: center;
  button {
    border: none;
  }
`
export const PaymentType = styled.button`
  display: flex;
  flex: 1;
  padding: 1rem 1rem 1rem 1rem;
  gap: 0.75rem;
  align-items: center;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  font-size: 0.65rem;
  color: ${(props) => props.theme['base-text']};
  border: none;
  cursor: pointer;
  text-transform: uppercase;

  :hover {
    background: ${(props) => props.theme['base-hover']};
  }
  :active {
    background: ${(props) => props.theme['purple-light']};
  }
  :focus {
    background: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme['purple-medium']};
  }
`
