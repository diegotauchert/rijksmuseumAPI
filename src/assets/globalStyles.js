import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
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
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .skeleton .rows .lines div, .skeleton .rows div.thumb{
    background-color: #666;
    width: 100%;
    height: 12px;
    border-radius:10px;
    opacity: 0.3;
    margin-bottom: 5px;
    text-indent: -9999px;
    animation: shine 1s linear infinite alternate;
  }

  .skeleton .rows .lines div:last-child{
    width: 70%;
  }

  .skeleton .rows .lines{
    width: 55%;
  }

  .skeleton .rows .thumb{
    height: 310px !important;
    width: 45% !important;
  }

  @keyframes shine {
    100% {
      background-color: #AAA;
    }
  }
`;
 
export default GlobalStyle;