import styled from 'styled-components';

const SCard = styled.div`
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
    margin-top: 10%;
    text-align: center;
    width: 90em;
    font-size: 20px;
    background-color: rgb(255, 255, 255, 0.5);
    border-radius: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 926px) {
    
    .sakura {
    height:250vh;
    width: 500%;
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
export default SCard;
