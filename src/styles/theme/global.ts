import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  --webkit-font-smoothing: antialiased;
  --moz-osx-font-smoothing: grayscale;
}

body{
    background: ${(props) => props.theme.background};
}
textarea, button, span, p {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;
}
input{
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;
  font-size: 12px;
  padding: 12px;
  border: none;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  color: ${(props) => props.theme['base-text']};
  background: ${(props) => props.theme['base-input']};
  align-items: center;
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;
  cursor: pointer;
  ::placeholder { color: ${(props) => props.theme['base-label']}};
}
h1{
font-family: 'Baloo 2', cursive;
font-weight: 800;
font-size: 3rem;
line-height: 130%;
color: ${(props) => props.theme['base-title']};
}
h2{
font-family: 'Baloo 2', cursive;
font-weight: 800;
font-size: 2rem;
line-height: 130%;
color: ${(props) => props.theme['base-subtitle']};
}
h3{
font-family: 'Baloo 2', cursive;
font-weight: 700;
font-size: 1,25rem;
line-height: 130%;
color: ${(props) => props.theme['base-subtitle']};
}
`
