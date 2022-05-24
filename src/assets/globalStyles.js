import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  button{
    cursor: pointer;
    border: none;
    background: none;
  }

  .skeleton{
    padding: 1.2rem;
    background-color: #F5F5F5;
    border: 1px solid #D1D1D1;
    position: relative;
    width: 100%;
    overflow: hidden;
    display: flex;
  }

  .skeleton .rows{
    width: 95%;
    margin: 2px 0 0 2%;
  }

  .skeleton .rows div{
    background-color: #666;
    width: 100%;
    height: 10px;
    border-radius:10px;
    opacity: 0.3;
    margin-bottom: 5px;
    text-indent: -9999px;
    animation: shine 1s linear infinite alternate;
  }

  .skeleton .rows div:last-child{
    width: 70%;
  }

  @keyframes shine {
    100% {
      background-color: #AAA;
    }
  }
`;
 
export default GlobalStyle;