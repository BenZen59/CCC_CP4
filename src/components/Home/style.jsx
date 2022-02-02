import styled from 'styled-components';

const SHome = styled.div`
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
    margin-left: 50%;
    margin-top: 25%;
    text-align: center;
    width: 30em;
    font-size: 30px;
    background-color: white;
    opacity: 70%;
    border-radius: 10%;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;
export default SHome;
