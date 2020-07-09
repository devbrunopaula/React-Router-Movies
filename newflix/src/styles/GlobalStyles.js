import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}
:root {
    --primary: #e42414;
    --outline: #22222;
    --background: #22222;
    --grayFont: #C3C6C8;
}

html, body, :root {
    font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
   
}






 
`


export default GlobalStyle