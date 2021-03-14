import styled from 'styled-components';

export const Container = styled.div`

  aside.menu-area {
      background-color: var(--bg-blue);
      box-shadow:
      0px 0 0px 0 #00CED1,
      0px 0 5px 0 #00CED1;
      margin-top: 30px;
  }

  .menu a {
      display: block;
      text-decoration: none;
      color: #211f1f;
      font-weight: 300;
      padding: 15px 25px;
      
  }
  

  .menu a:hover {
      background: linear-gradient(180deg, #ffffff 25%, #00CED1 100% )
  }
  @media(max-width: 768px) {
    .menu {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .menu a{
        display: inline;
        padding: 10px;
        margin: 0px;
    }
    .menu {
        height: 100%;
        justify-content: space-around;
    }
}
`;
