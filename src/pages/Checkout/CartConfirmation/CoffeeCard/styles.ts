import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

`
export const Buy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  
`
export const Actions = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`
export const Quantity = styled.div`
  display: flex;
  padding: 6px 8px;
  gap: 4px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['base-button']};
  button{
    background: none;
    border: none;
    cursor: pointer;
  }
`

export const RemoveFromCart = styled.button`
  display: flex;
  padding: 9px;
  gap: 4px;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};
  border: none;
  cursor: pointer;
`
export const Divider = styled.div`
  display: flex;
  width: 100%;
  height: 1px;
  background: ${(props) => props.theme['base-button']};
  margin-bottom:1.5rem;
 
`
