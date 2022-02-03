import styled from 'styled-components';

const SFooter = styled.footer`
  .footer {
    z-index: 2;
    position: fixed;
    background-color: var(--mColor);
    font-family: var(--mFont);
    height: 52px;
    color: white;
    font-size: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    bottom: 0;
    border: 1px solid black;
  }
  @media only screen and (max-width: 926px) {
    .footer {
      visibility: hidden;
    }
  }
`;

export default SFooter;
