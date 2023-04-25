import { useContext } from 'react';

import incomeImg from "./../../../assets/income.svg"
import outComeImg from "./../../../assets/outcome.svg"
import totalImg from "./../../../assets/total.svg"
import { TransactionsContext } from "../../../TransactionsContext";

import { Container } from "./styles";

export function Summary() {
    const {transactions} = useContext(TransactionsContext);

    console.log(transactions);
    
    return(
        <Container>
            <div>
                <header>
                    <p>Entrada</p>
                    <img src={incomeImg} alt="entradas" />
                </header>
                <strong>+ R$ 4.000</strong>
            </div>
            <div>
                <header>
                    <p>Saída</p>
                    <img src={outComeImg} alt="saídas" />
                </header>
                <strong>- R$ 2.000</strong>
            </div>
            <div>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>+ R$ 2.000</strong>
            </div>
        </Container>
    )
}