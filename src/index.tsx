import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createServer, Model } from 'miragejs'

createServer({

  models: {
    transaction: Model,
    user: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        { id: 1, title: 'Frelance de app', type: 'deposit', category: 'Dev', amount: 6000, createAt: new Date('2022-03-12 10:10:11') },
        { id: 2, title: 'Frelance de mobile', type: 'deposit', category: 'Dev', amount: 4000, createAt: new Date('2023-03-12 14:10:11') },
        { id: 3, title: 'Contas mês', type: 'withdraw', category: 'Mensal', amount: 5000, createAt: new Date('2023-03-14 14:10:11') },
        { id: 4, title: 'Contas mês', type: 'withdraw', category: 'Mensal', amount: 200, createAt: new Date('2023-03-15 11:10:11')},
      ],
    })
  },
  
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
        // this.get('/transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);