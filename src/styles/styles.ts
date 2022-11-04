import Link from 'next/link'
import styled from 'styled-components'

export const Container = styled.main`
    max-width: 1120px;
    margin-top: 5rem;
    margin-right: auto;
    margin-left:auto;
    padding: 0 2rem;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 80vh;


    img{
        margin-top: 2rem;
        width: 50rem;

        @media screen and (max-width:448px){
            width: 42rem;
        }

        @media screen and (max-width:419px){
            width: 100%;
        }
    }

    h1{
        font-size: 3rem;
        margin-top: 1rem;
        text-align: center;
        color: #FFF;
            font-weight: 900;


    text-shadow: 2px 3px 0px #898999;
    line-height: 1.2;

    @media screen and (max-width:374px){
            font-size: 2.5rem;
        }
    }

    h2{
        font-size: 2rem;
        margin-top: 1rem;
    }

    section{
    max-width: 700px;


    p{
        margin-top: 1rem;
        font-size: 1.5rem;
        text-align: center;
        color: #FFF;
    }

    span{
        color: #04dd75;
        font-weight: bold;
    }
}

`
export const GoBoard = styled(Link)`
position: relative;
width: 200px;
height: 60px;
background: #141414;
display: flex;
align-items: center;
justify-content: center;
color: rgba(255,255,255,0.5);
text-transform: uppercase;
text-decoration: none;
font-size: 2rem;
font-weight: 500;
letter-spacing: 0.2rem;
gap: 10px;

&:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #359ad8;
    transform: scaleX(0);
    transition: transform 0.5s ease-in-out;
    transform-origin: right;
}

&:hover:before{
    transform: scaleX(1);
      transform-origin: left;
}

span{
    display: inline-block;
    z-index:2;
    transition: 0.5s ease-in-out;
}

&:hover span{
    color: #333;
}

i{
    position: relative;
    display: inline-block;
    width: 2px;
    height: 30px;
    background: #359ad8;
    transition: .5s, width .5s, height .5s;
    transition-delay: 0s, 0.5s, 1s;
}

&:hover i{
    width: 30px;
    height: 2px;
    background: #333;
    transition-delay: 0s, 1s, 0.5s;
}

i:before{
    content: '';
    position: absolute;
    top: 0.5px;
    right: 0;
    width: 50%;
    height: 2px;
    background: transparent;
    transition: 1s;
    transform-origin: right;
}

&:hover i:before{
    background: #333;
    rotate: 45deg;
    transition-delay: 1.5s;
}

i:after{
    content: '';
    position: absolute;
    top: -0.5px;
    right: 0;
    width: 50%;
    height: 2px;
    background: transparent;
    transition: 1s;
    transform-origin: right;
}

&:hover i:after{
    background: #333;
    rotate: -45deg;
    transition-delay: 1s;
}

`

    export const SocialMediaContainer = styled.div`
    z-index: 9;
    position: fixed;
    bottom: 0px;
    left: 2%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 1.4rem;

    a{
        margin-top:1.5rem;
        svg{
            font-size:2rem;
            color: #fff;
            transition: .5s;
        }
    }

    a:hover{
        svg{

            transform: scale(1.2);
        }
    }

    div{
    margin-top: 1.5rem;
    position: relative;
    left: 8px;
    width: 3px;
    height: 10rem;
    background: #fff;
    border-radius: 5px;
    }
    `
