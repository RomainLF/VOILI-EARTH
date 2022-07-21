import styled from "styled-components";

export default styled.section`
  display: flex;
  .filtre {
    width: 25vw;
    height: 90vh;
    background-color: #c4cec3;
    margin-top: 3em;
    .cor {
      width: 18vw;
      height: 75vh;
      background-color: #ffffff;
      margin: auto;
      margin-top: 25%;
      .option {
        width: 16vw;
        height: 28vh;
        background-color: #c0c0d5;
        margin: auto;
        margin-top: 20%;
        display: flex;
        flex-direction: column;
        .cub {
          background-color: #ffffff;
          width: 50%;
          height: 2em;
          margin: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          border: none;
        }
      }
    }
  }
  .main {
    background-color: #cccccc;
    margin-top: 3em;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 75vw;
    height: 90vh;
  }
`;
