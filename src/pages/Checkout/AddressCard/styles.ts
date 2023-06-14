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

  input[type='text']:focus {
    border: 1px solid ${(props) => props.theme['yellow-medium']};
  }
  input[type='text']:active {
    background-color: ${(props) => props.theme['base-input']};
  }
  input[type='text']:not(:placeholder-shown) {
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['yellow-medium']};
  }
`
export const Payment = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding: 0 2.5rem 2.5rem 2.5rem;
  align-items: center;
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
`
export const Button = styled.button`
  padding: 12px 8px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  color: ${(props) => props.theme['white-total']};
  background: ${(props) => props.theme['yellow-medium']};
`
export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  padding-left: 13px;

`
