import { useState } from "react";
import Modal from 'react-modal';
import { Container, Content } from "./styles"
import logoImg from './../../assets/logo.svg';

export function Header() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }
    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt money"/>
                <button
                    type="button"
                    onClick={handleOpenNewTransactionModal}>
                    Nova Transação
                </button>
                <Modal
                    isOpen={isNewTransactionModalOpen}
                    onRequestClose={handleCloseNewTransactionModal}
                >
                <h2>Cadastrar transação</h2>
            </Modal>
            </Content>

        </Container>
    )
}