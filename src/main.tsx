import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/components/App';
import { Provider } from 'react-redux';
import { store } from '@/service/store';
import './main.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
