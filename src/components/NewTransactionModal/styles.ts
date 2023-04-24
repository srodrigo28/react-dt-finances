import styled from "styled-components";

export const BtnClose = styled.button`
        position: absolute;
        right: 3.5rem;
        top: -7rem;
        border: 0;
        background: transparent;
        font-size: 10rem;
        font-weight: bold;

        transition: 1s;

        &:hover{
            filter: brightness(.5);
        }
`;
export const Container = styled.form`
    h2{
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background-color: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder{
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }
    button[type="submit"]{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #fff;
        border-radius: 0.25rem;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;

        transition: 1s;

        &:hover{
            filter: brightness(.9)
        }
    }

    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        font-size: 10rem;
    }
`;
export const TransctionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

`;


interface RadioBoxProps{
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    green: '#cee891',
    red: '#ff4e44'
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;
        background: ${(props) => props.isActive
        ? colors[props.activeColor]
        : 'transparent' };

        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5rem;

        transition: 1s;

        &:hover{
            border: 3px solid;
            border-color: #aaa;
        }

        img{
            width: 35px;
            height: 35px;
        }
        span{
            font-size: 1rem;
            font-weight: 500;
            color: var(--text-title);
        }
`;

