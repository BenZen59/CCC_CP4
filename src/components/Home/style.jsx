import styled from 'styled-components';

const SHome = styled.div`
  .home{
      height: 100%;
      overflow: hidden;
      width: 100%;
      position: fixed;
    }
  .sakura {
    border-top: 1px solid black;
    display: flex;
    justify-content: space-around;
    width: 100%;
    position: absolute;
    z-index: 1;
  }
  .logo {
    position: absolute;
    z-index: 2;
    width: 50%;
    margin-left: 25%;
  }
  .textHome {
    position: absolute;
    z-index: 2;
    margin-left: 25%;
    margin-top: 27%;
    text-align: center;
    width: 30em;
    font-size: 30px;
    background-color: rgb(255, 255, 255, 0.5);
    border-radius: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  @media only screen and (max-width: 926px) {
    .sakura {
    height:100vh;
    width: 200%;
  }
  .logo {
    margin-left: 10%;
    margin-top: 30%;
    width: 80%;
  }
  .textHome {
    position: absolute;
    z-index: 2;
    margin-left: 8%;
    margin-top: 70%;
    text-align: center;
    width: 16em;
    font-size: 20px;
    background-color: rgb(255, 255, 255, 0.5);
    border-radius: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;
export default SHome;
