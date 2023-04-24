import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -100px;

    > div{
        background-color: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        strong{
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            line-height: 3rem;
        }
        :last-child{
            background-color: var(--green);
            color: var(--shape);
        }
    }
`
export const Titulo = styled.h1``