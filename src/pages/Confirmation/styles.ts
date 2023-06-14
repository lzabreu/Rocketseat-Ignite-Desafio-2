import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-top: 4rem;
  align-items: end;
  justify-content: space-between;
`
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 36.75rem;
  h1 {
    color: ${(props) => props.theme['yellow-dark']};
    font-weight: 800;
    font-size: 32px;
  }
  p {
    font-size: 1.25rem;
    margin-top: 4px;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  border-radius: 6px 36px;
  gap: 2rem;
  background: ${(props) => props.theme.background};
  min-width: 32rem;
  position: relative;
  margin-top: 2.5rem;
  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -2;
    border-radius: 6px 36px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }

  p {
    font-size: 1rem;
    margin-top: 4px;
    line-height: 1.25rem;
    color: ${(props) => props.theme['base-text']};
  }
`
export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.875rem;
`
export const IconContainer = styled.div`
  display: flex;
  width: 2rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`