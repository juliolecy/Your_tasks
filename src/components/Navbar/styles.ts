import styled, { keyframes } from 'styled-components';

const LogoEffect = keyframes`
 0%{
        background-position: -500%;
    }
    100%{
        background-position: 500%;
    }
    `

export const Container = styled.header`
height:6rem;
background: transparent;
box-shadow:0 6px 16px -2px #ffffff33;
`

export const Content = styled.div`
    max-width: 1120px;
    height:6rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav{
        a{
            display:inline-block;
            position: relative;
            padding: 0.5rem;
            height: 5rem;
            line-height: 5rem;
            color: #FFF;
            font-family: 'Montserrat', sans-serif;
            text-decoration: none;

            @media screen and (max-width:544px){
                margin-left: 2rem;
        }
        }
    }

    button{
       // margin-left: auto;
    }
`

export const Logo = styled.h1`
        font-size:2.5rem;
        cursor: pointer;
        font-weight: normal;
        width: 100px;
        color: white;
        position: relative;
        text-transform: uppercase;
        letter-spacing: 4px;
        background: linear-gradient(90deg, #000, #fff, #000);
        background-repeat: no-repeat;
        background-size: 80%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: rgba(255,255,255,0);
        font-family: 'Lobster', cursive;
        text-decoration: none;
        animation: ${LogoEffect} 5s linear infinite;
        margin-left: 2rem;

        @media screen and (max-width:544px){
            font-size: 2rem;
        }

        @media screen and (max-width:544px){
          display:none;
        }
`
