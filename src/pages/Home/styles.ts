import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 94px;
  margin-bottom: 2rem;
  justify-content: space-between;
`
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 36.75rem;
  margin-right: 3.5rem;

  p {
    font-size: 1.25rem;
    margin-top: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const RightContainer = styled.div`
  display: flex;
`
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 250px 294px;
  gap: 1rem;
  margin-top: 4.125rem;

  span {
    color: ${(props) => props.theme['base-text']};
    display: flex;
    align-items: center;
    gap: 0.75rem;
    line-height: 20.8px;
  }
`
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  color: ${(props) => props.theme['background']};
`
export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: space-between;
  margin-top: 3.375rem;
  gap: 2rem;
`
