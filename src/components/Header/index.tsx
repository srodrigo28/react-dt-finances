import { Container, Content, IconContainer } from "./styles"
import logoImg from './../../assets/logo.svg';
import { MdClose } from 'react-icons/md'

interface HeaderProps{
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {
    
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt money"/>
                <button
                    type="button"
                    onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>
                <IconContainer>
                    <MdClose />
                </IconContainer>
            </Content>

        </Container>
    )
}