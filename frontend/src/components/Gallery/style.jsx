import styled from "styled-components";

export default styled.section`
  background-color: #d7e6d7;
  width: 100vw;
  .main {
    .first_category {
      position: relative;
      .img1 {
        margin-top: 3.6em;
        width: 100%;
        height: 100%;
      }
      .attribute_video {
        position: absolute;
        margin: 6%;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        .wrapper {
          height: 100%;
          width: 50%;
          margin-top: 20%;
          .title {
            color: white;
            font-size: 7.5vmin;
            width: 100%;
            height: 10%;
            .big_suggestion {
              display: none;
            }
          }
          .center_video {
            margin-top: 35%;
            box-sizing: border-box;
            video {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
    .main_category {
      background-color: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1.2em;
      padding-bottom: 3em;
      margin-top: -0.2em;
      .div_button {
        font-size: 0.8em;
        background-color: black;
        margin: 1%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 75vw;
        height: 5vh;
        text-transform: uppercase;
        color: #d7e6d7;
      }
    }
    .second_category {
      background-color: black;
      width: 100vw;
      height: 20em;
    }
  }
  @media screen and (min-width: 640px) {
    .main {
      .first_category {
        .img1 {
        }
        .attribute_video {
          justify-content: center;
          .wrapper {
            width: 100%;
            margin-top: 6%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            .title {
              color: white;
              font-size: 7vmin;
              letter-spacing: 0.03em;
              word-spacing: 0.3em;
              width: 50%;
              height: 100%;
              .big_suggestion {
                display: block;
                width: 80%;
                height: 75%;
                margin-top: 2%;
                .suggestion {
                  background-color: #ffffff;
                  width: 52vmin;
                  height: 5vmin;
                  color: black;
                  font-size: 2.5vmin;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  word-spacing: 0.1em;
                }
                .suggestion2 {
                  margin-top: 2%;
                }
              }
            }
            .center_video {
              margin-top: -5%;
              width: 30%;
              box-sizing: border-box;
              video {
                width: 70%;
                height: 70%;
              }
            }
          }
        }
      }
      .main_category {
        display: none;
      }
    }
  }
`;
