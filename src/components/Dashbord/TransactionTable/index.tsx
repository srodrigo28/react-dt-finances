import { useContext } from "react"
import { Container } from "./styles";
import { TransactionsContext } from "../../../TransactionsContext";

export function TransactionsTable() {
    const {transactions} = useContext(TransactionsContext);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            {/* Formatar valor */}
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            {/* Formatar data */}
                            <td>
                                {new Intl.DateTimeFormat('pt-BR').format(
                                    new Date(transaction.createAt)
                                )}
                            </td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </Container>
    )
}