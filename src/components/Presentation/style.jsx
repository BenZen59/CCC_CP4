import styled from 'styled-components';

const SPresentation = styled.div`
  .home{
      height: 100%;
      overflow-x: hidden;
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
  
  .textHome {
    position: absolute;
    z-index: 2;
    margin-left: 25%;
    margin-top: 1%;
    text-align: center;
    width: 35em;
    font-size: 30px;
    background-color: rgb(255, 255, 255, 0.5);
    border-radius: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  @media only screen and (max-width: 926px) {
    
    .sakura {
    height:130vh;
    width: 260%;
    background-repeat: repeat;
  }

  .textHome {
    position: absolute;
    z-index: 2;
    margin-left: 7%;
    margin-top: 30%;
    text-align: center;
    width: 16em;
    font-size: 20px;
    background-color: rgb(255, 255, 255, 0.5);
    border-radius: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;
export default SPresentation;
