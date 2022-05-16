import styled from "styled-components";

export default styled.div`
  .panier__menu {
    position: fixed;
    z-index: 2;
    top: 9.5vh;
    right: 0;
    height: 40vh;
    width: 20vw;
    background: white;
    flex-direction: column;
    transform: translateX(-3%);
    transition: 0.2s ease-in;
    justify-content: start;
    border: 0.15rem solid #6b6a6a;
    box-sizing: border-box;
    border-radius: 1rem;
    overflow: hidden;
    .vlp {
      background-color: #ece9e9;
      height: 4vh;
      width: 100%;
      margin-top: 35.5vh;
      display: flex;
      justify-content: center;
      font-size: 10px;
      border-bottom-left-radius: 0.8rem;
      border-bottom-right-radius: 0.8rem;
    }
    .panier {
      display: flex;
      justify-content: center;
      font-size: 16px;
      font-weight: bold;
      margin-top: 38px;
    }
  }
  /* ---------MOBILE VERSION-------- */
  /* ---------MOBILE VERSION-------- */
  /* ---------MOBILE VERSION-------- */

  @media screen and (max-width: 768px) {
    .panier__menu {
      height: 40vh;
      width: 45vw;
      top: 10vh;
      .panier {
        margin: -10px;
        font-size: 12px;
      }
    }
  }
`;
