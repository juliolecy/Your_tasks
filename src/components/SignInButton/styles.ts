import styled from 'styled-components'

export const Button = styled.button`
    height: 2.5rem;
    border-radius: 3rem;
    background: transparent;
    border:0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1.5rem;
    color: #FFF;
    font-weight: bold;
    transition: filter 0.2s;

    svg{
        height: 20px;
        height: 20px;
    }

    img{
        width: 35px;
        height: 35px;
        border-radius: 50%;
        margin-right: 1rem;
    }

    &:hover{
        filter: brightness(0.8)
    }

    svg:first-child{
        margin-right: 1rem;
    }

    svg:last-child{
        margin-left: 1rem;
    }
`
