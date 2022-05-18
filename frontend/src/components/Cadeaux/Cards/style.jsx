import styled from "styled-components";

export default styled.section`
  .mainCard {
    background-color: #ffffff;
    width: 18rem;
    height: 30rem;
    margin: auto;
    margin: 4rem;
    .posimg {
      width: 18rem;
      height: 23rem;
      margin: auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
    p {
      font-size: 80%;
      color: #707070;
      margin-top: 5%;
      margin-bottom: 1%;
    }
    .Card {
      margin-bottom: 1%;
    }
    .Price {
      margin-bottom: 5%;
    }
    .MainColor {
      background-color: #ffffff;
      width: 100%;
      button {
        aspect-ratio: 1/1;
        width: 7%;
        margin-right: 5%;
        border: 1px black solid;
        border-radius: 50%;
      }
    }
  }
`;
