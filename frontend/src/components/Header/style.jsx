import styled from "styled-components";

export default styled.header`
  margin: O;
  box-sizing: border-box;
  .nav {
    //margin-top: -3.6em;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8.5vh;
    width: 100vw;
    padding-left: 1rem;
    background: white;
    z-index: 9;
    .nav__menu {
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 1rem;
      margin-right: 20vw;
      .connect {
        display: none;
      }
    }
    .nav__brand {
      text-transform: uppercase;
      font-size: 1.8rem;
      letter-spacing: 0.15em;
    }
    li {
      list-style: none;
      margin-right: 2vw;
      font-size: 11px;
      text-transform: uppercase;
      :first-child {
        display: none;
      }
    }
  }
  .nav__toggler {
    display: none;
  }
  .nav__toggler div {
    width: 1.4rem;
    height: 0.07rem;
    margin: 0.3rem;
    background: #6b6a6a;
    transition: 0.1s ease-in;
  }
  .homme,
  .femmes,
  .enfants,
  .maison,
  .cadeaux,
  .wor,
  .services,
  .preferes,
  .magasins,
  .fr {
    transform: translateX(-60%);
  }
  .nav__active .homme {
    transform: translateX(0%);
    transition: 0.3s ease-in;
  }
  .nav__active .femmes {
    transform: translateX(0%);
    transition: 0.4s ease-in;
  }
  .nav__active .enfants {
    transform: translateX(0%);
    transition: 0.5s ease-in;
  }
  .nav__active .maison {
    transform: translateX(0%);
    transition: 0.6s ease-in;
  }
  .nav__active .cadeaux {
    transform: translateX(0%);
    transition: 0.7s ease-in;
  }
  .nav__active .wor {
    transform: translateX(0%);
    transition: 0.8s ease-in;
  }
  .nav__active .services {
    transform: translateX(0%);
    transition: 0.9s ease-in;
  }
  .nav__active .preferes {
    transform: translateX(0%);
    transition: 1s ease-in;
  }
  .nav__active .magasins {
    transform: translateX(0%);
    transition: 1.1s ease-in;
  }
  .nav__active .fr {
    transform: translateX(0%);
    transition: 1.2s ease-in;
  }

  .header_icons {
    display: flex;
    justify-content: space-around;
    margin-right: 5vh;
    width: 7%;
    .picto {
      width: 70%;
    }
    .correction {
      //img loupe réduite
      width: 50%;
    }
  }
  //Nav bar bleu de la version mobile
  .bleu {
    display: none;
  }
  //config des liens
  a {
    text-decoration: none;
    color: black;
  }

  /* ---------MOBILE VERSION-------- */
  /* ---------MOBILE VERSION-------- */
  /* ---------MOBILE VERSION-------- */

  @media screen and (max-width: 768px) {
    .nav__toggler {
      display: block;
      cursor: pointer;
    }
    .nav {
      .nav__brand {
        margin-left: 5vw;
        font-size: 1.2rem;
      }
    }
    .nav__menu {
      position: fixed;
      top: 8.5vh;
      left: 0;
      height: 92vh;
      width: 53vw;
      background: white;
      flex-direction: column;
      transform: translateX(-100%);
      transition: 0.2s ease-in;
      justify-content: start;
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 1rem;
      z-index: 2;
      .connect {
        display: flex;
        background-color: #eaecf3;
        height: 7vh;
        margin-right: 1.9em;
        padding-right: 1.6em;
        .picto2 {
          width: 7%;
          margin: 2.3vw;
          .sc1 {
            /*sc1 correspond au text de "se connecter" dans la navbar*/
            font-size: 15px;
          }
        }
      }
      li {
        height: 5vh;
        width: 50vw;
        margin-right: 0;
        display: flex;
        align-items: center;
        margin-left: 1rem;
        text-transform: uppercase;
        font-size: 13px;
        color: #363a4e;
      }
      .footerNav {
        height: 15rem;
        background-color: #041e3a;
        li {
          margin-top: 0.5rem;
          //margin-left: 1rem;
          font-size: 12px;
          color: #d9dff1;
          text-transform: none;
          img {
            margin-right: 0.6rem;
          }
        }
        .bleu {
          display: flex;
          background-color: #041e3a;
          padding-left: 0.2em;
        }
      }
    }
    .header_icons {
      width: 10%;
      margin-right: 9vw;
      .Loupe__picto {
        margin-right: 5vw;
      }
      .picto {
        width: 190%;
      }
      .correction {
        width: 140%;
      }
      .compte__picto {
        display: none;
      }
    }
    li:first-child {
      display: flex;
    }
    .nav__active {
      transform: translateX(0%);
    }
    .toggle .line1 {
      transform: rotate(-45deg) translate(-2px, 2.5px);
    }
    .toggle .line3 {
      transform: rotate(45deg) translate(-2px, -2.5px);
    }
    .nav {
      .nav__menu {
        .connect {
          display: flex;
        }
      }
    }
  }
`;
