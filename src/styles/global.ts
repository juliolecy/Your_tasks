import { createGlobalStyle } from "styled-components";

export const GlobalStyle =  createGlobalStyle`
*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
}

html{
    font-size:62.5%;
    scroll-behavior: smooth;
    width: 100%;
        height: 100%;

}

body{
    width: 100%;
        height: 100%;;
    font-size: 1.6rem;
    font-family: Arial, Helvetica, sans-serif;

    background-image: url('images/bg.png');
    background-repeat: no-repeat;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-size:cover;
    background-position:center;
    background-color: #010142f5;



    /* &:before{
        min-height: 100%;
        content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,.2);
    background-image: url('images/dot.png');
    background-repeat:no-repeat;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-size:cover;
    background-position:center;
    z-index: -9;
    } */
}



button{
    cursor:pointer;
}

`
