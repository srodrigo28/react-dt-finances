import { Container, BtnClose, TransctionTypeContainer, RadioBox } from "./styles";
import closeImg from "./../../assets/close.svg";
import incomeImg from "./../../assets/income.svg";
import outcomeImg from "./../../assets/outcome.svg";
import Modal from "react-modal";
import { useState } from "react";

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [type, setType] = useState('deposit')
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
                <Container>
                    <h2>Cadastrar transação</h2>
                    <input type="text" placeholder="Titulo" />
                    <input type="text" placeholder="Valor" />
                    <input type="text" placeholder="Categoria" />
                
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