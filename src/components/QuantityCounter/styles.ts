import styled from 'styled-components';

export const Quantity = styled.div`
  display: flex;
  padding: 8px;
  width: 70px;
  gap: 4px;
  border-radius: 6px;
  justify-content: space-between;
  background: ${(props) => props.theme['base-button']};
  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }
  span {
    color: ${(props) => props.theme['base-text']};
  }
  button:hover{
    color: ${(props) => props.theme['purple-dark']};
  }
`
