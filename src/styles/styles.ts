import styled from 'styled-components'

export const Container = styled.main`
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 2rem;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    

    img{
        margin-top: 2rem;
        width: 32rem;
    }


    section{
    max-width: 700px;

    h1{
        font-size: 1.8rem;
        margin-top: 1rem;
        text-align: center;
        color: #FFF;
    }

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