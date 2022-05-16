import styled from "styled-components";

export default styled.section`
  .formInput {
    display: flex;
    flex-direction: column;
    width: 15em;
    input {
      padding: 0.5em;
      margin: 0.5em 0;
      border-radius: 0.7em;
      border: 1px solid gray;
    }
    span {
      font-size: 0.5em;
      color: red;
      display: none;
    }
    input:invalid[focused="true"] {
      border: 1px solid red;
    }
    input:invalid[focused="true"] ~ span {
      display: block;
    }
  }
`;
