import css from 'styled-jsx/css'

const styles = css.global`
  :root { 
    --text: #333;
    --blue: #0064D8;
    --background: #111112;
    --ease-in-out: all .2s ease-in-out;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
    -webkit-overflow-scrolling: touch;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body {
    font-family: 'Open Sans',  Helvetica, -apple-system, sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 150%;
    background: var(--background);
    color: #FFF;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center
  }

  section {
    width: 1000px;
  }

  h1 {
    font-size: 17px;
    font-weight: 600;
    padding-bottom: 5px;
  }

  h2 {
    font-size: 15px;
    font-weight: 400;
    padding-bottom: 2px;
    opacity: 0.7;
  }

  h3 {
    font-size: 16px;
    font-weight: 600;
  }

  a { 
    text-decoration: none;
    font-weight: 600;
    color: var(--blue);
    cursor: pointer;
  }

  a:visited { 
    color: var(--blue); 
  }

  .pointer {
    cursor: pointer;
  }

  .fadein {
    animation: fadein 1s;
  }

  @keyframes fadein {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @media screen and (max-width: 1000px) {
    body {
      font-size: 14px;
      line-height: 140%;
    }

    section {
      width: 100%;
    }

    h1 {
      font-size: 15px;
      padding-bottom: 3px;
    }

    h2 {
      font-size: 14px;
    }
  }

`

export default styles