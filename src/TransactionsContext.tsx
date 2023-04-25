import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "./services/api";

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createAt: string;
}

/** interface TransactionInput <option 1> 
interface TransactionInput{
    title: string;
    amount: number;
    type: string;
    category: string;
}
*/

/** interface TransactionInput <option 2> */
type TransactionInput = Omit<Transaction, 'id' | 'createAt'>;

/** interface TransactionInput <option 3>
type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'category'>;
**/

interface TransactionsProviderProps{
    children: ReactNode;
}

interface TranactionContextDate {
    transactions: Transaction[];
    createTrasanction: (transation: TransactionInput) => void;
}

export const TransactionsContext = createContext<TranactionContextDate>(
    {} as TranactionContextDate
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [ transactions, setTransactios ] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactios(response.data.transactions))
    }, []);

    function createTrasanction(transaction: TransactionInput) {
        api.post('/transactions', transaction)
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTrasanction }}>
            {children}
        </TransactionsContext.Provider>
    )
    
}

