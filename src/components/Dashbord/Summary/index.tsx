import { useContext } from 'react';

import incomeImg from "./../../../assets/income.svg"
import outComeImg from "./../../../assets/outcome.svg"
import totalImg from "./../../../assets/total.svg"
import { TransactionsContext } from "../../../TransactionsContext";

import { Container } from "./styles";

export function Summary() {
    const {transactions} = useContext(TransactionsContext);

    /** Exemplo 1 
    const totalDeposits = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            return acc + transaction.amount;
        }
        return acc;
    }, 0);
    */
    
    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.widthdraws += transaction.amount;
            acc.total -= transaction.amount;
        }
        return acc;
    }, {
        deposits: 0,
        widthdraws: 0,
       total: 0,
    })
    return(
        <Container>
            <div>
                <header>
                    <p>Entrada</p>
                    <img src={incomeImg} alt="entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saída</p>
                    <img src={outComeImg} alt="saídas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.widthdraws)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}