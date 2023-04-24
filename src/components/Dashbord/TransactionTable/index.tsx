import { useEffect } from "react"
import { Container } from "./styles";

export function TransactionsTable() {
    useEffect(() => {
        fetch('http://localhost:3000/api/transactions')
            .then(response => response.json())
            .then(data => console.log(data))
    }, []);
    
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
                    <tr>
                        <td>Energia</td>
                        <td className="deposit">- R$ 219,20</td>
                        <td>Conta Mês</td>
                        <td>20/02/2023</td>
                    </tr>
                    <tr>
                        <td>Escola</td>
                        <td className="deposit">- R$ 819,80</td>
                        <td>Conta Mês</td>
                        <td>04/02/2023</td>
                    </tr>
                    <tr>
                        <td>Contrato</td>
                        <td className="withdraw">+ R$ 1.500,00</td>
                        <td>Conta Mês</td>
                        <td>10/02/2023</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}