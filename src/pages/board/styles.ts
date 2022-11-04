import styled from 'styled-components'

export const Container = styled.main`

    margin: 2rem 6rem;
    padding: 2rem;
    background-color: #FFF;
    border-radius: 26px;
    position:relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: max-content;
    max-height: 70vh;
    h1{
        color: rgb(19, 18, 18);
        margin-top: 1rem;
    }

    section{
        display:flex;
        flex-direction: column;
        max-height: 300px;
        overflow-y: scroll;
        width: 90%;
        height: 100%;
        overflow-x: hidden;
    }

    @media screen and (max-width: 420px)
    {
        margin: 2rem 2rem;
    }
`
export const Bubble = styled.div`
border-radius:50%;
background-color: #485aff;
display: flex;
align-items: center;
justify-content: center;
width: 42px;
height: 42px;
color: #FFF;
position: absolute;
top: -2.1rem;
    left: -2.2rem;
`
export const WarnText = styled.span`
color: #ff3636;
flex-direction: row;
display: flex;
align-items: center;
font-size: 1.1rem;

svg{
    margin-left: 5px;
    background: transparent;
    border:0;
}
`
export const Form = styled.form`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90%;

        input{
        width: 98%;
        height: 50px;
        background-color: #20212c;
        border: 1px solid #424242;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
        padding:3px 10px;
        color: #fff;
    }

    button{
        width: 8%;
        height: 50px;
        border:0;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
    }
`



export const TaskList = styled.article`
    background-color: #20212c;
    margin: 1rem 0;
    padding: 0.7rem;
    border-radius: 6px;;

    a{
        text-decoration: none;
    p{
        cursor: pointer;
        color: #f2f6fc;
        font-size: 2rem;
        overflow-wrap: break-word;
        margin: 1rem 1.5rem;

    }
}

`

export const ActionsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1rem;

    div{
        display: flex;
        align-items: center;
        justify-content: center;

        time{
            color: #FFB800;
            margin-left: 5px;
            margin-right: 1rem;
        }
    }

`

export const ActionsButtons = styled.div`
display:flex;
align-items: center;
justify-content: center;

svg{
    font-size:2rem;
    background: transparent;
    margin-right: 2rem;
    cursor: pointer;
}
`
