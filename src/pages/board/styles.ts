import styled from 'styled-components'

export const Container = styled.main`
    max-width: 1120px;
    margin: 2rem auto;
    padding: 2rem;
    background-color: #FFF;
    border-radius: 26px;

    form{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    input{
        width: 98%;
        height: 50px;
        background-color: #20212c;
        border: 1px solud #424242;
        border-radius: 6px;
        padding:3px 10px;
        color: black;
    }

    button{
        margin-left: 10px;
        width: 8%;
        height: 50px;
        border:0;
        background-color: #FFB800;
        border-radius: 6px;;
    }

    h1{
        color: rgb(19, 18, 18);
        margin-top: 1rem;
    }

    section{
        display:flex;
        flex-direction: column;
        max-height: 300px;
        overflow: scroll;
    }
`



export const TaskList = styled.article`
    background-color: #20212c;
    margin: 1rem 0;
    padding: 0.7rem;
    border-radius: 6px;;

    p{
        cursor: pointer;
        color: #f2f6fc;
        font-size: 1rem;
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

    button{
        background: transparent;
        border:0;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFF;

        &+button{
            margin-left: 5px;
            color: #FFF;
            cursor: pointer;
        }

        span:hover{
            filter: brightness(0.7);
        }
    }
`

export const DonatesContainer = styled.div`
    max-width: 1120px;
    margin: 1rem auto;
    padding: 1rem;
    background: #ffffff;
    border-radius: 6px;

    h3{
        color: #FFB800;
        font-size: 2rem;
    }

    div{
        display: flex;
        align-items: center;
        margin-top: 1rem;
    }

    time{
        color: rgb(0, 0, 0);
        font-size: 1.4rem;
        padding: 10px;
    }
`
