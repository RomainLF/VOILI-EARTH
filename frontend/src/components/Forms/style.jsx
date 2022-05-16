import styled from "styled-components";

export default styled.section`
  padding-top: 5em;
  margin-left: 2em;
  .main_card {
    background-color: #092858;
    width: 22em;
    height: 32.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    .main {
      background-color: #ffffff;
      border-radius: 0.5em;
      width: 20em;
      height: 30.5em;
      .txt {
        width: 18em;
        height: 4.5em;
        margin-bottom: 1em;
        h1 {
          font-size: 1.7em;
          padding: 0.4em;
          color: #000000;
        }
        p {
          font-size: 0.7em;
          margin-left: 1em;
          color: #b4bdca;
        }
      }
    }
    form {
      background-color: #ffffff;
      margin: 0.5em;
      .setButton {
        margin-top: 1em;
        text-align: center;
        button {
          background-color: #4bda4b;
          border: none;
          padding: 0.5em;
          padding-left: 3em;
          padding-right: 3em;
          border-radius: 0.5em;
        }
      }
    }
  }
`;
