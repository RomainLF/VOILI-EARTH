import styled from "styled-components";

export default styled.div`
  .loupe__menu {
    position: fixed;
    top: 8.5vh;
    right: 0;
    height: 33vh;
    width: 100vw;
    background: #ffffff;
    flex-direction: column;
    transform: translateY(0%);
    transition: 0.1s ease-in;
    justify-content: center;

    .fullSearch {
      background-color: white;
      height: 8vh;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      input {
        height: 5vh;
        width: 50vw;
        border: none;
        border-bottom: 2px solid #939eaa;
        text-align: center;
        ::placeholder {
          font-size: 1.5em;
          color: #939eaa;
          text-align: center;
        }
      }
    }
    .loupe__category {
      margin-top: 0.5vh;
      background-color: white;
      z-index: 0;
      ul {
        display: felx;
        flex-direction: row;
        justify-content: center;
        margin-left: 0;
        li {
          width: 8vw;
          height: 5vh;
          margin: 1vw;
          background-color: #ece9e9;
          font-size: 12px;
          color: #092858;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 25px;
          :first-child {
            background-color: #092858;
            color: white;
            display: flex;
            justify-content: center;
            border-radius: 25px;
          }
        }
      }
    }
    .searchSuggestion {
      background-color: white;
      display: flex;
      justify-content: center;
      margin-top: 3vh;
      ul {
        display: flex;
        align-items: center;
        flex-direction: row;
        li {
          font-size: 14px;
          margin: 7px;
          margin-left: 15px;
          color: #092858;
          display: flex;
          :first-child {
            text-transform: uppercase;
            display: flex;
            color: #092858;
            font-size: 16px;
          }
          img {
            width: 10%;
            height: 100%;
            padding-right: 1vw;
          }
        }
      }
    }
  }

  /* ---------MOBILE VERSION-------- */
  /* ---------MOBILE VERSION-------- */
  /* ---------MOBILE VERSION-------- */

  @media screen and (max-width: 768px) {
    .loupe__menu {
      z-index: 2;
      top: 8vh;
      .fullSearch {
        input {
          width: 80vw;
        }
      }
      .loupe__category {
        ul {
          margin-top: 1vh;
          li {
            width: 16vw;
            height: 4vh;
          }
        }
      }
      .searchSuggestion {
        justify-content: flex-start;
        ul {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          li {
            font-size: 70%;
            width: 100%;
            img {
              width: 5%;
              height: 100%;
            }
          }
        }
      }
    }
  }
`;
