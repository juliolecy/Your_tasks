import styled from 'styled-components'



export const Container = styled.article`

margin: 2rem 4rem;
padding: 2rem;
background-color: #fff;
color: black;


p{
    font-size: 2rem;
    line-height: 150%;
    text-align: center;
}
`

export const ContentContainer = styled.div`
margin-top: 1rem;
margin-bottom: 3rem;
display: flex;
align-items: center;
justify-content: center;
`

export const CreatedInfo = styled.div`
display: flex;
align-items: center;

    svg{
        font-size: 2.5rem;
        color: #FFB800;
        margin-right: 1rem;
    }

time{
    color: #FFB800;
    font-size: 2rem;
}
`
