import styled from 'styled-components';

const SClamp = styled.div`
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
    margin-left: 2%;
    margin-top: 1%;
    text-align: center;
    width: 60em;
    font-size: 30px;
    background-color: rgb(255, 255, 255, 0.5);
    border-radius: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-evenly;
  }

  .pictureProfile{
    width: 324px;
    height: 483px;
    border: 1px solid black;
  }
  @media only screen and (max-width: 926px) {
    
    .sakura {
    height:310vh;
    width: 648%;
    background-repeat: repeat;
  }
  
  .textHome {
    margin-left: 6%;
    margin-top: 30%;
    width: 17em;
    font-size: 20px;
    flex-direction: column;
  }
`;
export default SClamp;
