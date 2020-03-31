import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
 *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }
:root {
  font-size: calc(0.5em + 1vw);
	--mainFont: 'Open Sans', sans-serif;
	--headingFont: 'Playfair Display', sans-serif;
}


  body {
		box-sizing: border-box;
    font-family: var(--mainFont);
    margin: 0;
    padding:0;
    color: #fff;
    background-color: #222;
  }

	h1, h2, h3, h4 {
		font-family: var(--headingFont);
	}

li {
  list-style-type: none;
}
`;
export default GlobalStyle