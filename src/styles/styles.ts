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

export const Donaters = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;

    img{
        width: 65px;
        height: 65px;
        border-radius: 50%;
        border: 2px solid #FFF;
        transition: all 0.2s;

        + img{
            margin-left: 10px;
        }
    }

    img:hover{
        transform: scale(1.2)
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
        }
    }

    a:hover{
        svg{
            color: blue;
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
