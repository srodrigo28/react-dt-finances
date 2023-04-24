import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createServer } from 'miragejs'

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        { id: 1, title: 'conta 1', amount: 400, type: 'deposito', category: 'Food 1', createdAt: new Date() },
        { id: 2, title: 'conta 2', amount: 500, type: 'deposito', category: 'Food 2', createdAt: new Date() },
        { id: 3, title: 'conta 3', amount: 600, type: 'deposito', category: 'Food 3', createdAt: new Date()}
      ]
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