import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
`;
export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 10rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        font-size: 1rem;
        color: var(--shape);
        background-color: var(--blue-light);
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        
        transition: .2s;

        &:hover{
            filter: brightness(.9);

        }
    }
`;
export const Titulo = styled.h1``