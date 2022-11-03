import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
    bottom: 40px;
    right: 50px;
    z-index: 9;

    button{
        border:0;
        background-color: #FFB800;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        font-size: 1rem;
        filter: drop-shadow(2px 1px 5px rgba(0,0,0, .2));
        transition: all .2s;
    }

    button:hover{
        transform: scale(1.2);
    }
`