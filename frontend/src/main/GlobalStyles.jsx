import {createGlobalStyle} from 'styled-components';
export default createGlobalStyle`

    :root {
      --bg-blue: #ffffff;
     
      --logo-height: 100px;
      --header-height: 100px;
      --menu-top-height: 70px;
      --aside-width: 225px;
      

      --shadow: 
        0 2px 23px 0 #00CED1,
        0 2px 49px 0 rgba(84, 231, 242, 0.06);


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
      1fr;
      

      grid-template-areas:
        "logo header"
        "menu content"
        "menu content";
        
      height: 100vh;
      background: linear-gradient(180deg, #ffffff 15%, #00CED1 )
 }
  aside.logo {
   grid-area: logo;
 }
  header.header {
   grid-area: header;
 }
  aside.menu-area {
   grid-area: menu;
   background-color: #00CED1;
 }
  main.content {
   grid-area: content;
   background-color: #ffffff;
 }
 
`;
