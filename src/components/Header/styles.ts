import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  padding: 2rem 0;
  position: sticky;
  background: ${(props) => props.theme.background};
  top: 0;
  left: 0;
  z-index: 10;
`
export const LocationCart = styled.div`
  display: flex;
  gap: 12px;
`
export const Location = styled.div`
  display: flex;
  padding: 8px;
  gap: 4px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-medium']};
  span {
    color: ${(props) => props.theme['purple-dark']};
    line-height: 0;
  }
`
export const Cart = styled.div`
  display: flex;
  padding: 8px;
  border-radius: 6px;
  background: ${(props) => props.theme['yellow-light']};
  border: none;
  cursor: pointer;
  position: relative;
`
export const TotalItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  width: 20px;
  height: 20px;
  z-index: 2;
  font-size: 12px;
  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme['white-total']};
  border-radius: 50%;
  font-family: Roboto;
  top: -10px;
  right: -10px;
  position: absolute;
`
