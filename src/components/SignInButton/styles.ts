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
    cursor: initial;
    svg{
      font-size:3rem;
      cursor:pointer;
    }

    img{
        width: 35px;
        height: 35px;
        border-radius: 50%;
        margin-right: 1rem;
    }

    &:hover svg{
        filter: brightness(0.8)
    }

`

export const SignIn = styled.span`
position: relative;
width: 140px;
height: 47px;
background: #fff;
border-radius: 60px;
display:flex;
align-items: center;
justify-content: center;
border-top: 0.5px solid #9f9f9f;
border-left: 0.5px solid #9f9f9f;
padding-left: 36px;
transition: .5s;
font-family: 'Montserrat', sans-serif ;
cursor: pointer;
margin-right: 3rem;





&:hover{
    padding-left: 0;
    padding-right: 40px;
}

svg{
    position:absolute;
    font-size: 3rem;
    left: 9px;
    transition: .5s;

}

&:hover svg{
    left: calc(100% - 37px);
}

@media screen and(max-width:446px){
    font-size: 1.5rem;
    width: 114px;
    height: 39px;
}

`
