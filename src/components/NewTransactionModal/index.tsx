import { FormEvent, useState } from "react";
import Modal from "react-modal";

import closeImg from "./../../assets/close.svg";
import incomeImg from "./../../assets/income.svg";
import outcomeImg from "./../../assets/outcome.svg";

import { Container, BtnClose, TransctionTypeContainer, RadioBox } from "./styles";
import { useTransactions } from "../../hooks/UseTransactions";

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const { createTrasanction } = useTransactions();

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit')

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTrasanction({
            title, amount, category, type,
        })
        setTitle(''); setAmount(0); setCategory(''); setType('deposit');

        onRequestClose();
    }

    return (
             <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
            >
                <BtnClose
                    type="button"
                    onClick={onRequestClose}
                    className="react-modal-close"
                >
                    <img src={closeImg} alt="fechar modal" />
                </BtnClose>
                <Container onSubmit={handleCreateNewTransaction}>
                    <h2>Cadastrar transação</h2>
                    <input type="text" placeholder="Titulo" value={title} onChange={event => setTitle(event.target.value)}  />
                    <input type="text" placeholder="Valor" value={amount} onChange={event => setAmount(Number(event.target.value))} />
                    <input type="text" placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)} />
                
                    <TransctionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => { setType('deposit') }}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="" />
                        <span>Depósito</span>    
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => {setType('withdraw')}}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="" />
                        <span>Saída</span>    
                    </RadioBox>
                    </TransctionTypeContainer>
                    
                    <button type="submit">Cadastrar</button>
                </Container>
            </Modal>
    )
}