import {createGlobalStyle} from 'styled-components';
export default createGlobalStyle`

    :root {
      --bg-blue: #e6ebf2;
     
      --logo-height: 100px;
      --header-height: 100px;
      --menu-top-height: 70px;
      --aside-width: 225px;
      --footer-height: 40px;

      --shadow: 
        0 2px 23px 0 rgba(0,0,0,0.1),
        0 2px 49px 0 rgba(0, 0, 0, 0.06);


    }
 * {
   box-sizing: border-box;
   font-family: 'Montserrat', sans-serif;
 }   
  .app {
   margin: 0px;
   display: grid;
   grid-template-columns: var(--aside-width) 1fr;
   grid-template-rows:
      var(--header-height)
      1fr
      var(--footer-height);

      grid-template-areas:
        "logo header"
        "menu content"
        "menu footer";
      height: 100vh;
      background-color: #F5f5f5;  
 }
  aside.logo {
   grid-area: logo;
 }
  header.header {
   grid-area: header;
 }
  aside.menu-area {
   grid-area: menu;
 }
  main.content {
   grid-area: content;
   background-color: rgb(44, 43, 43);
 }
  footer.footer {
   grid-area: footer;
 }
`;
